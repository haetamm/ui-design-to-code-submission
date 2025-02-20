import React from 'react';
import CardMenuBank from '../components/pages/bank/CardMenuBank';
import CardProductBank from '../components/pages/bank/CardProductBank';
import { Button } from 'primereact/button';
import { Helmet } from 'react-helmet-async';
import { scrollTop } from '../utils/helper';
import ButtonBottom from '../components/layouts/ButtonBottom';

const BankPage = () => {
  return (
    <>
      <Helmet>
        <title>Product | Loan Market</title>
        <meta name='description' content='Product page' />
      </Helmet>
      <div className='mb-14 mt-[42px] md:mb-0'>
        <CardMenuBank />
        <CardProductBank />
        <ButtonBottom>
          <Button
            onClick={scrollTop}
            label='Tambah Produk'
            icon='pi pi-plus'
            size='small'
            className=' w-full p-3 bg-[#1cabe6] text-white'
          />
        </ButtonBottom>
      </div>
    </>
  );
};

export default BankPage;
