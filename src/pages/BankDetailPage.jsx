import React from 'react';
import { InputText } from 'primereact/inputtext';
import { detailProductBankField } from '../utils/fieldInput';
import { Link, useParams } from 'react-router-dom';
import { dataProductBank } from '../utils/data';
import ButtomBottom from '../components/pages/bank/ButtomBottom';
import { Button } from 'primereact/button';
import { urlPage } from '../utils/constans';
import { Helmet } from 'react-helmet-async';

const BankDetailPage = () => {
  const { id } = useParams();
  const product = dataProductBank.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className=' text-2xl font-bold flex h-[calc(100vh-60px)] items-center justify-center'>
        Product not found!
      </div>
    );
  }
  return (
    <>
      <Helmet>
        <title>Bank Product Detail | Loan Market</title>
        <meta name='description' content='Bank Product Detail page' />
      </Helmet>
      <div className='mt-[60px] mb-14 md:mb-0'>
        <div className='px-3 py-6 md:p-6'>
          <div className='bg-white p-3 md:p-8 rounded-md'>
            {detailProductBankField.map(({ label, value }, index) => (
              <div
                key={index}
                className='flex w-full items-center mb-6 space-x-2'
              >
                <div className='w-[30%] xs:w-[20%] font-bold'>{label}</div>
                <div className='w-[70%] xs:w-[80%]'>
                  <InputText
                    disabled
                    placeholder='Disabled'
                    className='bg-gray-200 py-3 w-full px-3 text-black'
                    value={product[value] || 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ButtomBottom>
        <Button
          label='Delete Produk'
          icon='pi pi-trash'
          size='normal'
          className=' w-full p-3 bg-red-500 text-white'
        />
        <Link to={`${urlPage.PRODUCT_BANK}/${id}/update`} className='w-full'>
          <Button
            label='Edit Produk'
            icon='pi pi-pen-to-square'
            size='normal'
            className=' w-full p-3 bg-[#0c2f3e] text-white'
          />
        </Link>
      </ButtomBottom>
    </>
  );
};

export default BankDetailPage;
