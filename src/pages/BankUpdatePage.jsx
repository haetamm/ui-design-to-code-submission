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
  const product = dataProductBank.find((item) => item.id === parseInt(id));
  const [data, setData] = useState(product || {});

  if (!product) return <ProductNotFound />;

  const handleSubmit = (data) => {
    setData(data);
    console.log('Form Data', data);
  };

  return (
    <>
      <Helmet>
        <title>Edit Product | Loan Market</title>
        <meta name='description' content='Edit Product page' />
      </Helmet>
      <div className='mt-[60px] mb-14 md:mb-0'>
        <div className='px-3 py-6 md:p-6'>
          <FormProductBank
            data={product}
            onSubmit={handleSubmit}
            setData={setData}
          />
        </div>
      </div>
      <ButtomBottom>
        <Button
          onClick={() => handleSubmit(data)}
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
