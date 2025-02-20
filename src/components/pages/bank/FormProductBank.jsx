import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { productBankField } from '../../../utils/fieldInput';
import {
  target_market_option as target_market,
  bank_option as bank_name,
  guarantee_option as guarantee,
  product_type_option as product_type,
} from '../../../utils/selectOption';
import { Calendar } from 'primereact/calendar';

const FormProductBank = ({ data, onSubmit, setData }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  const optionsMap = {
    bank_name,
    product_type,
    target_market,
    guarantee,
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='bg-white p-3 md:p-8 rounded-md'>
        <div className='grid gird-cols-1 lg:grid-cols-2 gap-0 lg:gap-14'>
          <div>
            {productBankField
              .slice(0, 8)
              .map(({ label, value, type }, index) => (
                <div key={index} className='mb-2'>
                  {type !== 'date' && <p className='font-bold mb-2'>{label}</p>}

                  {type === 'select' && (
                    <Dropdown
                      value={formData[value] || null}
                      onChange={(e) => handleChange(value, e.value)}
                      options={optionsMap[value] || []}
                      optionLabel='name'
                      className='w-full bg-white border-[1px] focus-none'
                    />
                  )}

                  {type === 'date' && (
                    <div className='mb-2'>
                      <div className='flex space-x-2 mt-3 items-center'>
                        <input
                          type='checkbox'
                          className='checkbox-custome h-5 w-5 cursor-pointer'
                          checked={!!formData[value]}
                          onChange={(e) => {
                            if (e.target.checked) {
                              handleChange(value, [new Date(), new Date()]);
                            } else {
                              handleChange(value, null);
                            }
                          }}
                        />
                        <p className='font-bold'>{label}</p>
                      </div>
                      <Calendar
                        disabled={!formData[value]}
                        value={formData[value]}
                        onChange={(e) => handleChange(value, e.value)}
                        showIcon
                        selectionMode='range'
                        className='w-full bg-gray-200 border-[1px] h-[44px] px-1 mt-1.5 rounded-md'
                      />
                    </div>
                  )}

                  {type === 'checkbox' && (
                    <div className='grid grid-cols-1 xs:grid-cols-2'>
                      {optionsMap[value].map((item, index) => (
                        <div
                          key={index}
                          className='flex space-x-2 mt-3 items-center'
                        >
                          <input
                            type='checkbox'
                            checked={formData[value]?.includes(item) || false}
                            onChange={(e) => {
                              const updatedValues = new Set(
                                formData[value] || []
                              );
                              if (e.target.checked) {
                                updatedValues.add(item);
                              } else {
                                updatedValues.delete(item);
                              }
                              handleChange(value, [...updatedValues]);
                            }}
                            className='checkbox-custome h-5 w-5 cursor-pointer'
                          />
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {type === 'number' && (
                    <div className='flex items-center border-slate-300 border-[1px] text-white rounded-md'>
                      <span className='cursor-pointer rounded-l py-[13px] px-3.5 duration-100 hover:text-blue-50 bg-[#1cabe6]'>
                        -
                      </span>
                      <input
                        type={type}
                        value={value ? formData[value] : 0}
                        onChange={(e) => handleChange(value, e.target.value)}
                        className='h-8 w-full border bg-white text-black text-center text-xs outline-none border-none'
                        autoFocus={false}
                      />
                      <span className='cursor-pointer rounded-r py-[13px] px-3.5 duration-100 hover:text-blue-50 bg-[#1cabe6]'>
                        +
                      </span>
                    </div>
                  )}
                </div>
              ))}
          </div>

          <div className='flex flex-col mt-1'>
            <div>
              {productBankField
                .slice(8, 16)
                .map(({ label, value, type }, index) => (
                  <div key={index} className='mb-2'>
                    <p className='font-bold mb-2'>{label}</p>

                    {type === 'number' && (
                      <div className='flex items-center border-slate-300 border-[1px] text-white rounded-md'>
                        <span className='cursor-pointer rounded-l py-[13px] px-3.5 duration-100 hover:text-blue-50 bg-[#1cabe6]'>
                          -
                        </span>
                        <input
                          type={type}
                          value={value ? formData[value] : 0}
                          onChange={(e) => handleChange(value, e.target.value)}
                          className='h-8 w-full border bg-white text-black text-center text-xs outline-none border-none'
                          autoFocus={false}
                        />
                        <span className='cursor-pointer rounded-r py-[13px] px-3.5 duration-100 hover:text-blue-50 bg-[#1cabe6]'>
                          +
                        </span>
                      </div>
                    )}

                    {type === 'textarea' && (
                      <InputTextarea
                        value={formData[value]}
                        rows={5}
                        cols={30}
                        className='w-full border-[1px] px-2'
                        onChange={(e) => handleChange(value, e.target.value)}
                      />
                    )}

                    {type === 'text' && (
                      <InputText
                        value={formData[value]}
                        className='w-full border-[1px] py-3 px-2'
                        onChange={(e) => handleChange(value, e.target.value)}
                      />
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className='hidden md:flex items-center justify-end space-x-1 mt-auto'>
          <Button
            label={`${data ? 'Update' : 'Tambah Produk'}`}
            type='submit'
            icon='pi pi-save'
            size='large'
            className='w-[180px] py-1.5 px-3 bg-[#0c2f3e] text-white cursor-not-allowed'
          />
        </div>
      </form>
    </>
  );
};

FormProductBank.propTypes = {
  data: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
};
export default FormProductBank;
