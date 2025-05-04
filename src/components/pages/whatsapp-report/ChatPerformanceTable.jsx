import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import { dateOptions, viewOptions } from '../../../utils/selectOption';
import { dataChatPerformance } from '../../../utils/data';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';

const ChatPerformanceTable = () => {
  const [dataPerformance] = useState(dataChatPerformance);
  const [selectedRange, setSelectedRange] = useState('This Month');
  const [selectedView, setSelectedView] = useState('officerOrLa');

  const columns = [
    { field: 'no', header: 'No.' },
    { field: 'adviser_name', header: 'Loan Adviser Name' },
    { field: 'office', header: 'Office' },
    { field: 'messageSent', header: 'Message Sent' },
    { field: 'messageRead', header: 'Message Read' },
    { field: 'failedMessage', header: 'Failed Message' },
    { field: 'status', header: 'Status' },
  ];

  // Fungsi untuk menambahkan baris kosong
  const getPaddedPerformance = () => {
    const rows = 3;
    const emptyRow = {
      no: '',
      adviser_name: '',
      office: '',
      messageSent: '',
      messageRead: '',
      failedMessage: '',
      status: '',
      _isEmpty: true,
    };
    const padded = [...dataPerformance];
    while (padded.length < rows) {
      padded.push({ ...emptyRow });
    }
    return padded;
  };

  // Custom render jika baris kosong
  const renderCell = (value, rowData) => {
    return rowData._isEmpty ? <span>&nbsp;</span> : value;
  };

  const responsiveTable = (rowData) => (
    <div className="p-3 border border-gray-300 rounded">
      <div className="inline-block xs:grid xs:grid-cols-[30%_70%] gap-x-2 gap-y-4 text-sm">
        {columns
          .filter((col) => col.field !== 'no')
          .map((col, idx) => (
            <React.Fragment key={idx}>
              <div className="font-bold mt-2 xs:mt-0">{col.header}</div>
              <div>{rowData[col.field]}</div>
            </React.Fragment>
          ))}
      </div>
    </div>
  );

  return (
    <div className="card mt-6 bg-white rounded-xl overflow-hidden">
      <div className=" xl:flex justify-between items-center px-2 pb-2 pt-3 gap-x-6 w-full">
        <div className="xs:flex justify-between w-full xl:w-[65%] items-center">
          <h2 className="text-lg md:text-xl font-bold">Chat Performance</h2>
          <IconField iconPosition="left" className="mt-1.5 xs:mt-0">
            <InputText
              placeholder="Search"
              className="h-[48px] px-10 w-full border-2 border-slate-200"
            />
            <InputIcon className="pi pi-search" />
          </IconField>
        </div>
        <div className="mt-4 xl:mt-0 flex justify-between xs:justify-end xl:justify-between w-full xl:w-[35%] items-center space-x-3">
          <Dropdown
            value={selectedView}
            options={viewOptions}
            onChange={(e) => setSelectedView(e.value)}
            className="h-[48px] border-2 rounded-lg text-sm py-0 w-[120px] xs:w-[170px]"
          />
          <Dropdown
            value={selectedRange}
            options={dateOptions}
            onChange={(e) => setSelectedRange(e.value)}
            className="h-[48px] border-2 rounded-lg text-sm py-0 w-[120px] xs:w-[170px]"
          />
        </div>
      </div>
      <DataTable
        value={getPaddedPerformance()}
        paginator
        rows={10}
        className="p-datatable-sm hidden lg:block"
        rowsPerPageOptions={[5, 10, 20]}
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
      >
        {columns.map(({ field, header }, index) => (
          <Column
            key={index}
            field={field}
            header={header}
            body={(rowData) => renderCell(rowData[field], rowData)}
          />
        ))}
      </DataTable>

      {/* Responsive Table for smaller screens */}
      <DataTable
        value={dataChatPerformance}
        paginator
        rows={10}
        className="p-datatable-sm lg:hidden"
        rowsPerPageOptions={[5, 10, 20]}
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
      >
        <Column header="Chat Performance Details" body={responsiveTable} />
      </DataTable>
    </div>
  );
};

export default ChatPerformanceTable;
