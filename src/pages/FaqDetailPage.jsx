import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import NavPage from '../components/layouts/NavPage';
import FilterBar from '../components/layouts/FilterBar';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { faq_count_list_option } from '../utils/selectOption';
import FaqDetailList from '../components/pages/faqs/FaqDetailList';
import { useParams } from 'react-router-dom';
import { dataFaqs } from '../utils/data';
import DataNotFound from '../components/pages/DataNotFound';

const FaqDetailPage = () => {
  const [selectedOption, setSelectedOption] = useState(5);
  const { id } = useParams();
  const data = dataFaqs.find((item) => item.id === parseInt(id));

  if (!data) return <DataNotFound msg="Faq's not found!!" />;

  return (
    <>
      <Helmet>
        <title>{data.title} | Loan Market</title>
        <meta name="description" content={`Faq Detail bank page`} />
      </Helmet>
      <NavPage entityName="FAQ's KPR Primary" subName={data.title} />
      <div className="mt-20">
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
      <FaqDetailList faq={data} />
    </>
  );
};

export default FaqDetailPage;
