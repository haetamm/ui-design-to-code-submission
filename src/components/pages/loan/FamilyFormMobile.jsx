import { useState } from 'react';
import PropTypes from 'prop-types';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { relationship_family_option } from '../../../utils/selectOption';

const FamilyForm = ({ onSubmit }) => {
  const [familyData, setFamilyData] = useState([
    { id: 1, fullName: '', relationship: '', phone: '', address: '' },
    { id: 2, fullName: '', relationship: '', phone: '', address: '' },
  ]);

  const handleInputChange = (id, field, value) => {
    const updatedData = familyData.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setFamilyData(updatedData);
    onSubmit(updatedData);
  };

  // Konfigurasi kolom agar bisa dilooping
  const columns = [
    { field: 'fullName', header: 'Nama Lengkap', type: 'text' },
    { field: 'relationship', header: 'Hubungan Keluarga', type: 'dropdown' },
    { field: 'phone', header: 'No. Telepon', type: 'text' },
    { field: 'address', header: 'Alamat Rumah', type: 'textarea' },
  ];

  const renderEditor = (rowData, field, header, type = 'text') => {
    const commonProps = {
      value: rowData[field],
      onChange: (e) => handleInputChange(rowData.id, field, e.target.value),
      className: 'w-full border-[1px] p-[11px]',
    };

    switch (type) {
      case 'dropdown':
        return (
          <Dropdown
            {...commonProps}
            options={relationship_family_option}
            optionLabel='name'
            placeholder={`—Pilih ${header}—`}
            onChange={(e) => handleInputChange(rowData.id, field, e.value)}
            className='w-[138px] xxs:w-[178px] xs:w-full lg:w-[170px] xl:w-[220px] border-[1px]'
          />
        );
      case 'textarea':
        return (
          <InputTextarea
            {...commonProps}
            rows={4}
            cols={30}
            placeholder={`—Isi ${header}—`}
          />
        );
      default:
        return <InputText {...commonProps} placeholder={`—Isi ${header}—`} />;
    }
  };

  return (
    <div className='w-full px-3 md:px-6'>
      <div className='font-bold mb-1'>
        Data kerabat tidak serumah yang bisa dihubungi:
      </div>

      {/* Mobile Version */}
      <DataTable
        value={familyData}
        className='border border-gray-300 lg:hidden'
        stripedRows
      >
        <Column
          field='id'
          header='#'
          className='border text-center w-3 align-top'
        />
        <Column
          header='Detail Keluarga'
          body={(rowData) => (
            <div className='flex flex-col gap-2'>
              {columns.map(({ field, type, header }) =>
                renderEditor(rowData, field, header, type)
              )}
            </div>
          )}
          className='border'
        />
      </DataTable>

      {/* Desktop Version */}
      <DataTable
        value={familyData}
        className='border border-gray-300 hidden lg:block'
        stripedRows
      >
        <Column
          field='id'
          header='#'
          className='border  align-top text-center'
        />
        {columns.map(({ field, header, type }) => (
          <Column
            key={field}
            field={field}
            header={header}
            body={(rowData) => renderEditor(rowData, field, header, type)}
            className='border align-top'
          />
        ))}
      </DataTable>
    </div>
  );
};

FamilyForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FamilyForm;
