import React, { useState } from 'react';
import { IoIosNotificationsOutline, IoMdArrowDropdown } from 'react-icons/io';

import { timelineNotif } from '../../../utils/data';
import { Link, useNavigate } from 'react-router-dom';
import { urlPage } from '../../../utils/constans';
import { useMediaQuery } from 'react-responsive';

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
                    {timelineNotif.map(
                      ({ time, status, details, isActive }, index) => (
                        <div key={index} className='relative flex items-center'>
                          <div className='w-16 text-right pr-4 text-sm text-gray-500'>
                            {time}
                          </div>

                          <div className='relative flex flex-col items-center'>
                            {index !== 0 && (
                              <div
                                className={`absolute top-[-65px] bottom-4 w-[2px] bg-gray-300`}
                              />
                            )}

                            <div
                              className={`relative z-10 w-4 h-4 rounded-full ${
                                isActive ? 'bg-blue-500' : 'bg-gray-500'
                              }`}
                            />
                          </div>

                          <div className='ml-4'>
                            <p className='text-sm font-medium text-gray-800'>
                              {status}
                            </p>
                            <p className='text-sm text-gray-500'>{details}</p>
                          </div>
                        </div>
                      )
                    )}
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
