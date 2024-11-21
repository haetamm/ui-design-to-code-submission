import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

import { timelineNotif } from '../../../utils/data';

const NotificationButton = () => {
  const [showCartDropdown, setShowCartDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowCartDropdown((prevState) => !prevState);
  };

  return (
    <div className='flex justify-center items-center space-x-1 z-50'>
      <div className='relative'>
        <div className='flex justify-center rounded-md items-center'>
          <IoMdArrowDropdown
            className={`h-7 w-7 hover:text-[#1cabe6] cursor-pointer transition-transform duration-300 ${
              showCartDropdown ? 'rotate-180' : ''
            }`}
            onClick={toggleDropdown}
          />
        </div>

        {showCartDropdown && (
          <div className='absolute right-0  mt-6 w-[300px] xs:left-1/2 xs:transform xs:-translate-x-1/2 xs:w-[360px] bg-white border border-gray-200 rounded-md shadow-lg z-50'>
            <div className='text-sm text-gray-600'>
              <div className=' px-4 pt-3 pb-2 shadow-sm'>
                <div className='font-bold text-md'>NOTIFICATION</div>
              </div>
              <hr className='mb-3' />
              <div className='px-1 pb-6 max-h-[270px] flex justify-center w-full'>
                <div className='overflow-auto no-scrollbar mt-2'>
                  <div className='flex flex-col space-y-6'>
                    {timelineNotif.map(
                      ({ time, status, details, isActive }, index) => (
                        <div key={index} className='relative flex'>
                          <div className='w-16 text-right pr-4 text-sm text-gray-500'>
                            {time}
                          </div>

                          <div className='relative flex flex-col items-center'>
                            <div
                              className={`w-4 h-4 rounded-full ${
                                isActive ? 'bg-blue-500' : 'bg-gray-500'
                              }`}
                            ></div>
                            {index !== timelineNotif.length - 1 && (
                              <div className='absolute top-6 h-full w-px bg-gray-300'></div>
                            )}
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationButton;
