import React from 'react';
import CardInfo from './CardInfo';
import { assetsInfoField } from '../../../utils/fieldInput';
import { Button } from 'primereact/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { assetInfoSchema } from '../../../utils/validation';

const AssetInfoSection = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(assetInfoSchema),
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log('FormData Submitted:', data);
  };

  return (
    <>
      <div className='w-full  p-1 lg:p-6 bg-white h-full mb-4 text-black rounded-md'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardInfo
            title='Alamat Jaminan'
            fields={assetsInfoField}
            namespace='dataAsset'
            control={control}
            errors={errors}
          />
          <div className='flex items-center justify-end space-x-1 mt-10 px-6 pb-6 lg:p-0'>
            <Button
              label='Save'
              icon='pi pi-save'
              size='large'
              className={`bg-[#1cabe6] p-2.5 text-white`}
              type='submit'
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AssetInfoSection;
