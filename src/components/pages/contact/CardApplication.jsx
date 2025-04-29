import PropTypes from 'prop-types';
import React from 'react';
import { MdHome } from 'react-icons/md';
import CardHeaderApplication from './CardHeaderApplication';

const CardApplication = ({ application, name }) => {
  return (
    <>
      <div className=" mt-6 lg:mt-0 bg-white flex flex-col items-center rounded-md">
        <CardHeaderApplication name="Application" link="#" />
        <div className="px-2 xs:px-4 pt-6 pb-4 w-full lg:h-[430px] min-h-[168px] overflow-auto">
          {application.map(({ loan_amount, loan_step, tenor }, index) => (
            <div
              key={index}
              className="border-[1px] border-gray-200 rounded-md inline-block space-x-0 xs:flex py-4 px-1.5 xs:p-4 xs:space-x-6 mb-4 w-full"
            >
              <div className="h-20 w-20 bg-[#12265b] rounded-md hidden xs:flex flex-col p-3 items-center">
                <MdHome className="text-white h-9 w-9" />
              </div>
              <div className="grid grid-cols-[32%_67%] gap-1">
                <div className="font-bold">Nasabah</div>
                <div>: {name}</div>
                <div className="font-bold">Loan Amount</div>
                <div>: {loan_amount}</div>
                <div className="font-bold">Loan Step</div>
                <div>: {loan_step}</div>
                <div className="font-bold">Tenor</div>
                <div>: {tenor}</div>
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
