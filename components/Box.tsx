import React, { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface IBoxProps {
  children: ReactNode;
  className?: string;
}

const Box: FC<IBoxProps> = ({ children, className = '' }) => {
  return (
    <div
      className={twMerge('bg-neutral-900 w-full h-fit rounded-lg', className)}
    >
      {children}
    </div>
  );
};

export default Box;
