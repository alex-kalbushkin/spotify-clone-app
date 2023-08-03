import { ISubscription, IUserDetails } from '@/types';
import { User } from '@supabase/auth-helpers-nextjs';
import {
  useSessionContext,
  useUser as useSupaUser,
} from '@supabase/auth-helpers-react';
import { createContext, useContext, useEffect, useState } from 'react';

interface IUserContext {
  accessToken: string | null;
  user: User | null;
  userDetails: IUserDetails | null;
  subscription: ISubscription | null;
  isLoading: boolean;
}

interface IProps {
  [propsName: string]: any;
}

const UserContext = createContext<IUserContext | undefined>(undefined);

export const CustomUserContextProvider = (props: IProps) => {
  const {
    isLoading: isLoadingUser,
    session,
    supabaseClient: supabase,
  } = useSessionContext();

  const user = useSupaUser();

  const accessToken = session?.access_token ?? null;

  const [isLoadingData, setIsLoadingData] = useState(false);
  const [userDetails, setUserDetails] = useState<IUserDetails | null>(null);
  const [subscription, setSubscription] = useState<ISubscription | null>(null);

  const getUserDetails = () => supabase.from('users').select('*').single();
  const getSubscription = () =>
    supabase
      .from('subscriptions')
      .select('*, prices(*, products(*))')
      .in('status', ['trialing', 'active'])
      .single();

  useEffect(() => {
    if (user && !isLoadingUser && !userDetails && !subscription) {
      setIsLoadingData(true);
      Promise.allSettled([getUserDetails(), getSubscription()]).then(
        (results) => {
          const userDetailsPromiseData = results[0];
          const subscriptionPromiseData = results[1];

          if (userDetailsPromiseData.status === 'fulfilled') {
            setUserDetails(userDetailsPromiseData.value.data as IUserDetails);
          }

          if (subscriptionPromiseData.status === 'fulfilled') {
            setSubscription(
              subscriptionPromiseData.value.data as ISubscription
            );
          }

          setIsLoadingData(false);
        }
      );
    } else if (!user && !isLoadingUser && !isLoadingData) {
      setUserDetails(null);
      setSubscription(null);
    }
  }, [user, isLoadingUser]);

  const contextValue: IUserContext = {
    accessToken,
    user,
    userDetails,
    subscription,
    isLoading: isLoadingData || isLoadingUser,
  };

  return <UserContext.Provider value={contextValue} />;
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error(`useUser must be used within a UserContextProvider`);
  }

  return context;
};
