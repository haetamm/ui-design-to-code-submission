import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSidebar } from '../store/sidebar';
import LoanTable from '../components/pages/pipeline/LoanTable';
import { Dropdown } from 'primereact/dropdown';
import { list_branch_offices_option } from '../utils/selectOption';

const PipelineDevPage = () => {
  const { isOpen } = useSidebar();
  const [selectedBranch, setSelectedBranch] = useState(null);

  const handleBranchChange = (e) => {
    setSelectedBranch(e.value);
  };

  return (
    <>
      <Helmet>
        <title>Pipeline Developer | Loan Market</title>
        <meta name="description" content="Pipeline Developer page" />
      </Helmet>
      <div className="mt-[20px] md:mt-[10px] mb-14">
        <div className={`${isOpen ? 'pl-3' : 'px-3'} md:px-6 md:py-3`}>
          <div className="bg-white p-3 md:p-6 rounded-md">
            <div className="font-medium text-2xl">Filter Option</div>
            <div className="grid grid-cols-1 xs:grid-cols-2 space-x-0 xs:space-x-4">
              <div className="my-3">
                <p className="font-bold md:mb-1">Status</p>
                <Dropdown
                  options={list_branch_offices_option}
                  optionLabel="name"
                  value={selectedBranch}
                  onChange={handleBranchChange}
                  className="h-[48px] mt-2 md:mt-0 w-full bg-white border-2 rounded-lg"
                  placeholder="Pilih status"
                />
              </div>
            </div>
          </div>
          <div className="bg-white mt-6 pt-3 md:pt-6 md:pb-0 rounded-md">
            <LoanTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default PipelineDevPage;
