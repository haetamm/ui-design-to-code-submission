import React from 'react';
import PropTypes from 'prop-types';

const NumberInputCustom = ({ value, onChange, type }) => {
  const handleIncrement = () => {
    const currentValue = parseFloat(value || 0);
    onChange((currentValue + 0.1).toFixed(1));
  };

  const handleDecrement = () => {
    const currentValue = parseFloat(value || 0);
    const newValue = currentValue - 0.1;
    if (newValue < 0) {
      onChange('0');
    } else {
      onChange(newValue.toFixed(1));
    }
  };

  return (
    <div className='flex items-center border-slate-300 border-[1px] text-white rounded-md'>
      <span
        className='cursor-pointer rounded-l py-[11px] px-3.5 duration-100 hover:text-blue-50 bg-[#1cabe6]'
        onClick={handleDecrement}
      >
        -
      </span>
      <input
        type={type}
        value={value || 0}
        onChange={onChange}
        className='h-8 w-full border bg-white text-black text-center text-xs outline-none border-none'
        autoFocus={false}
      />
      <span
        className='cursor-pointer rounded-r py-[11px] px-3.5 duration-100 hover:text-blue-50 bg-[#1cabe6]'
        onClick={handleIncrement}
      >
        +
      </span>
    </div>
  );
};

NumberInputCustom.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default NumberInputCustom;
