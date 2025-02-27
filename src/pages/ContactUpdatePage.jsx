import React from 'react';
import FormContact from '../components/pages/contact/FormContact';
import { Button } from 'primereact/button';
import { useParams } from 'react-router-dom';
import { dataContact } from '../utils/data';
import DataNotFound from '../components/pages/DataNotFound';
import ButtonBottom from '../components/layouts/ButtonBottom';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema } from '../utils/validation';

const ContactUpdatePage = () => {
  const { id } = useParams();
  const contact = dataContact.find((item) => item.id === parseInt(id));

  const {
    contact_type = '',
    name = '',
    gender = '',
    birth_date = null,
    position = '',
    employment_type = '',
    company = '',
    contact_category = '',
    email = '',
    phone = '',
    nik = '',
  } = contact || {};

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
    defaultValues: {
      contact_type,
      name,
      gender,
      birth_date,
      position,
      employment_type,
      company,
      contact_category,
      email,
      phone,
      nik,
    },
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  if (!contact) return <DataNotFound />;

  return (
    <>
      <Helmet>
        <title>Edit Contact | Loan Market</title>
        <meta name='description' content='Edit Contact page' />
      </Helmet>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-14 mt-[68px] md:mb-0'>
          <div className='px-3 md:px-3 lg:px-4 xl:px-6 py-4 w-full'>
            <FormContact control={control} errors={errors} id={id} />
          </div>
        </div>
        <ButtonBottom>
          <Button
            label='Update'
            icon='pi pi-save'
            size='large'
            className='w-full p-2.5 bg-[#0c2f3e] text-white'
            type='submit'
          />
        </ButtonBottom>
      </form>
    </>
  );
};

export default ContactUpdatePage;
