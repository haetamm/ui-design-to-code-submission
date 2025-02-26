import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'primereact/button';
import React from 'react';
import { useForm } from 'react-hook-form';
import LoanFormCustom from './LoanFormCustom';
import { reviewField } from '../../../utils/fieldInput';
import { reviewSchema } from '../../../utils/validation';

const ReviewSection = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(reviewSchema),
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className='w-full  bg-white h-full mb-4 text-black rounded-md'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <LoanFormCustom
            fields={reviewField}
            gridClass='grid grid-cols-1'
            control={control}
            errors={errors}
          />
          <div className='flex items-center justify-end space-x-1 px-7 pb-7'>
            <Button
              type='submit'
              label='Save'
              icon='pi pi-save'
              size='small'
              className='p-2.5 bg-[#1cabe6] text-white'
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ReviewSection;
