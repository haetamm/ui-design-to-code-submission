import React from 'react';
import { loanField } from '../../../utils/fieldInput';
import {
  loan_type_option as loan_type,
  need_type_option as need_type,
  placement_amount_option as placement_amount,
  placement_duration_option as placement_duration,
  deposit_certificate_name_option as deposit_certificate_name,
  deposit_renewal_option as deposit_renewal,
} from '../../../utils/selectOption';
import { Button } from 'primereact/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loanSchema } from '../../../utils/validation';
import FormCustom from '../../layouts/FormCustom';

const LoanSection = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loanSchema),
    mode: 'onChange',
  });

  const optionsMap = {
    need_type,
    loan_type,
    placement_amount,
    placement_duration,
    deposit_certificate_name,
    deposit_renewal,
  };

  const onSubmit = (data) => {
    console.log('Final Data:', data);
  };

  return (
    <>
      <div className="w-full bg-white h-full mb-4 text-black rounded-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormCustom
            fields={loanField}
            optionsMap={optionsMap}
            gridClass="grid grid-cols-1 xs:grid-cols-[30%_70%] lg:grid-cols-[25%_75%] space-x-0 md:space-x-2"
            control={control}
            errors={errors}
          />
          <div className="flex items-center justify-end space-x-1 m-7 pb-7">
            <Button
              onClick={handleSubmit}
              label="Save"
              icon="pi pi-save"
              size="large"
              className=" p-2.5 bg-[#1cabe6] text-white"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default LoanSection;
