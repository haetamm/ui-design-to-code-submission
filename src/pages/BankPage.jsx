import React from 'react';
import FilterBar from '../components/layouts/FilterBar';
import { Button } from 'primereact/button';
import { dataProductBank } from '../utils/data';
import CardBank from '../components/pages/bank/CardBank';
import ButtonBottom from '../components/layouts/ButtonBottom';

const BankPage = () => {
  return (
    <>
      <div className="m-3 md:m-6 pt-3 md:pt-6 bg-white rounded-md">
        <FilterBar>
          <Button
            label="Add Bank"
            icon="pi pi-plus"
            size="small"
            className="hidden md:block w-full py-3 mt-4 md:mt-0 bg-[#1cabe6] text-white px-3"
          />
        </FilterBar>
        <div className=" px-3 pt-2 md:px-3 lg:px-4 xl:px-6 py-6 xs:pt-4 w-full">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {dataProductBank.map((bank, index) => (
              <CardBank {...bank} key={index} />
            ))}
          </div>
        </div>
      </div>
      <ButtonBottom>
        <Button
          label="Add Bank"
          icon="pi pi-plus"
          size="large"
          className=" w-full p-2.5 bg-[#1cabe6] text-white"
        />
      </ButtonBottom>
    </>
  );
};

export default BankPage;
