import React, { FC } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { TbPlaylist } from 'react-icons/tb';

interface ISongLibraryProps {}

const SongLibrary: FC<ISongLibraryProps> = ({}) => {
  const onClickHandler = () => {
    // handle upload later
  };

  return (
    <div className="flex flex-col ">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-neutral-400 font-medium ">Your library</p>
        </div>
        <AiOutlinePlus
          size={20}
          className="text-neutral-400 hover:text-white transition cursor-pointer"
          onClick={onClickHandler}
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">List of songs</div>
    </div>
  );
};

export default SongLibrary;
