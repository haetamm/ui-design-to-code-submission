import React, { useState } from 'react';
import { Button } from 'primereact/button';
import ButtomBottom from '../components/pages/bank/ButtomBottom';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FormProductBank from '../components/pages/bank/FormProductBank';
import { dataProductBank } from '../utils/data';
import ProductNotFound from '../components/pages/DataNotFound';

const BankUpdatePage = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({});

  const product = dataProductBank.find((item) => item.id === parseInt(id));

  if (!product) return <ProductNotFound />;

  const handleSubmit = () => {
    console.log('Form Data:', formData);
  };

  return (
    <>
      <Helmet>
        <title>Edit Product | Loan Market</title>
        <meta name='description' content='Edit Product page' />
      </Helmet>
      <div className='mt-[60px] mb-14 md:mb-0'>
        <div className='px-3 py-6 md:p-6'>
          <FormProductBank id={id} onSubmit={setFormData} />
        </div>
      </div>
      <ButtomBottom>
        <Button
          onClick={handleSubmit}
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
