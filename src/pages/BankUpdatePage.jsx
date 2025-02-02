import React from 'react';
import { Button } from 'primereact/button';
import ButtomBottom from '../components/pages/bank/ButtomBottom';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FormProductBank from '../components/pages/bank/FormProductBank';

const BankUpdatePage = () => {
  const { id } = useParams();

  return (
    <>
      <Helmet>
        <title>Edit Product | Loan Market</title>
        <meta name='description' content='Edit Product page' />
      </Helmet>
      <div className='mt-[60px] mb-14 md:mb-0'>
        <div className='px-3 py-6 md:p-6'>
          <FormProductBank id={id} />
        </div>
      </div>
      <ButtomBottom>
        <Button
          label='Update'
          icon='pi pi-save'
          size='large'
          className=' w-full p-3 bg-[#0c2f3e] text-white'
        />
      </ButtomBottom>
    </>
  );
};

export default BankUpdatePage;
