import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';

const DesignTable = () => {
  const items = [
    {
      image: '/img/icon-newsletter.png', // Ganti dengan thumbnail asli
      name: 'Your Headline',
      type: 'Newsletter',
      edited: '1 day ago',
    },
  ];

  const actionTemplate = () => (
    <Button icon="pi pi-ellipsis-v" className="p-button-text p-button-plain" />
  );

  const imageTemplate = (rowData) => (
    <Image src={rowData.image} alt="preview" width="40" preview={false} />
  );

  return (
    <>
      <p className="font-bold text-xl md:text-2xl mb-2">Your Designs</p>
      <div className="card rounded-xl overflow-hidden border border-gray-200 shadow-sm">
        <DataTable
          value={items}
          className="p-datatable-sm"
          footer={<div className="bg-white py-4 rounded-b-xl" />}
        >
          <Column body={imageTemplate} style={{ width: '80px' }} />
          <Column field="name" header="Name" />
          <Column field="type" header="Type" />
          <Column field="edited" header="Edited" />
          <Column body={actionTemplate} style={{ width: '60px' }} />
        </DataTable>
      </div>
    </>
  );
};

export default DesignTable;
