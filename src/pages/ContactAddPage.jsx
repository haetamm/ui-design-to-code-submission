import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';
import {
  category,
  contact_type,
  contactField,
  employment_type,
  gender,
} from '../utils/fieldInput';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';

const ContactAddPage = () => {
  const [date, setDate] = useState(null);
  const optionsMap = {
    contact_type,
    gender,
    employment_type,
    category,
  };

  return (
    <>
      <div className='mb-14 mt-[68px] md:mb-0'>
        <div className='px-3  md:px-3 lg:px-4 xl:px-6 py-4 w-full'>
          <div className='bg-white px-3 py-4 xs:p-6 md:p-8 rounded-md'>
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
                    />
                  )}

                  {type === 'select' && optionsMap[value] && (
                    <Dropdown
                      options={optionsMap[value]}
                      optionLabel='name'
                      optionValue='value'
                      placeholder={`--Pilih ${label}--`}
                      className='w-full bg-white border-[1px] focus-none'
                    />
                  )}

                  {type === 'date' && (
                    <Calendar
                      value={date}
                      showIcon
                      selectionMode='range'
                      className='w-full border-[1px] h-[44px] px-1 mt-1.5 rounded-md'
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactAddPage;
