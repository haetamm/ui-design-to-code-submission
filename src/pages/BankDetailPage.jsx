import React from 'react';
import NavPage from '../components/layouts/NavPage';
import { useParams } from 'react-router-dom';
import { dataProductBank } from '../utils/data';
import DataNotFound from '../components/pages/DataNotFound';
import { Button } from 'primereact/button';
import FilterBar from '../components/layouts/FilterBar';
import CredentialBank from '../components/pages/bank/CredentialBank';
import CardBankBranch from '../components/pages/bank/CardBankBranch';
import { Helmet } from 'react-helmet-async';
import ButtonBottom from '../components/layouts/ButtonBottom';

const BankDetailPage = () => {
  const { id } = useParams();
  const data = dataProductBank.find((item) => item.id === parseInt(id));

  if (!data) return <DataNotFound msg="Bank not found!!" />;

  const { bank_name, img, description } = data;

  return (
    <>
      <Helmet>
        <title>{bank_name} | Loan Market</title>
        <meta name="description" content={`${bank_name} bank page`} />
      </Helmet>
      <NavPage entityName="Bank" subName="Bank" />
      <div className="p-5 lg:p-3 xl:p-6 ">
        <CredentialBank
          bank_name={bank_name}
          img={img}
          description={description}
        />
        <div className="mt-3 md:my-6 pt-3 md:pt-6 bg-white rounded-md">
          <FilterBar>
            <Button
              label="Filter"
              icon="pi pi-filter"
              size="small"
              className="h-[48px] mt-2 md:mt-0 w-full md:w-[150px] bg-white px-3 border-2"
            />
            <Button
              label="Add Branch"
              icon="pi pi-plus"
              size="small"
              className="hidden md:block w-full py-3 mt-4 md:mt-0 bg-[#1cabe6] text-white px-3"
            />
          </FilterBar>
          <div className=" px-3 pt-2 md:px-3 lg:px-4 xl:px-6 py-6 xs:pt-4 w-full">
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data?.branch?.length > 0 ? (
                data.branch.map((branch) => (
                  <CardBankBranch key={branch.id} {...branch} />
                ))
              ) : (
                <div className="col-span-full text-center text-gray-500 py-4">
                  No data available
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ButtonBottom>
        <Button
          label="Add Branch"
          icon="pi pi-plus"
          size="large"
          className=" w-full p-2.5 bg-[#1cabe6] text-white"
        />
      </ButtonBottom>
    </>
  );
};

export default BankDetailPage;
