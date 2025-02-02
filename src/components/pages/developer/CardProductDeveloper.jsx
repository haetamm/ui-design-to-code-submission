import { Button } from 'primereact/button';
import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { dataProdctDeveloper } from '../../../utils/data';
import { Link } from 'react-router-dom';
import { urlPage } from '../../../utils/constans';

const CardProductDeveloper = () => {
  return (
    <>
      <div className='p-3 px-3 pt-0 md:px-3 lg:px-4 xl:px-6 py-6 xs:pt-0 w-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {dataProdctDeveloper.map(
            ({ id, name_product, price, type, total, name_dev }, index) => (
              <div
                key={index}
                className='w-full text-black bg-white rounded-md p-2 py-5 xs:p-4 inline-block xs:flex md:inline-block space-x-0 xs:space-x-2 md:space-x-0 lg:flex'
              >
                <div className='flex space-x-2 w-full'>
                  <div className='flex flex-col items-center w-[150px] xs:w-[250px] md:w-[170px] xl:w-[250px]'>
                    <img
                      src={`https://ui-avatars.com/api/?name=${name_dev}&background=841ce6`}
                      alt='img-profile'
                      className='h-[70px] w-[70px] rounded-full'
                    />
                    <p className='font-bold text-center mt-1'>{name_dev}</p>
                  </div>
                  <div className='flex flex-col items-start xs:justify-center md:justify-center w-full'>
                    <p className='font-bold text-lg'>{name_product}</p>
                    <div className='flex space-x-1 items-center text-sm'>
                      <FaCheck />
                      <p>Price {price}</p>
                    </div>
                    <div className='flex space-x-1 items-center text-sm'>
                      <FaCheck />
                      <p>Type {type}</p>
                    </div>
                    <p className='text-gray-500 text-sm'>
                      {total} people use it
                    </p>
                  </div>
                </div>
                <div className='mt-2 px-2 items-center inline-block xs:mt-0 xs:flex xs:flex-col xs:items-end  justify-center w-full xs:w-[100px] md:w-full md:mt-3 lg:w-[100px] lg:flex lg:flex-col lg:items-end lg:mt-0'>
                  <Link
                    to={`${urlPage.PRODUCT_DEVELOPER}/${id}`}
                    className='w-full'
                  >
                    <Button
                      label='Detail'
                      className='bg-[#1cabe6] w-full text-white px-4 py-1 rounded-none text-md'
                    />
                  </Link>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default CardProductDeveloper;
