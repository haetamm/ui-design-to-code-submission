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

const EmploymentInfoSection = () => {
  const optionsMap = {
    current_job,
    company_type,
    business_field,
    years_of_experience,
    monthly_income,
  };

  return (
    <div className='w-full bg-white h-full mb-4 text-black rounded-md'>
      <LoanFormCustom fields={employmentInfoField} optionsMap={optionsMap} />
    </div>
  );
};

export default EmploymentInfoSection;
