import { Button } from 'primereact/button';
import PropTypes from 'prop-types';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';

const LoanFormCustom = ({ fields, optionsMap }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='p-3 py-6 md:p-6 '>
        {fields.map(({ label, value, type, placeholder }, index) => (
          <div
            key={index}
            className='grid grid-cols-1 xs:grid-cols-[30%_70%] items-center mb-3 xs:mb-6 space-x-0 xs:space-x-2'
          >
            <div className=' font-bold'>{label}</div>
            <div className='mt-1 xs:mt-0'>
              {(type === 'text' || type === 'number') && (
                <InputText
                  placeholder={`--${placeholder}--`}
                  className='w-full border-[1px] p-[11px]'
                  type={type}
                  onChange={(e) => handleChange(value, e.target.value)}
                  value={formData[value] || ''}
                />
              )}

              {type === 'textarea' && (
                <InputTextarea
                  value={formData[value]}
                  rows={5}
                  cols={30}
                  placeholder={`--${placeholder}--`}
                  className='w-full border-[1px] p-3'
                  onChange={(e) => handleChange(value, e.target.value)}
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
                      : `--Pilih ${placeholder}--`
                  }
                  className='w-full bg-white border-[1px] focus-none'
                  onChange={(e) => handleChange(value, e.value)}
                />
              )}
            </div>
          </div>
        ))}
        <div className='mt-10 mb-5 flex justify-end px-3 lg:px-6'>
          <Button
            label='Save'
            icon='pi pi-save'
            size='small'
            className=' p-2.5 bg-[#1cabe6] text-white'
          />
        </div>
      </form>
    </>
  );
};

LoanFormCustom.propTypes = {
  fields: PropTypes.array.isRequired,
  optionsMap: PropTypes.object.isRequired,
};

export default LoanFormCustom;
