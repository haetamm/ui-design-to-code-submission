import { Button } from 'primereact/button';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import PropTypes from 'prop-types';
import React from 'react';

const FilterBar = ({ children, isSort = true }) => {
  return (
    <>
      <div className="p-3 px-3 pt-0 md:px-3 lg:px-4 xl:px-6 py-4 xs:pt-0 w-full">
        <div className="inline-block md:flex w-full space-x-0 md:space-x-3 justify-between">
          <div className="inline-block xs:flex space-x-0 xs:space-x-2 w-full">
            <IconField iconPosition="left" className="w-full md:w-[90%]">
              <InputText
                placeholder="Cari berdasarkan nama"
                className="h-[48px] px-10 w-full border-2 border-slate-200"
              />
              <InputIcon className="pi pi-search" />
            </IconField>
            {isSort && (
              <Button
                label="Sort"
                icon="pi pi-sort-alpha-up"
                size="small"
                className="h-[48px] xs:w-[150px] mt-2 xs:mt-0 w-full bg-white px-3 border-2"
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
  isSort: PropTypes.bool,
};

FilterBar.defaultProps = {
  buttonChildren: null,
  children: null,
};

export default FilterBar;
