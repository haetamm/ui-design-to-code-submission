import React from 'react';
import CardProductBank from '../components/pages/product/CardProductBank';
import { Button } from 'primereact/button';
import { Helmet } from 'react-helmet-async';
import { scrollTop } from '../utils/helper';
import ButtonBottom from '../components/layouts/ButtonBottom';
import { urlPage } from '../utils/constans';
import { Link } from 'react-router-dom';
import CardMenuBank from '../components/pages/product/CardMenuBank';

const ProductBankPage = () => {
  return (
    <>
      <Helmet>
        <title>Product | Loan Market</title>
        <meta name="description" content="Product page" />
      </Helmet>
      <div className="mb-14 mt-[42px] md:mb-0">
        <CardMenuBank />
        <CardProductBank />
        <ButtonBottom>
          <Link to={urlPage.PRODUCT_BANK_ADD} className="w-full">
            <Button
              onClick={scrollTop}
              label="Tambah Produk"
              icon="pi pi-plus"
              size="large"
              className=" w-full p-2.5 bg-[#1cabe6] text-white"
            />
          </Link>
        </ButtonBottom>
      </div>
    </>
  );
};

export default ProductBankPage;
