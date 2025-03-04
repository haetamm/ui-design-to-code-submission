import React from 'react';
import NavPage from '../components/layouts/NavPage';
import { productAddLink } from '../utils/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Helmet } from 'react-helmet-async';
import ButtonBottom from '../components/layouts/ButtonBottom';
import { Button } from 'primereact/button';
import FormCustom from '../components/layouts/FormCustom';
import { productAddField } from '../utils/fieldInput';
import { product_category_option as product_category } from '../utils/selectOption';
import { productAddSchema } from '../utils/validation';

const ProductAddPage = () => {
  const optionsMap = {
    product_category,
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productAddSchema),
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log('Form submitted: ', data);
  };
  return (
    <>
      <Helmet>
        <title>Add Product | Loan Market</title>
        <meta name='description' content='Add Product page' />
      </Helmet>
      <NavPage links={productAddLink} entityName='Product' subName='Product' />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-14 mt-[50px] md:mb-0'>
          <div className='px-3 md:px-3 lg:px-4 xl:px-6 py-4 w-full'>
            <div className='bg-white pb-3 rounded-md'>
              <FormCustom
                fields={productAddField}
                optionsMap={optionsMap}
                gridClass='grid grid-cols-1 xs:grid-cols-[30%_70%] lg:grid-cols-[25%_75%] space-x-0 md:space-x-2'
                control={control}
                errors={errors}
              />
              <div className='hidden md:flex items-center justify-end space-x-1 md:mx-7 md:mb-3'>
                <Button
                  label='Save'
                  icon='pi pi-save'
                  size='large'
                  className=' p-2.5 bg-[#1cabe6] text-white'
                  type='submit'
                />
              </div>
            </div>
          </div>
        </div>
        <ButtonBottom>
          <Button
            label='Simpan'
            icon='pi pi-save'
            size='large'
            className=' w-full p-2.5 bg-[#1cabe6] text-white'
          />
        </ButtonBottom>
      </form>
    </>
  );
};

export default ProductAddPage;
