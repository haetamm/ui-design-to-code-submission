import { Button } from 'primereact/button';
import PropTypes from 'prop-types';
import React from 'react';

const CredentialBank = ({ img, bank_name, description }) => {
  return (
    <>
      <div className="mt-[4rem] lg:mt-20 flex justify-center">
        <img
          src={img}
          alt={bank_name}
          className="w-full max-w-[150px] lg:max-w-[200px] xl:max-w-[250px] h-auto object-contain mx-auto"
        />
      </div>
      <p className="text-center text-sm lg:text-md xl:text-lg mt-5">
        {description}
      </p>
      <div className="flex justify-center mt-5">
        <Button
          label="Admin Bank"
          className="bg-[#1cabe6] text-white p-1.5 shadow-lg text-md border-[1px] rounded-md w-full md:w-[130px]"
        />
      </div>
    </>
  );
};

CredentialBank.propTypes = {
  img: PropTypes.string.isRequired,
  bank_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CredentialBank;
