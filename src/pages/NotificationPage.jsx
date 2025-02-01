import React from 'react';
import { timelineNotif } from '../utils/data';
import { IoIosClose } from 'react-icons/io';

const NotificationPage = () => {
  return (
    <>
      <div className='px-3 pb-4 md:px-3 lg:px-6 w-full'>
        <div className='pt-10 pb-4 rounded-lg'>
          <div className='block md:flex justify-center items-center'>
            <div className='flex flex-col relative space-y-6 w-full'>
              {timelineNotif.map(
                ({ time, status, details, isActive }, index) => (
                  <div key={index} className='relative flex items-center'>
                    <div className='w-20 text-right pr-6 xs:pr-8 text-sm text-gray-500'>
                      {time}
                    </div>

                    <div className='relative flex flex-col items-center'>
                      {index !== 0 && (
                        <div
                          className={`absolute top-[-110px] xs:top-[-80px] bottom-0 w-[2px] bg-gray-300
                          }`}
                        />
                      )}

                      <div
                        className={`w-4 h-4 rounded-full z-10 ${
                          isActive ? 'bg-blue-500' : 'bg-gray-500'
                        }`}
                      />
                    </div>

                    <div className='ml-4 xs:ml-7 bg-white py-3 px-4 w-full text-lg rounded-lg '>
                      <div className='flex justify-between items-center'>
                        <div className=''>
                          <p className='text-sm md:text-md font-bold'>
                            {status}
                          </p>
                          <p className='text-sm md:text-md text-gray-500'>
                            {details}
                          </p>
                        </div>
                        <IoIosClose className='w-8 h-8 shrink-0 cursor-pointer' />
                      </div>
                    </div>
                  </div>
                )
              )}
              <div className='flex justify-end m-0'>
                <button className='text-md bg-red-800 px-3 py-0.5 rounded-md text-white'>
                  CLEAR ALL
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationPage;
