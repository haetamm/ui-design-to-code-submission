import React from 'react';
import PropTypes from 'prop-types';
import { MdOutlineStar } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { urlPage } from '../../../utils/constans';
import { Button } from 'primereact/button';
import { scrollTop } from '../../../utils/helper';

const CardBank = ({ id, img, rating, reviews, bank_name, description }) => {
  return (
    <div className="border-2 shadow-md p-5 lg:p-3 xl:p-6 rounded-lg flex flex-col h-full">
      <img
        src={img}
        alt={bank_name}
        className="mt-4 w-full max-w-[150px] h-auto object-contain mx-auto"
      />
      <div className="flex justify-center mt-6">
        {[...Array(5)].map((_, index) => (
          <MdOutlineStar
            key={index}
            className={
              index + 1 <= rating
                ? 'text-[#1cabe6] mr-1 w-6 h-6'
                : 'text-gray-300 mr-1 w-6 h-6'
            }
          />
        ))}
      </div>
      <p className="text-center">
        <small className="text-center font-bold">{reviews} Reviews</small>
      </p>
      <div className="mt-3 font-bold text-[#1cabe6] text-lg">{bank_name}</div>
      <div className="mt-1 text-sm flex-grow">{description}</div>
      <Link
        to={`${urlPage.BANK}/${id}/detail`}
        className="w-full flex justify-center mt-5"
      >
        <Button
          onClick={scrollTop}
          label="Detail"
          className="bg-[#1cabe6] text-white p-1 shadow-lg text-md border-[1px] rounded-md w-full md:w-[130px]"
        />
      </Link>
    </div>
  );
};

CardBank.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  reviews: PropTypes.string.isRequired,
  bank_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardBank;
