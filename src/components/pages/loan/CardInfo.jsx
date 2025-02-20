import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import PropTypes from 'prop-types';
import React from 'react';

const CardInfo = ({ title, fields }) => {
  return (
    <>
      <div className='w-full mx-auto bg-white rounded-lg border-[1px] pb-6 mb-6'>
        <h2 className='font-bold mb-4 p-4 bg-[#0c2f3e] text-white rounded-t-lg'>
          {title}
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-6 py-3'>
          {fields.map(({ label, value, type }, index) => (
            <div key={index}>
              <label className='block font-bold text-gray-700 mb-1'>
                {label}
              </label>
              {type === 'text' && (
                <InputText
                  className='w-full border-[1px] py-3 px-2'
                  placeholder={`${label}`}
                />
              )}
              {type === 'select' && (
                <select className='w-full border-[1px] py-3 px-2 rounded-md'>
                  <option>{`—Pilih ${label}—`}</option>
                </select>
              )}
              {type === 'number' && (
                <InputNumber
                  className='w-full border-[1px] h-[48px] rounded-lg  px-3 focus:outline-none'
                  inputId='currency-indonesia'
                  mode='currency'
                  currency='IDR'
                  locale='id-ID'
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

CardInfo.propTypes = {
  title: PropTypes.string.isRequired,
  fields: PropTypes.array.isRequired,
};

export default CardInfo;
