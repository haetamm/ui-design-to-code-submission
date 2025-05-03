import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import PropTypes from 'prop-types';
import React from 'react';

const FilterBar = ({
  rightChild,
  leftChild,
  value,
  onChange,
  placeholder = 'Cari berdasarkan nama',
}) => {
  return (
    <>
      <div className="p-3 px-3 pt-0 md:px-3 lg:px-4 xl:px-6 py-4 xs:pt-0 w-full">
        <div className="inline-block md:flex w-full space-x-0 md:space-x-3 justify-between">
          <div className="inline-block xs:flex space-x-0 xs:space-x-2 w-full">
            <IconField
              iconPosition="left"
              className={`${leftChild ? 'md:w-[80%]' : 'md:w-ful'} w-full`}
            >
              <InputText
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="h-[48px] px-10 w-full border-2 border-slate-200"
              />
              <InputIcon className="pi pi-search" />
            </IconField>
            {leftChild}
          </div>
          <div className="w-full md:w-[45%] flex space-x-2 justify-end">
            {rightChild}
          </div>
        </div>
      </div>
    </>
  );
};

FilterBar.propTypes = {
  rightChild: PropTypes.node,
  leftChild: PropTypes.node,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
};

export default FilterBar;
