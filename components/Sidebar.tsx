'use client';

import { usePathname } from 'next/navigation';
import React, { FC, ReactNode, useMemo } from 'react';
import { BiSearch } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi';
import Box from './Box';
import RouteItem from './RouteItem';
import SongLibrary from './SongLibrary';

interface ISidebarProps {
  children: ReactNode;
}

const Sidebar: FC<ISidebarProps> = ({ children }) => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: 'Home',
        active: pathname !== '/search',
        href: '/',
      },
      {
        icon: BiSearch,
        label: 'Search',
        active: pathname === '/search',
        href: '/search',
      },
    ],
    [pathname]
  );

  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] py-2 pl-2">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((routeItem) => (
              <RouteItem key={routeItem.label} {...routeItem} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <SongLibrary />
        </Box>
      </div>

      <main className="flex-1 h-full overflow-y-auto py-2 p-2  ">
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
