import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../../store/sidebarSlice';
import { LuAlignJustify } from 'react-icons/lu';
import { IoIosNotificationsOutline, IoMdArrowDropdown } from 'react-icons/io';
import NotificationButton from '../pages/dashboard/NotificationButton';
import { useMatches } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  const matches = useMatches();
  const namePage = matches.find((match) => match.handle?.name);

  return (
    <div className='w-full fixed z-50 flex justify-center'>
      <div className='kontener border-b-[3px] bg-white lg:px-2 xl:px-4'>
        <div className='flex justify-between items-center px-2 py-1 lg:py-2'>
          <div className='flex items-center'>
            <button
              onClick={() => dispatch(toggleSidebar())}
              className='h-9 w-9 flex items-center justify-center lg:hidden'
            >
              <LuAlignJustify className='h-9 w-9' />
            </button>
            <div className='text-lg md:text-3xl pl-[15px] lg:pl-[160px] xl:pl-[210px]'>
              {namePage?.handle?.name || 'Loan Market'}
            </div>
          </div>
          <div className='flex items-center space-x-1'>
            <div className='flex xs:hidden space-x-[1px] px-1 h-8 items-center'>
              <img
                src='/img/profile.jpeg'
                alt='profile-img'
                className='h-8 w-8 rounded-full block xs:hidden'
              />
              <IoMdArrowDropdown className='h-7 w-7' />
            </div>
            <div className='flex space-x-[1px] border-x-2 px-1 items-center'>
              <IoIosNotificationsOutline className='w-8 h-8' />
              <NotificationButton />
            </div>
            <div className='hidden xs:flex space-x-[1px] border-r-2 px-1 h-8 items-center'>
              <p className='text-md md:text-lg'>Tatang Haetami</p>
              <IoMdArrowDropdown className='h-7 w-7' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
