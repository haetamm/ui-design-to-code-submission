import React from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { productLink } from '../utils/navLink';
import { urlPage } from '../utils/constans';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Button } from 'primereact/button';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;
  const isProductPage = () =>
    location.pathname === urlPage.PRODUCT_BANK ||
    location.pathname === urlPage.PRODUCT_DEVELOPER;

  const isProductUpdatePage = () =>
    location.pathname === `${urlPage.PRODUCT_BANK}/${id}/update`;

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div
        className={`flex  fixed z-50 bg-white w-full border-b-[1px] lg:w-[calc(100%-160px)] xl:w-[calc(1348px-210px)] h-50 space-x-1${
          isProductPage() ? ' justify-center ' : 'justify-normal px-3 xl:px-6'
        }`}
      >
        {isProductPage() &&
          productLink.map(({ to, label }, index) => (
            <div
              key={index}
              className={`font-bold text-md w-[140px] flex justify-center lg:text-lg pt-3 pb-1 mt-1 mb-0.5 ${
                isActive(to) ? ' border-b-2 border-[#1cabe6] ' : ''
              }`}
            >
              <Link
                to={to}
                className={`${isActive(to) ? 'text-[#1cabe6]  ' : ''}`}
              >
                {label}
              </Link>
            </div>
          ))}
        {!isProductPage() && (
          <div className='flex justify-between w-full'>
            <div className=' text-md flex justify-center lg:text-xl py-3 mt-1 mb-0.5 space-x-3 items-center'>
              <FaArrowAltCircleLeft
                onClick={handleBack}
                className='h-8 w-8 text-[#1cabe6] cursor-pointer'
              />
              <div>
                {!isProductUpdatePage()
                  ? 'Bank Product Detail'
                  : 'Edit Product'}
              </div>
            </div>
            {!isProductUpdatePage() && (
              <div className='hidden md:flex justify-between py-3 mt-1 mb-0.5 space-x-3 items-center'>
                <Link to={`${urlPage.PRODUCT_BANK}/${id}/update`}>
                  <Button
                    label='Edit Produk'
                    icon='pi pi-pen-to-square'
                    size='small'
                    className=' py-1.5 bg-[#0c2f3e] text-white px-3 text-md'
                  />
                </Link>
                <Button
                  label='Delete Produk'
                  icon='pi pi-trash'
                  size='small'
                  className=' py-1.5 bg-red-500 text-white px-3 text-md'
                />
              </div>
            )}
          </div>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default ProductPage;
