import React from 'react';
import { Outlet } from 'react-router-dom';
import NavPage from '../components/layouts/NavPage';
import { productBankLink } from '../utils/link';

const ProductBankPage = () => {
  return (
    <>
      <NavPage
        links={productBankLink}
        entityName='Product'
        subName='Bank Product'
      />
      <Outlet />
    </>
  );
};

export default ProductBankPage;
