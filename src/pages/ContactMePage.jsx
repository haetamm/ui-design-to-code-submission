import React from 'react';
import { Link } from 'react-router-dom';
import { urlPage } from '../utils/constans';
import { Button } from 'primereact/button';
import { dataContact } from '../utils/data';
import CardContact from '../components/pages/contact/CardContact';
import ButtonBottom from '../components/layouts/ButtonBottom';
import ContactFilterBar from '../components/pages/contact/ContactFilterBar';

const ContactMePage = () => {
  const contact = dataContact.filter((contact) => contact.type === 'my');

  return (
    <>
      <div className='mb-14 mt-[68px] md:mb-0'>
        <ContactFilterBar />
        <div className=' px-3 pt-0 md:px-3 lg:px-4 xl:px-6 py-6 xs:pt-0 w-full'>
          <div className='grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4'>
            {contact.map((contact, index) => (
              <CardContact {...contact} key={index} />
            ))}
          </div>
        </div>
      </div>
      <ButtonBottom>
        <Link to={urlPage.CONTACT_ADD_CATEGORY} className='w-full'>
          <Button
            label='Category'
            icon='pi pi-plus'
            size='small'
            className=' w-full p-2.5 bg-[#1cabe6] text-white'
          />
        </Link>
        <Link to={urlPage.CONTACT_ADD} className='w-full'>
          <Button
            label='Contact'
            icon='pi pi-plus'
            size='small'
            className=' w-full p-2.5 bg-[#1cabe6] text-white'
          />
        </Link>
      </ButtonBottom>
    </>
  );
};

export default ContactMePage;
