import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import FilterBar from '../components/layouts/FilterBar';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { faq_count_list_option } from '../utils/selectOption';
import FaqList from '../components/pages/faqs/FaqList';

const FaqPage = () => {
  const [selectedOption, setSelectedOption] = useState(5);
  return (
    <>
      <Helmet>
        <title>FAQ&apos;s | Loan Market</title>
        <meta name="description" content="FAQ's page" />
      </Helmet>
      <div className="mt-6">
        <FilterBar isSort={false}>
          <Button
            label="Filter"
            icon="pi pi-filter"
            size="small"
            className="h-[48px] mt-2 md:mt-0 w-full md:w-[150px] bg-white px-3 border-2"
          />
          <Dropdown
            options={faq_count_list_option}
            optionLabel="name"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.value)}
            className="h-[48px] mt-2 md:mt-0 w-1/2 md:w-[100px] bg-white border-2"
          />
        </FilterBar>
      </div>
      <FaqList />
    </>
  );
};

export default FaqPage;
