import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';
import { FaQuestionCircle } from 'react-icons/fa';
import { MdOutlineStar } from 'react-icons/md';
import { dataProductBank } from '../../../utils/data';

const ProductBankList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = dataProductBank.filter((product) => {
    const matchesSearch = product.bank_name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesSearch;
  });
  return (
    <>
      <div className='bg-white px-3 py-5 lg:p-7 h-full mb-4 text-black rounded-md'>
        <div className='inline xs:flex space-x-0 xs:space-x-3 items-center'>
          <IconField iconPosition='left' className='w-full border-2 rounded-md'>
            <InputText
              placeholder='Cari nama bank'
              className='h-[40px] px-10 w-full'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <InputIcon className='pi pi-search'> </InputIcon>
          </IconField>
          <Button
            label='Sort'
            icon='pi pi-sort-alpha-up'
            size='small'
            className='h-[40px] mt-2 xs:mt-0 w-full xs:w-auto bg-white px-3 border-2'
          />
        </div>
        <div className='mt-5 mb-3'>
          <div className=' flex space-x-2 mt-3 items-center'>
            <input
              type='checkbox'
              className='checkbox-custome h-5 w-5 cursor-pointer'
            />
            <p className='font-semibold text-sm'>
              Send to Pool (Pilih opsi ini jika Anda ingin mengirim leads ke
              semua bank rekanan Loan Market)
            </p>
            <FaQuestionCircle className='h-5 w-5 text-[#1cabe6] shrink-0' />
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xs:gap-14 md:gap-20 lg:gap-5 justify-center'>
            {filteredProducts.map(
              ({ img, rating, reviews, product_name, description }, index) => (
                <div
                  key={index}
                  className='shadow-md p-3 w-full xs:w-[250px] h-[374px] rounded-lg'
                >
                  <input
                    type='checkbox'
                    className='checkbox-custome h-4 w-4 cursor-pointer xl:mb-6'
                  />
                  <div className='flex flex-col items-center justify-center mb-5'>
                    <img
                      src={img}
                      alt='logo-bank'
                      className='w-[200px] h-[58px] object-contain'
                    />
                    <div className='flex justify-center mt-6'>
                      {[...Array(5)].map((_, index) => (
                        <MdOutlineStar
                          key={index}
                          className={
                            index + 1 <= rating
                              ? 'text-yellow-400 mr-1 w-10 h-10'
                              : 'text-gray-300 mr-1 w-10 h-10'
                          }
                        />
                      ))}
                    </div>
                    <p className='text-sm mt-1 font-semibold text-center'>
                      {reviews} Reviews
                    </p>
                  </div>
                  <p className='font-bold text-[#1cabe6] text-lg '>
                    {product_name}
                  </p>
                  <p>{description}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBankList;
