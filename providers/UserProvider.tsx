import { CustomUserContextProvider } from '@/hook';

interface IUserProviderProps {
  children: React.ReactNode;
}
export const UserProvider: React.FC<IUserProviderProps> = ({ children }) => (
  <CustomUserContextProvider>{children}</CustomUserContextProvider>
);
