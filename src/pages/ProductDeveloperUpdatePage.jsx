import React from 'react';
import { useParams } from 'react-router-dom';
import { dataProdctDeveloper } from '../utils/data';
import DataNotFound from '../components/pages/DataNotFound';
import { Helmet } from 'react-helmet-async';
import { Button } from 'primereact/button';
import FormProductDeveloper from '../components/pages/developer/FormProductDeveloper';
import ButtonBottom from '../components/layouts/ButtonBottom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { productDeveloperSchema } from '../utils/validation';

const ProductDeveloperUpdatePage = () => {
  const { id } = useParams();
  const product = dataProdctDeveloper.find((item) => item.id === parseInt(id));

  const {
    name_product = '',
    price = 0,
    type_property = '',
    name_dev = '',
    type_product = '',
    unit = 0,
    address = '',
  } = product || {};

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productDeveloperSchema),
    mode: 'onChange',
    defaultValues: {
      name_dev,
      name_product,
      price,
      type_product,
      type_property,
      unit,
      address,
    },
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  if (!product) return <DataNotFound />;

  return (
    <>
      <Helmet>
        <title>{product.name_product} | Loan Market</title>
        <meta name="description" content="Edit Bank Product page" />
      </Helmet>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-[60px] mb-14 md:mb-0">
          <div className="px-3 py-6 md:p-6">
            <FormProductDeveloper control={control} errors={errors} id={id} />
          </div>
        </div>
        <ButtonBottom>
          <Button
            label="Update"
            icon="pi pi-save"
            size="large"
            className="w-full p-2.5 bg-[#0c2f3e] text-white"
          />
        </ButtonBottom>
      </form>
    </>
  );
};

export default ProductDeveloperUpdatePage;
