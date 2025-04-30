import React from 'react';
import { Helmet } from 'react-helmet-async';
import CardProductDeveloper from '../components/pages/developer/CardProductDeveloper';

const ProductDeveloperPage = () => {
  return (
    <>
      <Helmet>
        <title>Developer | Loan Market</title>
        <meta name="description" content="Developer Page" />
      </Helmet>
      <div className="mb-0 mt-[65px] md:mb-0">
        <CardProductDeveloper />
      </div>
    </>
  );
};

export default ProductDeveloperPage;
