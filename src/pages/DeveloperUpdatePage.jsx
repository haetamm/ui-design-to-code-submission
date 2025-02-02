import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { dataProdctDeveloper as initialData } from '../utils/data';
import ProductNotFound from '../components/pages/ProductNotFound';
import { Helmet } from 'react-helmet-async';
import ButtomBottom from '../components/pages/bank/ButtomBottom';
import { Button } from 'primereact/button';
import FormProductDeveloper from '../components/pages/developer/FormProductDeveloper';

const DeveloperUpdatePage = () => {
  const { id } = useParams();
  const [data, setData] = useState(initialData);
  const product = data.find((item) => item.id === parseInt(id));

  if (!product) return <ProductNotFound />;

  const handleUpdate = (updatedProduct) => {
    console.log(updatedProduct);
    setData((prevData) =>
      prevData.map((item) =>
        item.id === updatedProduct.id ? updatedProduct : item
      )
    );
    console.log('Data setelah update:', data);
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
            id={id}
            product={product}
            onUpdate={handleUpdate}
          />
        </div>
      </div>
      <ButtomBottom>
        <Button
          label='Edit Produk'
          icon='pi pi-pen-to-square'
          size='normal'
          className='w-full p-3 bg-[#0c2f3e] text-white'
          onClick={() => handleUpdate({ ...product })}
        />
      </ButtomBottom>
    </>
  );
};

export default DeveloperUpdatePage;
