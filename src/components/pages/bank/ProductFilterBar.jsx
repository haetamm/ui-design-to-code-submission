import React from 'react';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { urlPage } from '../../../utils/constans';

import PropTypes from 'prop-types';
import { product_type_option } from '../../../utils/selectOption';

const ProductFilterBar = ({
  searchTerm,
  setSearchTerm,
  selectedProductType,
  setSelectedProductType,
}) => {
  return (
    <div className='p-3 px-3 pt-0 md:px-3 lg:px-4 xl:px-6 py-6 xs:pt-0 w-full'>
      <div className='inline-block md:flex w-full space-x-0 md:space-x-3 lg:space-x-8 justify-between'>
        <div className='inline-block md:flex space-x-0 md:space-x-3 lg:space-x-8 w-full'>
          <IconField iconPosition='left' className='w-full md:w-1/2'>
            <InputText
              placeholder='Cari berdasarkan nama'
              className='h-[48px] px-10 w-full'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <InputIcon className='pi pi-search'></InputIcon>
          </IconField>
          <div className='mt-3 md:mt-0 flex space-x-3 md:space-x-3 lg:space-x-8 w-full md:w-1/2'>
            <Dropdown
              value={selectedProductType}
              onChange={(e) => setSelectedProductType(e.value)}
              options={product_type_option}
              optionLabel='name'
              placeholder='Pilih Tipe Produk'
              className=' w-full md:w-[60%] lg:w-full'
            />
            <Button
              label='Sort'
              icon='pi pi-sort-alpha-up'
              size='small'
              className=' w-full bg-white px-3'
            />
          </div>
        </div>
        <Link
          to={urlPage.PRODUCT_BANK_ADD}
          className='md:w-[250px] lg:w-[270px] '
        >
          <Button
            label='Tambah Produk'
            icon='pi pi-plus'
            size='small'
            className='hidden md:block w-full py-3 mt-4 md:mt-0 bg-[#1cabe6] text-white px-3'
          />
        </Link>
      </div>
    </div>
  );
};

ProductFilterBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  selectedProductType: PropTypes.object,
  setSelectedProductType: PropTypes.func.isRequired,
};

export default ProductFilterBar;
