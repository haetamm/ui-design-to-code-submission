import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { contactField } from '../../../utils/fieldInput';
import {
  category_option as category,
  contact_type_option as contact_type,
  employment_type_option as employment_type,
  gender_option as gender,
} from '../../../utils/selectOption';

const FormContact = ({ data, onSubmit, setData }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  const optionsMap = {
    contact_type,
    gender,
    employment_type,
    category,
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-white px-3 py-4 xs:p-6 md:p-8 rounded-md'
    >
      {contactField.map(({ label, value, type }, index) => (
        <div
          key={index}
          className='inline-block xs:flex w-full items-center mb-3 xs:mb-6 space-x-0 xs:space-x-2'
        >
          <div className='w-full xs:w-[20%] font-bold'>{label}</div>
          <div className='w-full xs:w-[80%] mt-1 xs:mt-0'>
            {type !== 'select' && type !== 'date' && (
              <InputText
                placeholder={`--Isi ${label}--`}
                className='w-full border-[1px] py-2 px-2'
                type={type}
                onChange={(e) => handleChange(value, e.target.value)}
                value={formData[value] || ''}
              />
            )}

            {type === 'select' && optionsMap[value] && (
              <Dropdown
                value={formData[value] || null}
                options={optionsMap[value]}
                optionLabel='name'
                optionValue='value'
                placeholder={
                  formData[value]
                    ? optionsMap[value].find(
                        (opt) => opt.value === formData[value]
                      )?.name
                    : `--Pilih ${label}--`
                }
                className='w-full bg-white border-[1px] focus-none'
                onChange={(e) => handleChange(value, e.value)}
              />
            )}

            {type === 'date' && (
              <Calendar
                showIcon
                placeholder='dd/mm/yyyy'
                className='w-full border-[1px] h-[44px] px-1 mt-1.5 rounded-md'
                value={formData[value] || null}
                onChange={(e) => handleChange(value, e.value)}
              />
            )}
          </div>
        </div>
      ))}
      <div className='hidden md:flex items-center justify-end space-x-1 mt-auto'>
        <Button
          label={data ? 'Update' : 'Simpan'}
          icon='pi pi-save'
          size='large'
          className={`${data ? 'bg-[#0c2f3e]' : 'bg-[#1cabe6]'} w-[180px] py-1.5 px-3  text-white`}
          type='submit'
        />
      </div>
    </form>
  );
};

FormContact.propTypes = {
  data: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
};

export default FormContact;
