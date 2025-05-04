import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import { dateOptions } from '../../../utils/selectOption';
import { dataCampaign } from '../../../utils/data';

const CampaignTable = () => {
  const [campaigns] = useState(dataCampaign);
  const [selectedRange, setSelectedRange] = useState('This Month');

  const columns = [
    { field: 'no', header: 'No.' },
    { field: 'name', header: 'Nama Campaign' },
    { field: 'sentAt', header: 'Kapan Dikirim' },
    { field: 'totalUsed', header: 'Jumlah Nomor Dipakai' },
  ];

  // Fungsi untuk menambahkan baris kosong
  const getPaddedCampaigns = () => {
    const rows = 6;
    const emptyRow = {
      no: '',
      name: '',
      sentAt: '',
      totalUsed: '',
      _isEmpty: true,
    };
    const padded = [...campaigns];
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
          .filter((col) => col.field !== 'no') // Exclude the 'id' column
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
    <div className="card mt-6 xl:mt-3 bg-white order-2 xl:order-2 rounded-xl overflow-hidden">
      <div className="flex justify-between items-center px-2 pb-2 pt-3">
        <h2 className="text-lg md:text-xl font-bold">Campaign</h2>
        <Dropdown
          value={selectedRange}
          options={dateOptions}
          onChange={(e) => setSelectedRange(e.value)}
          className="h-[48px] border-2 rounded-lg text-sm py-0 w-[120px] xs:w-[170px]"
        />
      </div>
      <DataTable
        value={getPaddedCampaigns()}
        paginator
        rows={10}
        className="p-datatable-sm hidden md:block"
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
        value={dataCampaign}
        paginator
        rows={10}
        className="p-datatable-sm md:hidden"
        rowsPerPageOptions={[5, 10, 20]}
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
      >
        <Column header="Campaign Details" body={responsiveTable} />
      </DataTable>
    </div>
  );
};

export default CampaignTable;
