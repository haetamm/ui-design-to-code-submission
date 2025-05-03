import React from 'react';
import { Link } from 'react-router-dom';
import { urlPage } from '../utils/constans';
import { Button } from 'primereact/button';
import { dataContact } from '../utils/data';
import CardContact from '../components/pages/contact/CardContact';
import ButtonBottom from '../components/layouts/ButtonBottom';
import FilterBar from '../components/layouts/FilterBar';
import { Helmet } from 'react-helmet-async';

const ContactMePage = () => {
  const contact = dataContact.filter((contact) => contact.type === 'my');

  return (
    <>
      <Helmet>
        <title>Contact | Loan Market</title>
        <meta name="description" content="Contact page" />
      </Helmet>
      <div className="mb-14 mt-[68px] md:mb-0">
        <FilterBar
          leftChild={
            <Button
              label="Sort"
              icon="pi pi-sort-alpha-up"
              size="large"
              className="h-[48px] mt-2 xs:mt-0 w-full xs:w-[150px] bg-white px-3 border-2"
            />
          }
          rightChild={
            <>
              <Link to={urlPage.CONTACT_ADD} className="md:w-[160px]  ">
                <Button
                  label="Add Contact"
                  icon="pi pi-plus"
                  size="small"
                  className="hidden md:block w-full py-3 mt-4 md:mt-0 bg-[#1cabe6] text-white px-3"
                />
              </Link>
              <Link
                to={urlPage.CONTACT_ADD_CATEGORY}
                className="md:w-[160px]  "
              >
                <Button
                  label="Add Category"
                  icon="pi pi-plus"
                  size="small"
                  className="hidden md:block w-full py-3 mt-4 md:mt-0 bg-[#1cabe6] text-white px-3"
                />
              </Link>
            </>
          }
        />

        <div className=" px-3 pt-0 md:px-3 lg:px-4 xl:px-6 py-6 xs:pt-0 w-full">
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4">
            {contact.map((contact, index) => (
              <CardContact {...contact} key={index} />
            ))}
          </div>
        </div>
      </div>
      <ButtonBottom>
        <Link to={urlPage.CONTACT_ADD_CATEGORY} className="w-full">
          <Button
            label="Category"
            icon="pi pi-plus"
            size="large"
            className=" w-full p-2.5 bg-[#1cabe6] text-white"
          />
        </Link>
        <Link to={urlPage.CONTACT_ADD} className="w-full">
          <Button
            label="Contact"
            icon="pi pi-plus"
            size="large"
            className=" w-full p-2.5 bg-[#1cabe6] text-white"
          />
        </Link>
      </ButtonBottom>
    </>
  );
};

export default ContactMePage;
