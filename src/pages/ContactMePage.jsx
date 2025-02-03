import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import React from 'react';
import { Link } from 'react-router-dom';
import { urlPage } from '../utils/constans';
import { Button } from 'primereact/button';
import { dataContact } from '../utils/data';
import CardContact from '../components/pages/contact/CardContact';
import ButtomBottom from '../components/pages/bank/ButtomBottom';

const ContactMePage = () => {
  const contact = dataContact.filter((contact) => contact.type === 'my');

  return (
    <>
      <div className='mb-14 mt-[68px] md:mb-0'>
        <div className='p-3 px-3 pt-0 md:px-3 lg:px-4 xl:px-6 py-4 xs:pt-0 w-full'>
          <div className='inline-block md:flex w-full space-x-0 md:space-x-3 justify-between'>
            <div className='inline-block xs:flex space-x-0 xs:space-x-2  w-full '>
              <IconField iconPosition='left' className='w-full md:w-[80%]'>
                <InputText
                  placeholder='Cari berdasarkan nama'
                  className='h-[48px] px-10 w-full'
                />
                <InputIcon className='pi pi-search' />
              </IconField>
              <Button
                label='Sort'
                icon='pi pi-sort-alpha-up'
                size='small'
                className='h-[48px] xs:w-[90px] mt-2 xs:mt-0 w-full bg-white px-3 border-2'
              />
            </div>
            <div className='w-[45%] flex space-x-2 justify-end'>
              <Link to={urlPage.CONTACT_ADD} className='md:w-[160px]  '>
                <Button
                  label='Add Contact'
                  icon='pi pi-plus'
                  size='small'
                  className='hidden md:block w-full py-3 mt-4 md:mt-0 bg-[#1cabe6] text-white px-3'
                />
              </Link>
              <Link to={urlPage.PRODUCT_BANK_ADD} className='md:w-[160px]  '>
                <Button
                  label='Add Category'
                  icon='pi pi-plus'
                  size='small'
                  className='hidden md:block w-full py-3 mt-4 md:mt-0 bg-[#1cabe6] text-white px-3'
                />
              </Link>
            </div>
          </div>
        </div>
        <div className=' px-3 pt-0 md:px-3 lg:px-4 xl:px-6 py-6 xs:pt-0 w-full'>
          <div className='grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4'>
            {contact.map((contact, index) => (
              <CardContact {...contact} key={index} />
            ))}
          </div>
        </div>
      </div>
      <ButtomBottom>
        <Link to={urlPage.CONTACT_ADD} className='w-full'>
          <Button
            label='Tambah Contact'
            icon='pi pi-plus'
            size='small'
            className=' w-full p-3 bg-[#1cabe6] text-white'
          />
        </Link>
      </ButtomBottom>
    </>
  );
};

export default ContactMePage;
