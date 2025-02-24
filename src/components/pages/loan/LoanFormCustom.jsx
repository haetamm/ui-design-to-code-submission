import PropTypes from 'prop-types';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import React from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { Calendar } from 'primereact/calendar';
import { Controller } from 'react-hook-form';

const LoanFormCustom = ({ fields, optionsMap, gridClass, control, errors }) => {
  return (
    <div className='px-3 pt-3 md:px-6 md:pt-6'>
      {fields.map(({ label, value, type, placeholder }, index) => (
        <div key={index} className={`${gridClass} mb-3 xs:mb-6 items-center`}>
          <div className='font-bold'>{label}</div>
          <div className='mt-1 xs:mt-0'>
            <Controller
              name={value}
              control={control}
              render={({ field }) => (
                <>
                  {(type === 'text' ||
                    type === 'number' ||
                    type === 'email') && (
                    <InputText
                      {...field}
                      placeholder={placeholder}
                      className='w-full border-[1px] p-[11px]'
                      type={type}
                      value={field.value || ''}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  )}
                  {type === 'date' && (
                    <Calendar
                      {...field}
                      showIcon
                      placeholder='dd/mm/yyyy'
                      className='w-full border-[1px] h-[48px] px-1.5 rounded-md'
                      value={field.value || null}
                      onChange={(e) => field.onChange(e.value)}
                    />
                  )}
                  {type === 'textarea' && (
                    <InputTextarea
                      {...field}
                      rows={5}
                      cols={30}
                      placeholder={placeholder}
                      className='w-full border-[1px] p-3'
                      value={field.value || ''}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  )}
                  {type === 'select' && optionsMap[value] && (
                    <Dropdown
                      {...field}
                      options={optionsMap[value]}
                      optionLabel='name'
                      optionValue='value'
                      placeholder={placeholder}
                      className='w-full bg-white border-[1px]'
                      value={field.value || null}
                      onChange={(e) => field.onChange(e.value)}
                    />
                  )}
                </>
              )}
            />
            {errors[value] && (
              <span className='text-red-500 text-sm'>
                {errors[value].message}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

LoanFormCustom.propTypes = {
  fields: PropTypes.array.isRequired,
  optionsMap: PropTypes.object.isRequired,
  gridClass: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

export default LoanFormCustom;
