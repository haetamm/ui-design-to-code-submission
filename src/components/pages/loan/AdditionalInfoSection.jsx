import React from 'react';
import LoanFormCustom from './LoanFormCustom';
import { additionalInfoField } from '../../../utils/fieldInput';
import {
  gender_option as gender,
  home_ownership_status_option as home_ownership_status,
  last_education_option as last_education,
  length_of_residence_option as length_of_residence,
  marital_status_option as marital_status,
  marriage_type_option as marriage_type,
  number_of_dependents_option as number_of_dependents,
} from '../../../utils/selectOption';
import { Button } from 'primereact/button';
import FamilyForm from './FamilyForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { additionalInfoSchema } from '../../../utils/validation';
import { useForm } from 'react-hook-form';

const AdditionalInfoSection = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(additionalInfoSchema),
    mode: 'onChange',
    defaultValues: {
      familyData: [
        { fullName: '', relationship: '', phone: '', address: '' },
        { fullName: '', relationship: '', phone: '', address: '' },
      ],
    },
  });

  const optionMap = {
    gender,
    marital_status,
    marriage_type,
    number_of_dependents,
    last_education,
    home_ownership_status,
    length_of_residence,
  };

  const onSubmit = (data) => {
    console.log('Final Data:', data);
  };

  const handleFamilyDataUpdate = (newFamilyData) => {
    setValue('familyData', newFamilyData);
  };

  return (
    <>
      <div className='w-full  bg-white h-full mb-4 text-black rounded-md'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <LoanFormCustom
            fields={additionalInfoField.slice(0, 10)}
            optionsMap={optionMap}
            gridClass='grid grid-cols-1 xs:grid-cols-[30%_70%] space-x-0 xs:space-x-2'
            control={control}
            errors={errors}
          />
          <FamilyForm
            onSubmit={handleFamilyDataUpdate}
            control={control}
            errors={errors}
          />
          <LoanFormCustom
            fields={additionalInfoField.slice(10, 18)}
            optionsMap={optionMap}
            gridClass='grid grid-cols-1'
            control={control}
            errors={errors}
          />
          <div className='flex items-center justify-end space-x-1 px-6 pb-6'>
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

export default AdditionalInfoSection;
