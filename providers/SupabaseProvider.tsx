'use client';

import { Database } from '@/types_db';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import React, { FC, ReactNode, useState } from 'react';

interface ISupabaseProviderProps {
  children: ReactNode;
}

export const SupabaseProvider: FC<ISupabaseProviderProps> = ({ children }) => {
  const [supabaseClient] = useState(() =>
    createClientComponentClient<Database>()
  );

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
};
