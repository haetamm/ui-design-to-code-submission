import PropTypes from 'prop-types';
import React from 'react';
import { MdHome } from 'react-icons/md';
import CardHeaderApplication from './CardHeaderApplication';

const CardApplication = ({ application, name }) => {
  return (
    <>
      <div className=' mt-6 lg:mt-0 bg-white flex flex-col items-center rounded-md'>
        <CardHeaderApplication name='Application' link='#' />
        <div className='px-2 xs:px-4 pt-6 pb-4 w-full lg:h-[430px] min-h-[168px] overflow-auto'>
          {application.map(({ loan_amount, loan_step, tenor }, index) => (
            <div
              key={index}
              className='border-[1px] border-gray-200 rounded-md inline-block space-x-0 xs:flex py-4 px-3 xs:p-4 xs:space-x-6 mb-4 w-full'
            >
              <div className='h-20 w-20 bg-[#12265b] rounded-md hidden xs:flex flex-col p-3 items-center'>
                <MdHome className='text-white h-9 w-9' />
              </div>
              <div className='flex space-x-6'>
                <div className='font-bold'>
                  <p>Nasabah</p>
                  <p>Loan Amount</p>
                  <p>Loan Step</p>
                  <p>Loan Tenor</p>
                </div>
                <div>
                  <p>: {name}</p>
                  <p>: {loan_amount}</p>
                  <p>: {loan_step}</p>
                  <p>: {tenor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

CardApplication.propTypes = {
  application: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default CardApplication;
