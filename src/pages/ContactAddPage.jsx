import React from 'react';
import FormContact from '../components/pages/contact/FormContact';
import { Button } from 'primereact/button';
import ButtonBottom from '../components/layouts/ButtonBottom';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema } from '../utils/validation';

const ContactAddPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <>
      <Helmet>
        <title>Add Contact | Loan Market</title>
        <meta name="description" content="Add Contact page" />
      </Helmet>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-14 mt-[68px] md:mb-0">
          <div className="px-3  md:px-3 lg:px-4 xl:px-6 py-4 w-full">
            <FormContact control={control} errors={errors} />
          </div>
        </div>
        <ButtonBottom>
          <Button
            label="Simpan"
            icon="pi pi-save"
            size="large"
            className=" w-full p-2.5 bg-[#1cabe6] text-white"
          />
        </ButtonBottom>
      </form>
    </>
  );
};

export default ContactAddPage;
