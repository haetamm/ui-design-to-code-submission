import React from 'react';
import ChartBankApprov from '../components/pages/dashboard/ChartBankApprov';
import ChartLoanApprov from '../components/pages/dashboard/ChartLoanApprov';
import ChartTarget from '../components/pages/dashboard/ChartTarget';
import Credential from '../components/pages/dashboard/Credential';
import CardMenu from '../components/pages/dashboard/CardMenu';
import { Helmet } from 'react-helmet-async';

const DashboardPage = () => {
  return (
    <>
      <Helmet>
        <title>Loan Market</title>
        <meta name='description' content='Dashboard page' />
      </Helmet>
      <Credential />
      <CardMenu />

      <div className='px-3 pb-4 md:px-3 lg:px-6 w-full'>
        <div className='bg-white pt-10 pb-4 rounded-lg'>
          <div className='block md:flex justify-center items-center'>
            <div className='w-full md:w-1/2 md:border-r-2'>
              <ChartLoanApprov />
            </div>
            <div className='w-full md:w-1/2 mt-6 md:mt-0'>
              <ChartTarget />
            </div>
          </div>
        </div>
      </div>

      <div className='px-3 lg:px-6 w-full mb-5 mt-2'>
        <div className='bg-white pt-10 pb-4 rounded-lg'>
          <ChartBankApprov />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
