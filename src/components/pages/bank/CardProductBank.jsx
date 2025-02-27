import React, { useState } from 'react';
import { FaRegChartBar } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { PiTimerLight } from 'react-icons/pi';
import { AiOutlineFileProtect } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { CiDollar } from 'react-icons/ci';
import { Button } from 'primereact/button';
import { MdOutlineStar } from 'react-icons/md';
import { dataProductBank } from '../../../utils/data';
import { Link } from 'react-router-dom';
import { urlPage } from '../../../utils/constans';

import { formatValue, scrollTop } from '../../../utils/helper';
import ProductFilterBar from './ProductFilterBar';
import { useSidebar } from '../../../store/sidebar';

const CardProductBank = () => {
  const { isOpen } = useSidebar();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProductType, setSelectedProductType] = useState({
    name: 'Semua Tipe',
    value: null,
  });

  const filteredProducts = dataProductBank.filter((product) => {
    const matchesSearch = product.product_name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesType =
      selectedProductType?.value === null ||
      (product.product_type && product.product_type === selectedProductType);
    return matchesSearch && matchesType;
  });

  return (
    <>
      <ProductFilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedProductType={selectedProductType}
        setSelectedProductType={setSelectedProductType}
      />

      <div className='px-3 pt-0 md:px-3 lg:px-4 xl:px-6 xs:pt-0 w-full'>
        {filteredProducts.map((data) => (
          <div
            key={data.id}
            className='bg-white rounded-md mb-6 inline-block lg:flex items-center px-3 xl:px-5 py-6 space-x-0 md:space-x-1 justify-between w-full'
          >
            <div className='flex flex-col items-center lg:space-y-4'>
              <img
                src={data.img}
                alt='logo-bank'
                className='w-[200px] h-[58px] object-contain'
              />

              <div className='flex items-center justify-center w-full min-w-[330px] mt-5 xs:mt-6 lg:mt-0'>
                <div
                  className={`${isOpen ? 'w-[calc(55%-55px)] pr-2' : 'w-1/2'} flex flex-col items-center justify-center border-r-2`}
                >
                  <p className='text-md text-gray-400 font-bold mb-1 text-center'>
                    Rating : {data.rating}
                  </p>
                  <div className='flex justify-center'>
                    {[...Array(5)].map((_, index) => (
                      <MdOutlineStar
                        key={index}
                        className={
                          index + 1 <= data.rating
                            ? 'text-[#1cabe6] mr-1 w-6 h-6'
                            : 'text-gray-300 mr-1 w-6 h-6'
                        }
                      />
                    ))}
                  </div>
                  <p className='text-sm mt-1 font-semibold text-center'>
                    {data.reviews} Reviews
                  </p>
                </div>

                <div
                  className={`${isOpen ? 'w-[calc(55%-55px)]' : 'w-1/2'} flex flex-col items-center justify-center`}
                >
                  <p className='text-md text-gray-400 font-bold mb-1 text-center'>
                    User :
                  </p>
                  <p className='font-bold text-md text-center'>{data.users}</p>
                  <p className='text-sm mt-1 font-semibold text-center'>
                    Users yearly
                  </p>
                </div>
              </div>
            </div>

            <div className='inline-block xs:flex-row md:flex justify-between xs:justify-normal mt-4 xs:mt-6 lg:mt-0 w-full'>
              <div className='flex w-full justify-center md:justify-normal md:w-[75%]'>
                <div className='block xs:flex xs:flex-col mt-4 xs:mt-0'>
                  <div className='text-xl xs:text-2xl font-bold text-center md:text-start'>
                    {data.bank_name} {''}
                    <span className='text-[#841ce6]'>{data.product_name}</span>
                  </div>
                  <div className='inline-block xs:flex justify-between mt-2'>
                    <div className='flex flex-col md:border-r-2 pr-4'>
                      <div className='flex space-x-3 xs:space-x-1 items-center text-sm text-gray-600'>
                        <div className=' rounded-full p-1'>
                          <FaRegChartBar className='h-6 w-6 flex-shrink-0  ' />
                        </div>
                        <p>Fix Rate (Year): {data.year_fix_rate}</p>
                      </div>
                      <div className='flex space-x-3 xs:space-x-1 items-center text-sm text-gray-600 mt-1'>
                        <div className=' rounded-full p-1'>
                          <IoMdTime className='h-6 w-6 flex-shrink-0  ' />
                        </div>
                        <p>Max Tenor: {data.max_tenor}</p>
                      </div>
                      <div className='flex space-x-3 xs:space-x-1 items-center text-sm text-gray-600 mt-1'>
                        <div className=' rounded-full p-1'>
                          <PiTimerLight className='h-6 w-6 flex-shrink-0  ' />
                        </div>
                        <p>Loan to Value: {data.loan_to_value}</p>
                      </div>
                    </div>
                    <div className='flex flex-col ml-0 xs:ml-4 mt-1 xs:mt-0'>
                      <div className='flex space-x-3 xs:space-x-1 items-center text-sm text-gray-600'>
                        <div className=' rounded-full p-1'>
                          <AiOutlineFileProtect className='h-6 w-6 flex-shrink-0  ' />
                        </div>
                        <p>{formatValue(data.guarantee)}</p>
                      </div>
                      <div className='flex space-x-3 xs:space-x-1 items-center text-sm text-gray-600 mt-1'>
                        <div className=' rounded-full p-1'>
                          <FiUser className='h-6 w-6 flex-shrink-0  ' />
                        </div>
                        <p>{formatValue(data.target_market)}</p>
                      </div>
                      <div className='flex space-x-3 xs:space-x-1 items-center text-sm text-gray-600 mt-1'>
                        <div className=' rounded-full p-1'>
                          <CiDollar className='h-6 w-6 flex-shrink-0  ' />
                        </div>
                        <p>Komisi: {data.commision}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='inline-block xs:flex xs:flex-col items-center justify-center md:flex-grow mt-4 md:mt-0 w-full md:w-auto shrink-0'>
                <Link
                  to={`${urlPage.PRODUCT_BANK}/${data.id}`}
                  className='w-full'
                >
                  <Button
                    onClick={scrollTop}
                    label='Detail'
                    className='text-[#1cabe6] p-2.5 shadow-lg text-lg border-[1px] rounded-md w-full md:w-[130px]'
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardProductBank;
