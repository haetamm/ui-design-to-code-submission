import React, { useState } from 'react';
import { loanField } from '../../../utils/fieldInput';
import {
  loan_type_option as loan_type,
  need_type_option as need_type,
  placement_amount_option as placement_amount,
  placement_duration_option as placement_duration,
  deposit_certificate_name_option as deposit_certificate_name,
  deposit_renewal_option as deposit_renewal,
} from '../../../utils/selectOption';
import LoanFormCustom from './LoanFormCustom';
import { Button } from 'primereact/button';

const LoanSection = () => {
  const [data, setData] = useState({});

  const optionsMap = {
    need_type,
    loan_type,
    placement_amount,
    placement_duration,
    deposit_certificate_name,
    deposit_renewal,
  };

  const handleSubmit = () => {
    console.log('data', data);
  };

  return (
    <>
      <div className='w-full bg-white h-full mb-4 text-black rounded-md'>
        <LoanFormCustom
          fields={loanField}
          optionsMap={optionsMap}
          gridClass='grid grid-cols-1 xs:grid-cols-[30%_70%] space-x-0 xs:space-x-2'
          onSubmit={setData}
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
      </div>
    </>
  );
};

export default LoanSection;
