import PropTypes from 'prop-types';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { Calendar } from 'primereact/calendar';

const LoanFormCustom = ({ fields, optionsMap, gridClass, onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (field, value) => {
    setFormData((prev) => {
      const updatedFormData = { ...prev, [field]: value };
      if (onSubmit) {
        onSubmit(updatedFormData);
      }
      return updatedFormData;
    });
  };

  return (
    <>
      <form className='px-3 pt-3 md:px-6 md:pt-6 '>
        {fields.map(({ label, value, type, placeholder }, index) => (
          <div
            key={index}
            className={` ${gridClass} mb-3 xs:mb-6  items-center `}
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

              {type === 'date' && (
                <Calendar
                  showIcon
                  placeholder='dd/mm/yyyy'
                  className='w-full border-[1px] h-[48px] px-1.5 rounded-md'
                  value={formData[value] || null}
                  onChange={(e) => handleChange(value, e.value)}
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
                  placeholder={`--Pilih ${placeholder}--`}
                  className='w-full bg-white border-[1px] focus-none'
                  onChange={(e) => handleChange(value, e.value)}
                />
              )}
            </div>
          </div>
        ))}
      </form>
    </>
  );
};

LoanFormCustom.propTypes = {
  fields: PropTypes.array.isRequired,
  optionsMap: PropTypes.object.isRequired,
  gridClass: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default LoanFormCustom;
