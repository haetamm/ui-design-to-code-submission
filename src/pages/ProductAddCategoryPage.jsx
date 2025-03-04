import React, { useState } from 'react';
import NavPage from '../components/layouts/NavPage';
import { productAddCategoryLink } from '../utils/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { productAddCategorySchema } from '../utils/validation';
import { Helmet } from 'react-helmet-async';
import FormCustom from '../components/layouts/FormCustom';
import { productAddCategoryField } from '../utils/fieldInput';
import { Button } from 'primereact/button';
import ButtonBottom from '../components/layouts/ButtonBottom';

const ProductAddCategoryPage = () => {
  const [uploadedFiles, setUploadedFiles] = useState({});

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productAddCategorySchema),
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log('Form submitted: ', data);
  };

  const handleFileChange = (category, label, file) => {
    setUploadedFiles((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [label]: file.name,
      },
    }));
  };

  return (
    <>
      <Helmet>
        <title>Add Category Product | Loan Market</title>
        <meta name='description' content='Add Category Product page' />
      </Helmet>
      <NavPage
        links={productAddCategoryLink}
        entityName='Product'
        subName='Product'
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-14 mt-[50px] md:mb-0'>
          <div className='px-3 md:px-3 lg:px-4 xl:px-6 py-4 w-full'>
            <div className='bg-white pb-3 rounded-md'>
              <FormCustom
                fields={productAddCategoryField}
                gridClass='grid grid-cols-1 xs:grid-cols-[30%_70%] lg:grid-cols-[25%_75%] space-x-0 md:space-x-2'
                control={control}
                errors={errors}
                uploadedFiles={uploadedFiles}
                onFileChange={handleFileChange}
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

export default ProductAddCategoryPage;
