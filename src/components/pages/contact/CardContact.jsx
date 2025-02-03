import React from 'react';
import PropTypes from 'prop-types';
import { IoMdFemale, IoMdMale } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { urlPage } from '../../../utils/constans';

const CardContact = ({ id, name, gender, position, email, handphone }) => {
  return (
    <>
      <Link
        to={`${urlPage.CONTACT_ME}/${id}/detail`}
        className='w-full text-black bg-white rounded-md p-2 py-5 xs:p-4 inline-block xs:flex md:inline-block space-x-0 xs:space-x-2 md:space-x-0 lg:flex'
      >
        <div className='flex space-x-2 w-full'>
          <div className='flex flex-col items-center justify-center w-[170px] xl:w-[250px]'>
            <img
              src={`https://ui-avatars.com/api/?name=${name}&background=841ce6`}
              alt='img-profile'
              className='h-[90px] w-[90px]  rounded-full'
            />
          </div>
          <div className='flex flex-col justify-center md:justify-center w-full'>
            <p className='font-bold text-lg'>{name}</p>
            <div className='flex space-x-1 items-center text-sm'>
              {gender === 'Perempuan' ? <IoMdFemale /> : <IoMdMale />}
              <p>{gender}</p>
            </div>

            <p className='text-gray-500 text-sm'>{position}</p>
            <p className='text-gray-500 text-sm'>{email}</p>
            <p className='text-gray-500 text-sm'>{handphone}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

CardContact.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  handphone: PropTypes.string.isRequired,
};
export default CardContact;
