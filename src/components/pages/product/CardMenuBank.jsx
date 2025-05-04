import React from 'react';
import { cardMenuBank } from '../../../utils/link';

const CardMenuBank = () => {
  return (
    <>
      <div className="p-3 py-6 md:px-3 lg:px-4 xl:p-6 flex space-x-3 overflow-auto w-full pb-3 xl:pb-0">
        {cardMenuBank.map(({ icon, label }, index) => (
          <div
            key={index}
            className="min-w-[170px] md:w-[25%] text-gray-500 bg-white rounded-md p-4 flex flex-col justify-between items-center h-[120px] md:h-[135px] xl:h-[130px]"
          >
            <div className="flex justify-center text-4xl">{icon}</div>
            <p className="text-sm text-center mt-3 break-words">{label}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardMenuBank;
