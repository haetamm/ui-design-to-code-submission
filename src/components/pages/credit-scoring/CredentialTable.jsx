import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { dataCreditScoring } from '../../../utils/data';

const CredentialTable = () => {
  const columns = [
    { field: 'name', header: 'Name' },
    { field: 'ktpNpwp', header: 'KTP / NPWP' },
    { field: 'type', header: 'Type' },
    { field: 'purpose', header: 'Purpose' },
    { field: 'date', header: 'Tanggal' },
    { field: 'status', header: 'Status' },
  ];

  const actionTemplate = (rowData) => (
    <Button
      icon="pi pi-trash"
      className="bg-red-600 text-white py-1 px-3 w-[70px]"
      onClick={() => console.log('Delete', rowData)}
    />
  );

  const responsiveTable = (rowData) => (
    <div className="p-3 border border-gray-300 rounded">
      <div className="inline-block xs:grid xs:grid-cols-[20%_80%] gap-x-2 gap-y-4 text-md">
        {columns.map((col, idx) => (
          <React.Fragment key={idx}>
            <div className="font-bold mt-2 xs:mt-0">{col.header}</div>
            <div>{rowData[col.field]}</div>
          </React.Fragment>
        ))}
        <div className="font-bold mt-2 xs:mt-0">Action</div>
        <div className="mt-2 xs:mt-0">{actionTemplate(rowData)}</div>
      </div>
    </div>
  );

  return (
    <div className="w-full px-3 md:px-6 mt-3 mb-4">
      {/* Tabel Desktop */}
      <DataTable
        value={dataCreditScoring}
        className="w-full hidden lg:block border border-gray-300 rounded-xl overflow-hidden"
        headerClassName=""
        showGridlines
        stripedRows
        rowClassName={() => 'border-b border-gray-300 '}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 20]}
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
      >
        {columns.map((col, index) => (
          <Column
            key={index}
            field={col.field}
            header={col.header}
            className="border-r border-gray-300"
          />
        ))}
        <Column header="Action" body={actionTemplate} />
      </DataTable>

      {/* Tabel Mobile */}
      <DataTable
        value={dataCreditScoring}
        className="w-full lg:hidden rounded-lg overflow-hidden"
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 20]}
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
      >
        <Column header="Result" body={responsiveTable} />
      </DataTable>
    </div>
  );
};

export default CredentialTable;
