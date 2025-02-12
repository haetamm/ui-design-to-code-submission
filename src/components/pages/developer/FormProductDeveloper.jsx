import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { detailDeveloperField } from '../../../utils/fieldInput';

const FormProductDeveloper = ({ product, onUpdate }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  const handleChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
    console.log('Data yang dikirim:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className='bg-white p-3 md:p-8 rounded-md'>
      {detailDeveloperField.map(({ label, value }, index) => (
        <div key={index} className='mb-3.5'>
          <p className='font-bold'>{label}</p>
          <InputText
            className='w-full border-[1px] py-3 px-2'
            value={formData[value] || ''}
            onChange={(e) => handleChange(e, value)}
          />
        </div>
      ))}

      <div className='hidden md:flex items-center justify-end space-x-1 mt-auto'>
        <Button
          type='submit'
          label='Update'
          icon='pi pi-save'
          size='large'
          className='w-[180px] py-1.5 px-3 bg-[#0c2f3e] text-white cursor-pointer'
        />
      </div>
    </form>
  );
};

FormProductDeveloper.propTypes = {
  id: PropTypes.string,
  product: PropTypes.object,
  onUpdate: PropTypes.func,
};

export default FormProductDeveloper;
