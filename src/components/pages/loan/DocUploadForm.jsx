import React, { useState } from 'react';

import { Accordion, AccordionTab } from 'primereact/accordion';
import { BsUpload } from 'react-icons/bs';
import { uploadDocField } from '../../../utils/fieldInput';
import { Button } from 'primereact/button';

const DocUploadForm = () => {
  const [uploadedFiles, setUploadedFiles] = useState({});

  const handleFileChange = (category, fieldLabel, files) => {
    const fileNames = files.map((file) => file.name).join(', ');
    setUploadedFiles((prevState) => {
      const updatedCategory = {
        ...prevState[category],
        [fieldLabel]: fileNames,
      };
      return { ...prevState, [category]: updatedCategory };
    });
  };

  const categoryHeaders = {
    personal_data: 'Data Pribadi',
    warranty_data: 'Data Jaminan',
    financial_data: 'Data Keuangan',
    additional_data: 'Data Tambahan',
  };

  const handleUploadAll = () => {
    console.log('Files to upload:', uploadedFiles);
  };

  const groupedFields = uploadDocField.reduce((acc, field) => {
    if (!acc[field.category]) {
      acc[field.category] = [];
    }
    acc[field.category].push(field);
    return acc;
  }, {});

  return (
    <>
      <div className='bg-white p-1 lg:p-6 h-full mb-4 text-black rounded-md'>
        {Object.entries(groupedFields).map(
          ([category, fields], categoryIndex) => (
            <Accordion key={categoryIndex} activeIndex={0}>
              <AccordionTab header={categoryHeaders[category] || category}>
                {fields.map(({ label, description }, index) => (
                  <div key={index} className='m-0 text-black mb-4'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-3 items-center'>
                      <div className='font-normal'>{label}</div>
                      <div className='relative w-full mx-auto'>
                        <label
                          htmlFor={`fileInput-${categoryIndex}-${index}`}
                          className='flex items-center  justify-between w-full px-4 py-2 text-gray-500 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100'
                        >
                          <span className='line-clamp-1 text-sm'>
                            {uploadedFiles[category]?.[label] ||
                              `--${description}--`}
                          </span>
                          <BsUpload className='w-5 h-5 text-gray-500 shrink-0' />
                        </label>
                        <input
                          id={`fileInput-${categoryIndex}-${index}`}
                          type='file'
                          className='hidden'
                          multiple
                          onChange={(e) =>
                            handleFileChange(
                              category,
                              label,
                              Array.from(e.target.files)
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </AccordionTab>
            </Accordion>
          )
        )}
        <div className='mt-5 flex justify-end px-3 lg:px-6'>
          <Button
            onClick={handleUploadAll}
            label='Save'
            icon='pi pi-save'
            size='small'
            className=' py-2.5 px-5 bg-[#0c2f3e] text-white text-md'
          />
        </div>
      </div>
    </>
  );
};

export default DocUploadForm;
