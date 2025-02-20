import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { dataProdctDeveloper } from '../utils/data';
import DataNotFound from '../components/pages/DataNotFound';
import { Helmet } from 'react-helmet-async';
import { Button } from 'primereact/button';
import FormProductDeveloper from '../components/pages/developer/FormProductDeveloper';
import ButtonBottom from '../components/layouts/ButtonBottom';

const DeveloperUpdatePage = () => {
  const { id } = useParams();
  const product = dataProdctDeveloper.find((item) => item.id === parseInt(id));
  const [data, setData] = useState(product || {});

  if (!product) return <DataNotFound />;

  const handleSubmit = (data) => {
    setData(data);
    console.log('Form Data', data);
  };

  return (
    <>
      <Helmet>
        <title>Edit Bank Product | Loan Market</title>
        <meta name='description' content='Edit Bank Product page' />
      </Helmet>
      <div className='mt-[60px] mb-14 md:mb-0'>
        <div className='px-3 py-6 md:p-6'>
          <FormProductDeveloper
            data={product}
            onSubmit={handleSubmit}
            setData={setData}
          />
        </div>
      </div>
      <ButtonBottom>
        <Button
          label='Update'
          icon='pi pi-pen-to-square'
          size='normal'
          className='w-full p-3 bg-[#0c2f3e] text-white'
          onClick={() => handleSubmit(data)}
        />
      </ButtonBottom>
    </>
  );
};

export default DeveloperUpdatePage;
