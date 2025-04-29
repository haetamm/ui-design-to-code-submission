import React from 'react';
import { Outlet } from 'react-router-dom';
import NavPage from '../components/layouts/NavPage';
import { productBankLink } from '../utils/link';

const ProductPage = () => {
  return (
    <>
      <NavPage
        links={productBankLink}
        entityName="Product"
        subName="Bank Product"
      />
      <Outlet />
    </>
  );
};

export default ProductPage;
