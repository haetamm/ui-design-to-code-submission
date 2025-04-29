import PropTypes from 'prop-types';
import React from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import { productBankField } from '../../../utils/fieldInput';
import {
  target_market_option as target_market,
  bank_option as bank_name,
  guarantee_option as guarantee,
  product_type_option as product_type,
} from '../../../utils/selectOption';
import { Calendar } from 'primereact/calendar';
import { InputNumber } from 'primereact/inputnumber';
import { Controller } from 'react-hook-form';
import { Button } from 'primereact/button';

const FormProductBank = ({ control, errors, id }) => {
  const optionsMap = {
    bank_name,
    product_type,
    target_market,
    guarantee,
  };

  return (
    <div className="bg-white p-3 md:p-8 rounded-md">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-14">
        <div>
          {productBankField.slice(0, 8).map(({ label, value, type }, index) => (
            <div key={index} className="mb-4">
              {type !== 'date' && <p className="font-bold">{label}</p>}
              <Controller
                name={value}
                control={control}
                render={({ field }) => (
                  <>
                    {type === 'select' && (
                      <Dropdown
                        value={field.value || null}
                        options={optionsMap[value] || []}
                        optionLabel="name"
                        placeholder={`--Pilih ${label}--`}
                        className="w-full bg-white border-[1px] h-[48px] focus-none"
                        onChange={(e) => field.onChange(e.value)}
                        onBlur={field.onBlur}
                      />
                    )}

                    {type === 'date' && (
                      <div className="mb-2">
                        <div className="flex space-x-2 mt-3 items-center">
                          <input
                            type="checkbox"
                            className="checkbox-custome h-5 w-5 cursor-pointer"
                            checked={!!field.value}
                            onChange={(e) =>
                              field.onChange(
                                e.target.checked
                                  ? [new Date(), new Date()]
                                  : null
                              )
                            }
                          />
                          <p className="font-bold">{label}</p>
                        </div>
                        <Calendar
                          disabled={!field.value}
                          value={field.value}
                          onChange={(e) => field.onChange(e.value)}
                          showIcon
                          selectionMode="range"
                          className="w-full bg-gray-200 border-[1px] h-[48px] px-1.5 mt-1.5 rounded-md"
                        />
                      </div>
                    )}

                    {type === 'checkbox' && (
                      <div className="grid grid-cols-2">
                        {optionsMap[value].map((item, index) => (
                          <div
                            key={index}
                            className="flex space-x-2 mt-3 items-center"
                          >
                            <input
                              type="checkbox"
                              checked={field.value?.includes(item) || false}
                              onChange={(e) => {
                                const updatedValues = new Set(
                                  field.value || []
                                );
                                if (e.target.checked) {
                                  updatedValues.add(item);
                                } else {
                                  updatedValues.delete(item);
                                }
                                field.onChange([...updatedValues]);
                              }}
                              className="checkbox-custome h-5 w-5 cursor-pointer shrink-0"
                            />
                            <p>{item}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {type === 'number' && (
                      <InputNumber
                        inputId="horizontal-buttons"
                        value={field.value || null}
                        onValueChange={(e) => field.onChange(e.value)}
                        showButtons
                        buttonLayout="horizontal"
                        step={0.1}
                        decrementButtonClassName="bg-[#1cabe6] text-white"
                        incrementButtonClassName="bg-[#1cabe6] text-white"
                        incrementButtonIcon="pi pi-plus"
                        decrementButtonIcon="pi pi-minus"
                        prefix="%"
                        min={0}
                        className="w-full"
                        inputClassName="h-[48px] text-center border-[1px] w-full"
                      />
                    )}

                    {errors[value] && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors[value].message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col mt-1 md:mt-0">
          <div>
            {productBankField
              .slice(8, 16)
              .map(({ label, value, type }, index) => (
                <div key={index} className="mb-4">
                  <p className="font-bold">{label}</p>
                  <Controller
                    name={value}
                    control={control}
                    render={({ field }) => (
                      <>
                        {type === 'number' && (
                          <InputNumber
                            inputId="horizontal-buttons"
                            value={field.value || null}
                            onValueChange={(e) => field.onChange(e.value)}
                            showButtons
                            buttonLayout="horizontal"
                            step={0.1}
                            decrementButtonClassName="bg-[#1cabe6] text-white"
                            incrementButtonClassName="bg-[#1cabe6] text-white"
                            incrementButtonIcon="pi pi-plus"
                            decrementButtonIcon="pi pi-minus"
                            prefix="%"
                            min={0}
                            className="w-full"
                            inputClassName="h-[48px] text-center border-[1px] w-full"
                          />
                        )}

                        {type === 'textarea' && (
                          <InputTextarea
                            value={field.value || ''}
                            rows={5}
                            cols={30}
                            className="w-full border-[1px] px-2"
                            onChange={(e) => field.onChange(e.target.value)}
                            onBlur={field.onBlur}
                          />
                        )}

                        {type === 'text' && (
                          <InputText
                            value={field.value || ''}
                            className="w-full border-[1px] p-[11px]"
                            onChange={(e) => field.onChange(e.target.value)}
                            onBlur={field.onBlur}
                          />
                        )}

                        {errors[value] && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors[value].message}
                          </p>
                        )}
                      </>
                    )}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-end space-x-1 mt-10 mb-5">
        <Button
          label={`${id ? 'Update' : 'Tambah Produk'}`}
          type="submit"
          icon="pi pi-save"
          size="large"
          className={`${id ? 'bg-[#0c2f3e]' : 'bg-[#1cabe6]'} p-2.5  text-white`}
        />
      </div>
    </div>
  );
};

FormProductBank.propTypes = {
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  id: PropTypes.string,
};

export default FormProductBank;
