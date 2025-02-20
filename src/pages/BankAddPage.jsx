import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import FormProductBank from '../components/pages/bank/FormProductBank';
import ButtomBottom from '../components/pages/bank/ButtomBottom';
import { Button } from 'primereact/button';

const BankAddPage = () => {
  const [data, setData] = useState({});

  const handleSubmit = (data) => {
    setData(data);
    console.log('Form Data', data);
  };

  return (
    <>
      <Helmet>
        <title>Add Product | Loan Market</title>
        <meta name='description' content='Add Product page' />
      </Helmet>
      <div className='mt-[60px] mb-14 md:mb-0'>
        <div className='px-3 py-6 md:p-6'>
          <FormProductBank onSubmit={handleSubmit} setData={setData} />
        </div>
      </div>
      <ButtomBottom>
        <Button
          onClick={() => handleSubmit(data)}
          label='Tambah Produk'
          icon='pi pi-plus'
          size='small'
          className=' w-full p-3 bg-[#1cabe6] text-white'
        />
      </ButtomBottom>
    </>
  );
};

export default BankAddPage;
