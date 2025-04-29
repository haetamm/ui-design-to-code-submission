import React from 'react';
import { Button } from 'primereact/button';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FormProductBank from '../components/pages/product/FormProductBank';
import { dataProductBank } from '../utils/data';
import ProductNotFound from '../components/pages/DataNotFound';
import ButtonBottom from '../components/layouts/ButtonBottom';
import { useSidebar } from '../store/sidebar';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { productBankSchema } from '../utils/validation';

const ProductBankUpdatePage = () => {
  const { isOpen } = useSidebar();
  const { id } = useParams();
  const product = dataProductBank.find((item) => item.id === parseInt(id));

  const {
    bank_name = '',
    product_type = '',
    promotial_date = null,
    guarantee = null,
    target_market = null,
    commision = 0,
    appraisal = 0,
    floating = 0,
    loan_to_value = 0,
    penalty_fee = 0,
    interest_rate = 0,
    fix_rate = 0,
    max_tenor = 0,
    description = '',
    url = '',
  } = product || {};

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productBankSchema),
    mode: 'onChange',
    defaultValues: {
      bank_name,
      product_type,
      promotial_date,
      guarantee,
      target_market,
      commision,
      appraisal,
      floating,
      loan_to_value,
      penalty_fee,
      interest_rate,
      fix_rate,
      max_tenor,
      description,
      url,
    },
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  if (!product) return <ProductNotFound />;

  return (
    <>
      <Helmet>
        <title>Edit Product | Loan Market</title>
        <meta name="description" content="Edit Product page" />
      </Helmet>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-[60px] mb-14 md:mb-0">
          <div className={`${isOpen ? 'pl-3' : 'px-3'} py-6 md:p-6`}>
            <FormProductBank control={control} errors={errors} id={id} />
          </div>
        </div>
        <ButtonBottom>
          <Button
            label="Update"
            icon="pi pi-save"
            size="large"
            className=" w-full p-2.5 bg-[#0c2f3e] text-white"
          />
        </ButtonBottom>
      </form>
    </>
  );
};

export default ProductBankUpdatePage;
