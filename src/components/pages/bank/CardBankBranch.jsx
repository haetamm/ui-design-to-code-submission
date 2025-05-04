import React from 'react';
import PropTypes from 'prop-types';
import { MdOutlineStar } from 'react-icons/md';
import { Button } from 'primereact/button';

const CardBankBranch = ({ name, rating, address, reviews }) => {
  return (
    <>
      <div className="border-2 shadow-md p-5 lg:p-3 xl:p-4 rounded-lg flex flex-col h-full">
        <div className="flex justify-end">
          <Button
            icon="pi pi-pen-to-square"
            className=" text-[#1cabe6] border-[#1cabe6] border-2 h-8 w-8"
          />
        </div>
        <div className="text-md mt-3 text-center font-bold text-[#1cabe6]">
          {name}
        </div>
        <div className="flex justify-center mt-3">
          {[...Array(5)].map((_, index) => (
            <MdOutlineStar
              key={index}
              className={
                index + 1 <= rating
                  ? 'text-[#1cabe6] mr-1 w-7 h-7'
                  : 'text-gray-300 mr-1 w-7 h-7'
              }
            />
          ))}
        </div>
        <p className="text-center">
          <small className="text-center font-semibold">{reviews} Reviews</small>
        </p>
        <p className="text-sm mt-2">{address}</p>
        <div className="w-full flex justify-center mt-[3rem] gap-5">
          <Button
            label="Contact"
            className="p-1 shadow-lg text-md border-[1px] rounded-md w-full md:w-[100px]"
          />
          <Button
            label="Officer"
            className="p-1 shadow-lg text-md border-[1px] rounded-md w-full md:w-[100px]"
          />
        </div>
      </div>
    </>
  );
};

CardBankBranch.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  reviews: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default CardBankBranch;
