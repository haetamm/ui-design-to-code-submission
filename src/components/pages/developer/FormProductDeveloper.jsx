import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { detailDeveloperField } from '../../../utils/fieldInput';

const FormProductDeveloper = ({ data, onSubmit, setData }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className='bg-white p-3 md:p-8 rounded-md'>
      {detailDeveloperField.map(({ label, value }, index) => (
        <div key={index} className='mb-3.5'>
          <p className='font-bold'>{label}</p>
          <InputText
            className='w-full border-[1px] py-3 px-2'
            value={formData[value] || ''}
            onChange={(e) => handleChange(value, e.target.value)}
          />
        </div>
      ))}

      <div className='hidden md:flex items-center justify-end space-x-1 mt-10'>
        <Button
          type='submit'
          label='Update'
          icon='pi pi-save'
          size='large'
          className='w-[180px] p-3 bg-[#0c2f3e] text-white cursor-pointer'
        />
      </div>
    </form>
  );
};

FormProductDeveloper.propTypes = {
  data: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
};

export default FormProductDeveloper;
