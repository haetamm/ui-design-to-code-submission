import React, { useState, useEffect } from 'react';
import { addressField } from '../../../utils/fieldInput';
import CardInfo from './CardInfo';
import { Button } from 'primereact/button';

const AddressSection = () => {
  const [dataKtp, setDataKtp] = useState({});
  const [dataDomisili, setDataDomisili] = useState({});
  const [dataCompany, setDataCompany] = useState({});
  const [isDomisiliSameAsKtp, setIsDomisiliSameAsKtp] = useState(false);
  const [isCompanySameAsKtp, setIsCompanySameAsKtp] = useState(false);

  const handleSubmit = () => {
    const payload = {
      dataKtp,
      dataDomisili,
      dataCompany,
    };
    console.log('FormData', payload);
  };

  // Handle checkbox untuk dataDomisili
  const handleDomisiliCheckboxChange = (e) => {
    const checked = e.target.checked;
    setIsDomisiliSameAsKtp(checked);
    if (checked) {
      setDataDomisili(dataKtp); // Sinkronkan dengan dataKtp saat dicentang
    } else {
      setDataDomisili({}); // Reset saat unchecked
    }
  };

  // Handle checkbox untuk dataCompany
  const handleCompanyCheckboxChange = (e) => {
    const checked = e.target.checked;
    setIsCompanySameAsKtp(checked);
    if (checked) {
      setDataCompany(dataKtp); // Sinkronkan dengan dataKtp saat dicentang
    } else {
      setDataCompany({}); // Reset saat unchecked
    }
  };

  // Sinkronisasi dataDomisili dengan dataKtp saat checkbox dicentang dan dataKtp berubah
  useEffect(() => {
    if (isDomisiliSameAsKtp) {
      setDataDomisili(dataKtp);
    }
  }, [dataKtp, isDomisiliSameAsKtp]);

  // Sinkronisasi dataCompany dengan dataKtp saat checkbox dicentang dan dataKtp berubah
  useEffect(() => {
    if (isCompanySameAsKtp) {
      setDataCompany(dataKtp);
    }
  }, [dataKtp, isCompanySameAsKtp]);

  return (
    <>
      <div className='w-full p-1 lg:p-6 bg-white h-full mb-4 text-black rounded-md'>
        <CardInfo
          title='Data KTP'
          fields={addressField}
          onSubmit={setDataKtp}
        />
        <div className='flex space-x-3 items-center px-3 my-4'>
          <input
            type='checkbox'
            className='h-6 w-6 border-[1px]'
            id='data-domisili'
            checked={isDomisiliSameAsKtp}
            onChange={handleDomisiliCheckboxChange}
          />
          <label htmlFor='data-domisili' className='font-bold'>
            Domisili Sesuai KTP
          </label>
        </div>
        {!isDomisiliSameAsKtp && (
          <CardInfo
            title='Data Domisili'
            fields={addressField}
            onSubmit={setDataDomisili}
          />
        )}
        <div className='flex space-x-3 items-center px-3 my-4'>
          <input
            type='checkbox'
            className='h-6 w-6 border-[1px]'
            id='data-company'
            checked={isCompanySameAsKtp}
            onChange={handleCompanyCheckboxChange}
          />
          <label htmlFor='data-company' className='font-bold'>
            Alamat Tempat Bekerja / Perusahaan Sesuai KTP
          </label>
        </div>
        {!isCompanySameAsKtp && (
          <CardInfo
            title='Data Alamat Tempat Kerja'
            fields={addressField}
            onSubmit={setDataCompany}
          />
        )}
        <div className='flex items-center justify-end space-x-1 mt-10'>
          <Button
            onClick={handleSubmit}
            label='Save'
            icon='pi pi-save'
            size='large'
            className='bg-[#1cabe6] p-2.5 text-white'
            type='button'
          />
        </div>
      </div>
    </>
  );
};

export default AddressSection;
