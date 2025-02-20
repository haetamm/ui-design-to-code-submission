import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import React from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import CardCategory from '../components/pages/contact/CardCategory';
import ButtonBottom from '../components/layouts/ButtonBottom';

const ContactAddCategoryPage = () => {
  return (
    <>
      <div className='mb-20 mt-[68px] md:mb-0'>
        <div className='p-3 px-3 md:px-3 lg:px-4 xl:px-6 py-3 w-full'>
          <div className='inline-block md:flex w-full space-x-0 md:space-x-3 justify-between'>
            <IconField iconPosition='left' className='w-full md:w-[75%]'>
              <InputText
                placeholder='Cari berdasarkan nama'
                className='h-[48px] px-10 w-full'
              />
              <InputIcon className='pi pi-search' />
            </IconField>
            <div className='w-[25%] flex space-x-2 justify-end'>
              <Button
                label='Add Category'
                icon='pi pi-plus'
                size='small'
                className='hidden md:block w-full py-3 mt-4 md:mt-0 bg-[#1cabe6] text-white px-3'
              />
            </div>
          </div>
        </div>
        <div className='p-3 xl:px-6 w-full'>
          <CardCategory name='Commercial' />
        </div>
        <div className='p-3 xl:px-6 w-full'>
          <CardCategory name='General' />
        </div>
      </div>
      <ButtonBottom>
        <Button
          label='Add Category'
          icon='pi pi-plus'
          size='small'
          className=' w-full p-3 bg-[#1cabe6] text-white'
        />
      </ButtonBottom>
    </>
  );
};

export default ContactAddCategoryPage;
