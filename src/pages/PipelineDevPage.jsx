import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSidebar } from '../store/sidebar';
import LoanTable from '../components/pages/pipeline/LoanTable';
import { Dropdown } from 'primereact/dropdown';
import { list_branch_offices_option } from '../utils/selectOption';
import FilterSection from '../components/pages/pipeline/FilterSection';

const PipelineDevPage = () => {
  const { isOpen } = useSidebar();
  const [selectedStatus, setSelectedStatus] = useState(null);

  const handleStatusChange = (e) => {
    setSelectedStatus(e.value);
  };

  return (
    <>
      <Helmet>
        <title>Pipeline Developer | Loan Market</title>
        <meta name="description" content="Pipeline Developer page" />
      </Helmet>
      <div className="mt-[40px] xs:mt-[10px] mb-14">
        <div className={`${isOpen ? 'pl-3' : 'px-3'} md:px-6 md:py-3`}>
          <FilterSection
            labelLeft="Status"
            leftChild={
              <Dropdown
                options={list_branch_offices_option}
                optionLabel="name"
                value={selectedStatus}
                onChange={handleStatusChange}
                className="h-[48px] mt-2 md:mt-0 w-full bg-white border-2 rounded-lg"
                placeholder="Pilih Status"
              />
            }
          />
          <div className="bg-white mt-6 pt-3 md:pt-6 md:pb-0 rounded-md">
            <LoanTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default PipelineDevPage;
