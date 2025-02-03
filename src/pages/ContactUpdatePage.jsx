import React, { useState } from 'react';
import FormContact from '../components/pages/contact/FormContact';
import ButtomBottom from '../components/pages/bank/ButtomBottom';
import { Button } from 'primereact/button';
import { useParams } from 'react-router-dom';
import { dataContact } from '../utils/data';
import DataNotFound from '../components/pages/DataNotFound';

const ContactUpdatePage = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({});
  const contact = dataContact.find((item) => item.id === parseInt(id));

  if (!contact) return <DataNotFound />;

  const handleSubmit = () => {
    console.log('Form Data:', formData);
  };

  return (
    <>
      <div className='mb-14 mt-[68px] md:mb-0'>
        <div className='px-3  md:px-3 lg:px-4 xl:px-6 py-4 w-full'>
          <FormContact data={contact} onSubmit={setFormData} />
        </div>
      </div>
      <ButtomBottom>
        <Button
          onClick={handleSubmit}
          label='Update'
          icon='pi pi-save'
          size='large'
          className=' w-full p-3 bg-[#0c2f3e] text-white'
        />
      </ButtomBottom>
    </>
  );
};

export default ContactUpdatePage;
