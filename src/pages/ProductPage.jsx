import React from 'react';
import { Outlet } from 'react-router-dom';
import { productLink } from '../utils/link';
import NavPage from '../components/layouts/NavPage';

const ProductPage = () => {
  return (
    <>
      <NavPage
        links={productLink}
        entityName='Product'
        subName='Bank Product'
      />
      <Outlet />
    </>
  );
};

export default ProductPage;
