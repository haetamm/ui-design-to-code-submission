import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { uploadDocField } from '../../../utils/fieldInput';
import { uploadDocSchema } from '../../../utils/validation';
import InputFileCustom from '../../layouts/InputFileCustom';

const DocUploadForm = () => {
  const [uploadedFiles, setUploadedFiles] = useState({});

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(uploadDocSchema),
    mode: 'onChange',
  });

  const categoryHeaders = {
    personal_data: 'Data Pribadi',
    warranty_data: 'Data Jaminan',
    financial_data: 'Data Keuangan',
    additional_data: 'Data Tambahan',
  };

  const onSubmit = (data) => {
    console.log('FormData Submitted:', data);
  };

  const groupedFields = uploadDocField.reduce((acc, field) => {
    if (!acc[field.category]) {
      acc[field.category] = [];
    }
    acc[field.category].push(field);
    return acc;
  }, {});

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-1 lg:p-6 h-full mb-4 text-black rounded-md"
    >
      {Object.entries(groupedFields).map(
        ([category, fields], categoryIndex) => (
          <Accordion key={categoryIndex} activeIndex={0}>
            <AccordionTab header={categoryHeaders[category] || category}>
              {fields.map(({ label, placeholder, value: fieldName }, index) => (
                <div key={index} className="m-0 text-black">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-3 items-center">
                    <div className="font-normal">{label}</div>
                    <div className="relative w-full mx-auto mb-4">
                      <Controller
                        name={fieldName}
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <InputFileCustom
                            id={`fileInput-${categoryIndex}-${index}`}
                            name={fieldName}
                            onChange={(e) => {
                              const file = e.target.files[0];
                              if (file) {
                                onChange(file);
                                setUploadedFiles((prev) => ({
                                  ...prev,
                                  [category]: {
                                    ...prev[category],
                                    [label]: file.name,
                                  },
                                }));
                              }
                            }}
                            value={value}
                            uploadedFiles={uploadedFiles}
                            category={category}
                            label={label}
                            placeholder={placeholder}
                            error={errors[fieldName]}
                          />
                        )}
                      />
                      {errors[fieldName] && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors[fieldName].message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </AccordionTab>
          </Accordion>
        )
      )}
      <div className="my-5 flex justify-end px-3 lg:px-6">
        <Button
          type="submit"
          label="Save"
          icon="pi pi-save"
          size="large"
          className="p-2.5 bg-[#1cabe6] text-white"
        />
      </div>
    </form>
  );
};

export default DocUploadForm;
