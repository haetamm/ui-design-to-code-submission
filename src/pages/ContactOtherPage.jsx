import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import React from 'react';
import { Button } from 'primereact/button';
import { dataContact } from '../utils/data';
import CardContact from '../components/pages/contact/CardContact';

const ContactOtherPage = () => {
  const contact = dataContact.filter((contact) => contact.type === 'other');

  return (
    <>
      <div className='mb-14 mt-[68px] md:mb-0'>
        <div className='p-3 px-3 pt-0 md:px-3 lg:px-4 xl:px-6 py-4 xs:pt-0 w-full'>
          <div className='inline-block md:flex w-full space-x-0 md:space-x-3 justify-between'>
            <div className='inline-block xs:flex space-x-0 xs:space-x-8  w-full '>
              <IconField iconPosition='left' className='w-full'>
                <InputText
                  placeholder='Cari berdasarkan nama'
                  className='h-[48px] px-10 w-full'
                />
                <InputIcon className='pi pi-search'> </InputIcon>
              </IconField>
              <Button
                label='Sort'
                icon='pi pi-sort-alpha-up'
                size='small'
                className='h-[48px] xs:w-[90px] mt-2 xs:mt-0 w-full bg-white px-3 border-2'
              />
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
    </>
  );
};

export default ContactOtherPage;
