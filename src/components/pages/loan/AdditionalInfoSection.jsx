import React, { useState } from 'react';
import LoanFormCustom from './LoanFormCustom';
import { additionalInfoField } from '../../../utils/fieldInput';
import {
  gender_option as gender,
  home_ownership_status_option as home_ownership_status,
  last_education_option as last_education,
  length_of_residence_option as length_of_residence,
  marital_status_option as marital_status,
  marriage_type_option as marriage_type,
  number_of_dependents_option as number_of_dependents,
} from '../../../utils/selectOption';
import { Button } from 'primereact/button';
import FamilyFormMobile from './FamilyFormMobile';

const AdditionalInfoSection = () => {
  const [data, setData] = useState({});
  const [familyData, setFamilyData] = useState([]);

  const optionMap = {
    gender,
    marital_status,
    marriage_type,
    number_of_dependents,
    last_education,
    home_ownership_status,
    length_of_residence,
  };

  const handleFormDataUpdate = (formData) => {
    setData((prevData) => ({ ...prevData, ...formData }));
  };

  const handleFamilyDataUpdate = (newFamilyData) => {
    setFamilyData(newFamilyData);
  };

  const handleSubmit = () => {
    const combinedData = { ...data, familyData };
    console.log('Final Data:', combinedData);
  };

  return (
    <>
      <div className='w-full  bg-white h-full mb-4 text-black rounded-md'>
        <LoanFormCustom
          fields={additionalInfoField.slice(0, 10)}
          optionsMap={optionMap}
          gridClass='grid grid-cols-1 xs:grid-cols-[30%_70%] space-x-0 xs:space-x-2'
          onSubmit={handleFormDataUpdate}
        />
        <FamilyFormMobile onSubmit={handleFamilyDataUpdate} />
        <LoanFormCustom
          fields={additionalInfoField.slice(10, 18)}
          optionsMap={optionMap}
          gridClass='grid grid-cols-1 '
          onSubmit={handleFormDataUpdate}
        />
        <div className='flex items-center justify-end space-x-1 px-6 pb-6'>
          <Button
            onClick={handleSubmit}
            label='Save'
            icon='pi pi-save'
            size='small'
            className=' p-2.5 bg-[#1cabe6] text-white'
          />
        </div>
      </div>
    </>
  );
};

export default AdditionalInfoSection;
