import React from 'react';
import CardMenuBank from '../components/pages/bank/CardMenuBank';
import CardPruductBank from '../components/pages/bank/CardPruductBank';
import ButtomBottom from '../components/pages/bank/ButtomBottom';
import { Button } from 'primereact/button';
import { Helmet } from 'react-helmet-async';

const BankPage = () => {
  return (
    <>
      <Helmet>
        <title>Product | Loan Market</title>
        <meta name='description' content='Product page' />
      </Helmet>
      <div className='mb-14 mt-[42px] md:mb-0'>
        <CardMenuBank />
        <CardPruductBank />
        <ButtomBottom>
          <Button
            label='Tambah Produk'
            icon='pi pi-plus'
            size='small'
            className=' w-full p-3 bg-[#1cabe6] text-white'
          />
        </ButtomBottom>
      </div>
    </>
  );
};

export default BankPage;
