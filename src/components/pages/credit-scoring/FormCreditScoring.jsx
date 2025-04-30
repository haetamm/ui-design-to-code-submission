import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';

const FormCreditScoring = ({ control, errors, fields, optionsMap }) => {
  return (
    <>
      <div className="bg-white px-3 py-6 md:p-6 rounded-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-14">
          <div>
            {fields.slice(0, 2).map(({ label, value, type }, index) => (
              <div key={index} className="mb-4">
                <p className="font-bold">{label}</p>
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
                          <Calendar
                            value={field.value}
                            placeholder="dd/mm/yyyy"
                            onChange={(e) => field.onChange(e.value)}
                            showIcon
                            className="w-full bg-gray-200 border-[1px] h-[48px] px-1.5 rounded-md"
                          />
                        </div>
                      )}

                      {type === 'text' && (
                        <InputText
                          value={field.value || ''}
                          placeholder={`--Input ${label}--`}
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

          <div className="flex flex-col mt-1 md:mt-0">
            <div>
              {fields.slice(2, 4).map(({ label, value, type }, index) => (
                <div key={index} className="mb-4">
                  <p className="font-bold">{label}</p>
                  <Controller
                    name={value}
                    control={control}
                    render={({ field }) => (
                      <>
                        {type === 'text' && (
                          <InputText
                            value={field.value || ''}
                            placeholder={`--Input ${label}--`}
                            className="w-full border-[1px] p-[11px]"
                            onChange={(e) => field.onChange(e.target.value)}
                            onBlur={field.onBlur}
                          />
                        )}

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
        <div className="mt-2 inline space-x-0 xs:flex justify-end xs:space-x-3 w-full">
          <Button
            label="Request"
            icon="pi pi-search"
            size="large"
            className="bg-[#1cabe6] p-2.5 text-white w-full xs:w-[120px]"
            type="submit"
          />
          <Button
            label="Import Contact"
            icon="pi pi-file-import"
            size="large"
            className="bg-[#0c2f3e] mt-2 p-2.5 text-white w-full xs:mt-0 xs:w-[170px]"
            type="button"
          />
        </div>
      </div>
    </>
  );
};

FormCreditScoring.propTypes = {
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  fields: PropTypes.array.isRequired,
  optionsMap: PropTypes.object.isRequired,
};

export default FormCreditScoring;
