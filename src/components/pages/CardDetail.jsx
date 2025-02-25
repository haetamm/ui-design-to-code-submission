import React from 'react';
import { InputText } from 'primereact/inputtext';
import PropTypes from 'prop-types';
import { formatValue } from '../../utils/helper';
import { InputTextarea } from 'primereact/inputtextarea';

const CardDetail = ({ data, fields }) => {
  return (
    <>
      <div className='bg-white p-3 md:p-8 rounded-md'>
        {fields.map(({ label, value, type }, index) => (
          <div
            key={index}
            className='grid grid-cols-1 md:grid-cols-[30%_70%] space-x-0 md:space-x-2 w-full items-center mb-3 xs:mb-6'
          >
            <div className='w-full  font-bold'>{label}</div>
            <div className='w-full mt-1 xs:mt-0'>
              {type === 'textarea' && (
                <InputTextarea
                  value={data[value]}
                  disabled
                  rows={5}
                  cols={30}
                  className='bg-gray-200 w-full border-[1px] px-2'
                />
              )}
              {type !== 'textarea' && (
                <InputText
                  disabled
                  className='bg-gray-200 py-3 w-full px-3 text-black'
                  value={formatValue(data[value])}
                />
              )}
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
