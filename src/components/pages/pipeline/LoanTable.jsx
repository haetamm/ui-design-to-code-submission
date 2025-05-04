import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode } from 'primereact/api';
import { dataLoan } from '../../../utils/data';
import '../../../styles/pages/loan-table.scss';
import FilterBar from '../../layouts/FilterBar';
import { Button } from 'primereact/button';

const LoanTable = () => {
  const [data] = useState(dataLoan);

  // State for global filter
  const [globalFilterValue, setGlobalFilterValue] = useState('');
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  // Handle global filter input change
  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };
    _filters['global'].value = value;
    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  // Render the global filter input
  const renderHeader = () => {
    return (
      <FilterBar
        placeholder="Search"
        value={globalFilterValue}
        onChange={onGlobalFilterChange}
        leftChild={
          <>
            <Button
              label="Filter"
              icon="pi pi-filter"
              size="large"
              className="h-[48px] mt-2 xs:mt-0 w-full xs:w-[150px] bg-white px-3 border-2"
            />
          </>
        }
        rightChild={
          <>
            <Button
              label="View Coloumn"
              icon="pi pi-table"
              size="large"
              className="h-[48px] mt-2 md:mt-0 w-full md:w-[180px] bg-white px-3 border-2"
            />
            <Button
              icon="pi pi-download"
              size="large"
              className="h-[48px] mt-2 md:mt-0 w-[80px] md:w-[48px] text-[#1cabe6] border-[#1cabe6] border-[1px] "
            />
            <Button
              icon="pi pi-print"
              size="large"
              className="h-[48px] mt-2 md:mt-0 w-[80px] md:w-[48px] text-[#1cabe6] border-[#1cabe6] border-[1px] "
            />
          </>
        }
      />
    );
  };

  const columns = [
    { field: 'office', header: 'KANTOR LOAN MARKET' },
    { field: 'debiturName', header: 'NAMA DEBITUR' },
    { field: 'fullname', header: 'NAMA LA' },
    { field: 'product', header: 'PRODUCT' },
    { field: 'plafond', header: 'PLAFOND' },
  ];

  const responsiveTable = (rowData) => (
    <div className="p-3 border border-gray-300 rounded">
      <div className="inline-block xs:grid xs:grid-cols-[30%_70%] gap-x-2 gap-y-4 text-sm">
        {columns.map((col, idx) => (
          <React.Fragment key={idx}>
            <div className="font-bold mt-2 xs:mt-0">{col.header}</div>
            <div>{rowData[col.field]}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {renderHeader()}
      <DataTable
        value={data}
        className="w-full hidden lg:block rounded-lg px-2 md:px-6"
        showGridlines
        stripedRows
        globalFilterFields={[
          'office',
          'debiturName',
          'fullname',
          'product',
          'plafond',
        ]}
        filters={filters}
        paginator
        rowsPerPageOptions={[5, 10, 25, 50]}
        rows={10}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="{first} to {last} of {totalRecords}"
      >
        {columns.map((col, index) => (
          <Column key={index} field={col.field} header={col.header} />
        ))}
      </DataTable>

      {/* Responsive Table for smaller screens */}
      <DataTable
        value={data}
        headerClassName=""
        className="w-full block lg:hidden rounded-lg overflow-hidden"
        globalFilterFields={[
          'office',
          'debiturName',
          'fullname',
          'product',
          'plafond',
        ]}
        filters={filters}
        paginator
        rowsPerPageOptions={[5, 10, 25, 50]}
        rows={10}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="{first} to {last} of {totalRecords}"
      >
        <Column header="Loan Details" body={responsiveTable} />
      </DataTable>
    </>
  );
};

export default LoanTable;
