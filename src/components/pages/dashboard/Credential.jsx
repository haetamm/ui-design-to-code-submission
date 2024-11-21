import React from 'react';
import { CiMail } from 'react-icons/ci';
import { IoCallOutline } from 'react-icons/io5';
import { PiBuilding, PiIdentificationCard } from 'react-icons/pi';

const Credential = () => {
  return (
    <>
      <div className='px-1 py-4 xs:py-3 md:p-7 inline-block xs:flex justify-center lg:justify-start space-x-0 xs:space-x-3 items-center bg-white w-full'>
        <div className='flex justify-center'>
          <img
            src='/img/profile.jpeg'
            alt='profile-img'
            className='h-[130px] w-[130px] rounded-full'
          />
        </div>
        <div className='flex justify-center'>
          <div className='block xs:flex xs:flex-col mt-4 xs:mt-0'>
            <div className='text-xl xs:text-2xl font-bold text-[#1cabe6]'>
              Tatang Haetami (thaetamii)
            </div>
            <div className='inline-block xs:flex justify-between mt-2'>
              <div className='flex flex-col xs:border-r-2 pr-4'>
                <div className='flex space-x-3 xs:space-x-1 md:space-x-3 items-center'>
                  <div className='bg-blue-100 rounded-full p-1.5'>
                    <PiBuilding className='h-6 w-6 flex-shrink-0 text-[#1cabe6] ' />
                  </div>
                  <p>Loan Market Office Dev</p>
                </div>
                <div className='flex space-x-3 xs:space-x-1 md:space-x-3 items-center mt-4'>
                  <div className='bg-blue-100 rounded-full p-1.5'>
                    <PiIdentificationCard className='h-6 w-6 flex-shrink-0 text-[#1cabe6] ' />
                  </div>
                  <p>LM9990001</p>
                </div>
              </div>
              <div className='flex flex-col ml-0 xs:ml-4 mt-4 xs:mt-0'>
                <div className='flex space-x-3 xs:space-x-1 md:space-x-3 items-center'>
                  <div className='bg-blue-100 rounded-full p-1.5'>
                    <CiMail className='h-6 w-6 flex-shrink-0 text-[#1cabe6] ' />
                  </div>
                  <p>it@loanmarket.co.id</p>
                </div>
                <div className='flex space-x-3 xs:space-x-1 md:space-x-3 items-center mt-4'>
                  <div className='bg-blue-100 rounded-full p-1.5'>
                    <IoCallOutline className='h-6 w-6 flex-shrink-0 text-[#1cabe6] ' />
                  </div>
                  <p>08226028722</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Credential;
