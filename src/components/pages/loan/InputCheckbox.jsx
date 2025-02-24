import React from 'react';
import PropTypes from 'prop-types';

// Komponen InputCheckbox tanpa validasi
const InputCheckbox = ({ isSameData, handleChange, label, id }) => {
  return (
    <div className='flex space-x-3 items-center px-3 my-4'>
      <input
        type='checkbox'
        className='checkbox-custom shrink-0'
        id={`data-${id}`}
        checked={isSameData}
        onChange={handleChange}
      />
      <label htmlFor={`data-${id}`} className='font-bold'>
        {label}
      </label>
    </div>
  );
};

InputCheckbox.propTypes = {
  isSameData: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default InputCheckbox;
