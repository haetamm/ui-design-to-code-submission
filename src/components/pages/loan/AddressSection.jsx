import React from 'react';
import { addressField } from '../../../utils/fieldInput';
import CardInfo from './CardInfo';

const AddressSection = () => {
  const groupedFields = addressField.reduce((acc, field) => {
    if (!acc[field.category]) {
      acc[field.category] = [];
    }
    acc[field.category].push(field);
    return acc;
  }, {});

  return (
    <>
      <div className='w-full  p-1 lg:p-6 bg-white h-full mb-4 text-black rounded-md'>
        {Object.entries(groupedFields).map(([category, fields]) => (
          <CardInfo
            key={category}
            title={
              category === 'ktp'
                ? 'Data KTP'
                : category === 'domisili'
                  ? 'Data Domisili'
                  : 'Data Alamat Tempat Bekerja'
            }
            fields={fields}
          />
        ))}
      </div>
    </>
  );
};

export default AddressSection;
