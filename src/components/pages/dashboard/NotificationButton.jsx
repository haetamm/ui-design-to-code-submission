import React, { useState } from 'react';
import { IoIosNotificationsOutline, IoMdArrowDropdown } from 'react-icons/io';

import { Link, useNavigate } from 'react-router-dom';
import { urlPage } from '../../../utils/constans';
import { useMediaQuery } from 'react-responsive';
import TimelineNotification from '../../layouts/TimeLineNotification';

const NotificationButton = () => {
  const navigate = useNavigate();
  const isTab = useMediaQuery({ minWidth: 768 });
  const [showNotifDropdown, setShowNotifDropdown] = useState(false);

  const toggleDropdown = () => {
    if (isTab) {
      setShowNotifDropdown((prevState) => !prevState);
    } else {
      navigate(urlPage.NOTIFICATION);
    }
  };

  return (
    <div className='flex justify-center items-center space-x-1 z-50'>
      <div className='relative'>
        <div className='flex justify-center rounded-md items-center'>
          <IoIosNotificationsOutline className='w-8 h-8' />
          <IoMdArrowDropdown
            className={`h-7 w-7 hover:text-[#1cabe6] cursor-pointer transition-transform duration-300 ${
              showNotifDropdown ? 'rotate-180' : ''
            }`}
            onClick={toggleDropdown}
          />
        </div>

        {showNotifDropdown && (
          <div className='absolute right-0  mt-6 w-[360px] xs:left-1/2 xs:transform xs:-translate-x-1/2 xs:w-[400px] bg-white border border-gray-200 rounded-md shadow-lg z-50'>
            <div className='text-sm text-gray-600'>
              <div className=' px-4 py-2 shadow-sm'>
                <div className='font-bold text-md'>NOTIFICATION</div>
              </div>
              <hr className='mb-0' />
              <div className=' max-h-[280px] flex justify-center w-full'>
                <div className='overflow-auto pr-8 mt-1 custom-scrollbar'>
                  <div className='flex flex-col space-y-6 pt-2 relative'>
                    <TimelineNotification />
                  </div>
                </div>
              </div>
              <div className='flex justify-end px-3 py-2'>
                <Link
                  onClick={toggleDropdown}
                  to={urlPage.NOTIFICATION}
                  className='text-sm hover:underline'
                >
                  Lihat Selengkapnya
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationButton;
