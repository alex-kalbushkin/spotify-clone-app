'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';
import { FaPlay } from 'react-icons/fa';

interface IListItemProps {
  name: string;
  imageSrc: string;
  href: string;
}

const ListItem: FC<IListItemProps> = ({ name, imageSrc, href }) => {
  const router = useRouter();

  const onHandleClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onHandleClick}
      className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4"
    >
      <div className="relative h-[64px] w-[64px]">
        <Image src={imageSrc} fill alt="Image" />
      </div>
      <p className="font-medium truncate py-5">{name}</p>
      <div className="absolute transition opacity-0 right-5 rounded-full bg-green-500 text-black flex justify-center items-center p-4 group-hover:opacity-100 hover:scale-110 drop-shadow-md">
        <FaPlay size={12} />
      </div>
    </button>
  );
};

export default ListItem;
