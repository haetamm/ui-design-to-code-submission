import React from 'react';
import CardMenuBank from '../components/pages/bank/CardMenuBank';
import CardProductBank from '../components/pages/bank/CardProductBank';
import ButtomBottom from '../components/pages/bank/ButtomBottom';
import { Button } from 'primereact/button';
import { Helmet } from 'react-helmet-async';
import { scrollTop } from '../utils/helper';

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
        <ButtomBottom>
          <Button
            onClick={scrollTop}
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
