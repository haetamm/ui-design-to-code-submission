import React from 'react';
import { Helmet } from 'react-helmet-async';
import FormProductBank from '../components/pages/bank/FormProductBank';
import { Button } from 'primereact/button';
import ButtonBottom from '../components/layouts/ButtonBottom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { productBankSchema } from '../utils/validation';
import { useSidebar } from '../store/sidebar';

const BankAddPage = () => {
  const { isOpen } = useSidebar();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productBankSchema),
    mode: 'onChange',
    defaultValues: {
      commision: 0,
      appraisal: 0,
      floating: 0,
      loan_to_value: 0,
      penalty_fee: 0,
      interest_rate: 0,
      fix_rate: 0,
      year_fix_rate: 0,
      max_tenor: 0,
      url: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <>
      <Helmet>
        <title>Add Product | Loan Market</title>
        <meta name='description' content='Add Product page' />
      </Helmet>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mt-[60px] mb-14 md:mb-0'>
          <div className={`${isOpen ? 'pl-3' : 'px-3'} py-6 md:p-6`}>
            <FormProductBank control={control} errors={errors} />
          </div>
        </div>
        <ButtonBottom>
          <Button
            label='Tambah Produk'
            icon='pi pi-save'
            size='large'
            className=' w-full p-2.5 bg-[#1cabe6] text-white'
          />
        </ButtonBottom>
      </form>
    </>
  );
};

export default BankAddPage;
