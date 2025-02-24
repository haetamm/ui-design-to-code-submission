import React from 'react';
import LoanFormCustom from './LoanFormCustom';
import { employmentInfoField } from '../../../utils/fieldInput';
import {
  business_field_option as business_field,
  company_type_option as company_type,
  current_job_option as current_job,
  monthly_income_option as monthly_income,
  years_of_experience_option as years_of_experience,
} from '../../../utils/selectOption';
import { Button } from 'primereact/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { employmentInfoSchema } from '../../../utils/validation';

const EmploymentInfoSection = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(employmentInfoSchema),
    mode: 'onChange',
  });

  const optionsMap = {
    current_job,
    company_type,
    business_field,
    years_of_experience,
    monthly_income,
  };

  const onSubmit = (data) => {
    console.log('Final Data:', data);
  };

  return (
    <div className='w-full bg-white h-full mb-4 text-black rounded-md'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <LoanFormCustom
          fields={employmentInfoField}
          optionsMap={optionsMap}
          gridClass='grid grid-cols-1 xs:grid-cols-[30%_70%] space-x-0 xs:space-x-2'
          control={control}
          errors={errors}
        />
        <div className='flex items-center justify-end space-x-1 m-6 pb-6'>
          <Button
            onClick={handleSubmit}
            label='Save'
            icon='pi pi-save'
            size='small'
            className=' p-2.5 bg-[#1cabe6] text-white'
          />
        </div>
      </form>
    </div>
  );
};

export default EmploymentInfoSection;
