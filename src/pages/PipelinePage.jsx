import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSidebar } from '../store/sidebar';
import { Dropdown } from 'primereact/dropdown';
import { list_branch_offices_option } from '../utils/selectOption';
import { Calendar } from 'primereact/calendar';
import LoanTable from '../components/pages/pipeline/LoanTable';
import FilterSection from '../components/pages/pipeline/FilterSection';

const PipelinePage = () => {
  const { isOpen } = useSidebar();
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [dateRange, setDateRange] = useState(null);

  const handleBranchChange = (e) => {
    setSelectedBranch(e.value);
  };

  const handleDateChange = (e) => {
    setDateRange(e.value);
  };

  return (
    <>
      <Helmet>
        <title>Pipeline | Loan Market</title>
        <meta name="description" content="Pipeline page" />
      </Helmet>
      <div className="mt-[20px] md:mt-[10px] mb-4">
        <div className={`${isOpen ? 'pl-3' : 'px-3'} md:px-6 md:py-3`}>
          <FilterSection
            labelLeft="Kantor Loan Market"
            labelRight="Period"
            leftChild={
              <Dropdown
                options={list_branch_offices_option}
                optionLabel="name"
                value={selectedBranch}
                onChange={handleBranchChange}
                className="h-[48px] mt-2 md:mt-0 w-full bg-white border-2 rounded-lg"
                placeholder="Pilih kantor loan market"
              />
            }
            rightChild={
              <Calendar
                showIcon
                selectionMode="range"
                value={dateRange}
                onChange={handleDateChange}
                className="h-[48px] mt-2 md:mt-0 w-full border-[2px] rounded-lg bg-white px-1.5 custom-placeholder"
                placeholder="Start date    ->     End date"
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

export default PipelinePage;
