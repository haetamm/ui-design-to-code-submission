import React from 'react';
import PropTypes from 'prop-types';
import { BsUpload } from 'react-icons/bs';

const InputFileCustom = ({
  id,
  name,
  onChange,
  value,
  uploadedFiles,
  category,
  label,
  placeholder,
  error,
  accept = 'application/pdf',
}) => {
  return (
    <div className='relative w-full'>
      <label
        htmlFor={id}
        className={`${error ? 'border-red-500' : ''} flex items-center justify-between w-full p-[13px] text-gray-500 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100`}
      >
        <span className='line-clamp-1 text-sm'>
          {uploadedFiles?.[category]?.[label] ||
            (value ? value.name : `—${placeholder}—`)}
        </span>
        <BsUpload className='w-5 h-5 text-gray-500 shrink-0' />
      </label>
      <input
        id={id}
        type='file'
        name={name}
        className='hidden'
        accept={accept}
        onChange={onChange}
      />
    </div>
  );
};

InputFileCustom.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.oneOf([null])]),
  uploadedFiles: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  accept: PropTypes.string,
};

export default InputFileCustom;
