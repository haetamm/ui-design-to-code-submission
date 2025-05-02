import { Button } from 'primereact/button';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import PropTypes from 'prop-types';
import React from 'react';

const FilterBar = ({
  children,
  isSort = true,
  isFilter = false,
  value,
  onChange,
  placeholder = 'Cari berdasarkan nama',
}) => {
  return (
    <>
      <div className="p-3 px-3 pt-0 md:px-3 lg:px-4 xl:px-6 py-4 xs:pt-0 w-full">
        <div className="inline-block md:flex w-full space-x-0 md:space-x-3 justify-between">
          <div className="inline-block xs:flex space-x-0 xs:space-x-2 w-full">
            <IconField iconPosition="left" className="w-full md:w-[80%]">
              <InputText
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="h-[48px] px-10 w-full border-2 border-slate-200"
              />
              <InputIcon className="pi pi-search" />
            </IconField>
            {isFilter && (
              <Button
                label="Filter"
                icon="pi pi-filter"
                size="large"
                className="h-[48px] mt-2 xs:mt-0 w-full xs:w-[150px] bg-white px-3 border-2"
              />
            )}
            {isSort && (
              <Button
                label="Sort"
                icon="pi pi-sort-alpha-up"
                size="large"
                className="h-[48px] mt-2 xs:mt-0 w-full xs:w-[150px] bg-white px-3 border-2"
              />
            )}
          </div>
          <div className="w-full md:w-[45%] flex space-x-2 justify-end">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

FilterBar.propTypes = {
  children: PropTypes.node,
  isSort: PropTypes.bool.isRequired,
  isFilter: PropTypes.bool.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
};

FilterBar.defaultProps = {
  buttonChildren: null,
  children: null,
};

export default FilterBar;
