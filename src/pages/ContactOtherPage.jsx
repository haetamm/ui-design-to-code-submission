import React from 'react';
import { dataContact } from '../utils/data';
import CardContact from '../components/pages/contact/CardContact';
import FilterBar from '../components/layouts/FilterBar';
import { Button } from 'primereact/button';

const ContactOtherPage = () => {
  const contact = dataContact.filter((contact) => contact.type === 'other');

  return (
    <>
      <div className="mb-0 mt-[68px] md:mb-0">
        <FilterBar isSort={false}>
          <Button
            label="Sort"
            icon="pi pi-sort-alpha-up"
            size="small"
            className="h-[48px] md:w-[150px] mt-2 md:mt-0 w-full bg-white px-3 border-2"
          />
        </FilterBar>
        <div className=" px-3 pt-0 md:px-3 lg:px-4 xl:px-6 py-6 xs:pt-0 w-full">
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4">
            {contact.map((contact, index) => (
              <CardContact {...contact} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactOtherPage;
