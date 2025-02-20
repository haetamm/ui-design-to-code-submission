import React from 'react';
import { InputText } from 'primereact/inputtext';
import PropTypes from 'prop-types';
import { formatValue } from '../../utils/helper';

const CardDetail = ({ data, fields }) => {
  return (
    <>
      <div className='bg-white p-3 md:p-8 rounded-md'>
        {fields.map(({ label, value }, index) => (
          <div
            key={index}
            className='inline-block xs:flex w-full items-center mb-3 xs:mb-6 space-x-0 xs:space-x-2'
          >
            <div className='w-full xs:w-[20%] font-bold'>{label}</div>
            <div className='w-full xs:w-[80%] mt-1 xs:mt-0'>
              <InputText
                disabled
                placeholder='Disabled'
                className='bg-gray-200 py-3 w-full px-3 text-black'
                value={formatValue(data[value])}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

CardDetail.propTypes = {
  data: PropTypes.array.isRequired,
  fields: PropTypes.array.isRequired,
};

export default CardDetail;
