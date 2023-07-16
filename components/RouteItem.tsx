import Link from 'next/link';
import React, { FC } from 'react';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

interface IRouteItemProps {
  icon: IconType;
  label: string;
  href: string;
  active?: boolean;
}

const RouteItem: FC<IRouteItemProps> = ({
  icon: Icon,
  label,
  href,
  active,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        'flex flex-row items-center h-auto w-full font-medium cursor-pointer text-neutral-400 hover:text-white transition py-1 gap-x-3',
        active && 'text-white'
      )}
    >
      <Icon size={26} />
      <p className="truncate w-full">{label}</p>
    </Link>
  );
};

export default RouteItem;
