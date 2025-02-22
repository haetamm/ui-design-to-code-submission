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
import NumberInputCustom from './NumberInputCustom';

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
                <div key={index} className='mb-4'>
                  {type !== 'date' && <p className='font-bold '>{label}</p>}

                  {type === 'select' && (
                    <Dropdown
                      value={formData[value] || null}
                      options={optionsMap[value] || []}
                      optionLabel='name'
                      placeholder={
                        formData[value]
                          ? optionsMap[value].find(
                              (opt) => opt.value === formData[value]
                            )?.name
                          : `--Pilih ${label}--`
                      }
                      className='w-full bg-white border-[1px] h-[48px] focus-none'
                      onChange={(e) => handleChange(value, e.value)}
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
                        className='w-full bg-gray-200 border-[1px] h-[48px] px-1.5 mt-1.5 rounded-md'
                      />
                    </div>
                  )}

                  {type === 'checkbox' && (
                    <div className='grid grid-cols-2'>
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
                    <NumberInputCustom
                      type={type}
                      value={formData[value]}
                      onChange={(newValue) => handleChange(value, newValue)}
                    />
                  )}
                </div>
              ))}
          </div>

          <div className='flex flex-col mt-1 md:mt-0'>
            <div>
              {productBankField
                .slice(8, 16)
                .map(({ label, value, type }, index) => (
                  <div key={index} className='mb-4'>
                    <p className='font-bold'>{label}</p>

                    {type === 'number' && (
                      <NumberInputCustom
                        type={type}
                        value={formData[value]}
                        onChange={(newValue) => handleChange(value, newValue)}
                      />
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
                        className='w-full border-[1px] p-[11px]'
                        onChange={(e) => handleChange(value, e.target.value)}
                      />
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className='hidden md:flex items-center justify-end space-x-1 mt-10 mb-5'>
          <Button
            label={`${data ? 'Update' : 'Tambah Produk'}`}
            type='submit'
            icon='pi pi-save'
            size='large'
            className={`${data ? 'bg-[#0c2f3e]' : 'bg-[#1cabe6]'} p-2.5  text-white`}
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
