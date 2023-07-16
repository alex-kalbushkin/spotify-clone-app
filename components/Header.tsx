'use client';

import { useRouter } from 'next/navigation';
import React, { FC, ReactNode } from 'react';
import { BiSearch } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { twMerge } from 'tailwind-merge';
import Button from './Button';

interface IHeaderProps {
  children: ReactNode;
  className?: string;
}

const Header: FC<IHeaderProps> = ({ children, className = '' }) => {
  const router = useRouter();

  return (
    <div
      className={twMerge(
        'h-fit bg-gradient-to-b from-emerald-800 p-6',
        className
      )}
    >
      <div className="flex justify-between items-center w-full mb-4">
        <div className="hidden md:flex items-center gap-x-2">
          <button
            onClick={() => router.back()}
            className="rounded-full bg-black text-white flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretLeft size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className="rounded-full bg-black text-white flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretRight size={35} />
          </button>
        </div>

        <div className="flex md:hidden items-center gap-x-2">
          <button
            onClick={() => router.push('/')}
            className="bg-white flex items-center justify-center rounded-full text-black hover:opacity-75 transition p-2"
          >
            <HiHome size={20} />
          </button>
          <button
            onClick={() => router.push('/search')}
            className="bg-white flex items-center justify-center rounded-full text-black hover:opacity-75 transition p-2"
          >
            <BiSearch size={20} />
          </button>
        </div>

        <div className="flex justify-between items-center gap-x-4">
          <>
            <Button className="bg-transparent text-white font-medium">
              Sign up
            </Button>

            <Button className="bg-white text-black px-6 py-2">Log in</Button>
          </>
        </div>
      </div>

      {children}
    </div>
  );
};

export default Header;
