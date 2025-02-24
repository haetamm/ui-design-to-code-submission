import PropTypes from 'prop-types';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { relationship_family_option } from '../../../utils/selectOption';
import { Controller, useFieldArray } from 'react-hook-form';

const FamilyForm = ({ onSubmit, control, errors }) => {
  const { fields } = useFieldArray({
    control,
    name: 'familyData',
  });

  const columns = [
    { field: 'fullName', header: 'Nama Lengkap', type: 'text' },
    { field: 'relationship', header: 'Hubungan Keluarga', type: 'dropdown' },
    { field: 'phone', header: 'No. Telepon', type: 'text' },
    { field: 'address', header: 'Alamat Rumah', type: 'textarea' },
  ];

  const renderEditor = (index, fieldName, header, type = 'text') => (
    <Controller
      name={`familyData[${index}].${fieldName}`}
      control={control}
      render={({ field }) => {
        const commonProps = {
          value: field.value || '',
          onChange: (e) => {
            field.onChange(e.target.value);
            onSubmit(control._formValues.familyData);
          },
          className: 'w-full border-[1px] p-[11px]',
        };

        switch (type) {
          case 'dropdown':
            return (
              <Dropdown
                {...commonProps}
                options={relationship_family_option}
                optionLabel='name'
                optionValue='value'
                placeholder={`Pilih ${header}`}
                onChange={(e) => {
                  field.onChange(e.value);
                  onSubmit(control._formValues.familyData);
                }}
                className='w-[138px] xxs:w-[178px] xs:w-full lg:w-[170px] xl:w-[220px] border-[1px]'
              />
            );
          case 'textarea':
            return (
              <InputTextarea
                {...commonProps}
                rows={4}
                cols={30}
                placeholder={`Isi ${header}`}
              />
            );
          default:
            return <InputText {...commonProps} placeholder={`Isi ${header}`} />;
        }
      }}
    />
  );

  return (
    <div className='w-full px-3 md:px-6'>
      <div className='font-bold mb-1'>
        Data kerabat tidak serumah yang bisa dihubungi:
      </div>

      <DataTable
        value={fields}
        className='border border-gray-300 lg:hidden'
        stripedRows
      >
        <Column
          header='#'
          body={(_, { rowIndex }) => rowIndex + 1}
          className='border text-center w-3 align-top'
        />
        <Column
          header='Detail Keluarga'
          body={(_, { rowIndex }) => (
            <div className='flex flex-col gap-2'>
              {columns.map(({ field, type, header }) => (
                <div key={field}>
                  {renderEditor(rowIndex, field, header, type)}
                  {errors.familyData?.[rowIndex]?.[field] && (
                    <span className='text-red-500 text-sm inline-block'>
                      {errors.familyData[rowIndex][field].message}
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
          className='border'
        />
      </DataTable>

      <DataTable
        value={fields}
        className='border border-gray-300 hidden lg:block'
        stripedRows
      >
        <Column
          header='#'
          body={(_, { rowIndex }) => rowIndex + 1}
          className='border text-center w-3 align-top'
        />
        {columns.map(({ field, header, type }) => (
          <Column
            key={field}
            header={header}
            body={(_, { rowIndex }) => (
              <div>
                {renderEditor(rowIndex, field, header, type)}
                {errors.familyData?.[rowIndex]?.[field] && (
                  <span className='text-red-500 text-sm inline-block'>
                    {errors.familyData[rowIndex][field].message}
                  </span>
                )}
              </div>
            )}
            className='border align-top'
          />
        ))}
      </DataTable>
    </div>
  );
};

FamilyForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

export default FamilyForm;
