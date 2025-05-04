import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSidebar } from '../store/sidebar';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { creditScoringCompanySchema } from '../utils/validation';
import { creditScoringCompanyField } from '../utils/fieldInput';
import { credit_purpose_option as credit_purpose } from '../utils/selectOption';
import FormCreditScoring from '../components/pages/credit-scoring/FormCreditScoring';
import CredentialTable from '../components/pages/credit-scoring/CredentialTable';

const CreditScoringCompanyPage = () => {
  const { isOpen } = useSidebar();
  const optionsMap = {
    credit_purpose,
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(creditScoringCompanySchema),
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };
  return (
    <>
      <Helmet>
        <title>Credit Scoring Company | Loan Market</title>
        <meta name="description" content="Credit Scoring Company page" />
      </Helmet>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-[60px] md:mb-0">
          <div className={`${isOpen ? 'pl-3' : 'px-3'} py-3 md:p-6`}>
            <FormCreditScoring
              control={control}
              errors={errors}
              fields={creditScoringCompanyField}
              optionsMap={optionsMap}
            />
          </div>
        </div>
      </form>
      <CredentialTable />
    </>
  );
};

export default CreditScoringCompanyPage;
