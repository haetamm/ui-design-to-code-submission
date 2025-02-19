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
import LoanFormCustom from './LoanFormCustom';

const LoanSection = () => {
  const optionsMap = {
    need_type,
    loan_type,
    placement_amount,
    placement_duration,
    deposit_certificate_name,
    deposit_renewal,
  };

  return (
    <>
      <div className='w-full bg-white h-full mb-4 text-black rounded-md'>
        <LoanFormCustom fields={loanField} optionsMap={optionsMap} />
      </div>
    </>
  );
};

export default LoanSection;
