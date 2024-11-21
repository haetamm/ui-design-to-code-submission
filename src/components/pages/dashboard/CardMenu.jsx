import React from 'react';
import { cardItems } from '../../../utils/navLink';

const CardMenu = () => {
  return (
    <>
      <div className='p-3 py-4 md:px-3 lg:px-6 xl:p-6 flex space-x-6 overflow-auto w-full'>
        {cardItems.map((item, index) => (
          <div
            key={index}
            className='min-w-[160px] flex justify-between space-x-3 px-3 py-3 md:w-[25%] items-center bg-white rounded-md'
          >
            <div className='bg-blue-100 rounded-full p-1.5'>{item.icon}</div>
            <div className='flex flex-col justify-center font-bold'>
              <p className='text-lg'>{item.label}</p>
              <p className='text-[#1cabe6] text-center'>{item.count}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardMenu;
