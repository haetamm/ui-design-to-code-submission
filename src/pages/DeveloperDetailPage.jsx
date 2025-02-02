import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { dataProdctDeveloper } from '../utils/data';
import { Helmet } from 'react-helmet-async';
import CardDetailProduct from '../components/pages/CardDetailProduct';
import ButtomBottom from '../components/pages/bank/ButtomBottom';
import { urlPage } from '../utils/constans';
import { Button } from 'primereact/button';
import { detailDeveloperField } from '../utils/fieldInput';
import ProductNotFound from '../components/pages/ProductNotFound';

const DeveloperDetailPage = () => {
  const { id } = useParams();
  const product = dataProdctDeveloper.find((item) => item.id === parseInt(id));

  if (!product) return <ProductNotFound />;

  return (
    <>
      <Helmet>
        <title>Bank Product Detail | Loan Market</title>
        <meta name='description' content='Bank Product Detail page' />
      </Helmet>
      <div className='mt-[60px] mb-14 md:mb-0'>
        <div className='px-3 py-6 md:p-6'>
          <CardDetailProduct product={product} fields={detailDeveloperField} />
        </div>
      </div>
      <ButtomBottom>
        <Button
          label='Delete Produk'
          icon='pi pi-trash'
          size='normal'
          className=' w-full p-3 bg-red-500 text-white'
        />
        <Link
          to={`${urlPage.PRODUCT_DEVELOPER}/${id}/update`}
          className='w-full'
        >
          <Button
            label='Edit Produk'
            icon='pi pi-pen-to-square'
            size='normal'
            className=' w-full p-3 bg-[#0c2f3e] text-white'
          />
        </Link>
      </ButtomBottom>
    </>
  );
};

export default DeveloperDetailPage;
