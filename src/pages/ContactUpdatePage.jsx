import React, { useState } from 'react';
import FormContact from '../components/pages/contact/FormContact';
import { Button } from 'primereact/button';
import { useParams } from 'react-router-dom';
import { dataContact } from '../utils/data';
import DataNotFound from '../components/pages/DataNotFound';
import ButtonBottom from '../components/layouts/ButtonBottom';

const ContactUpdatePage = () => {
  const { id } = useParams();
  const contact = dataContact.find((item) => item.id === parseInt(id));
  const [data, setData] = useState(contact || {});

  if (!contact) return <DataNotFound />;

  const handleSubmit = (data) => {
    setData(data);
    console.log('Form Data:', data);
  };

  return (
    <>
      <div className='mb-14 mt-[68px] md:mb-0'>
        <div className='px-3  md:px-3 lg:px-4 xl:px-6 py-4 w-full'>
          <FormContact
            data={contact}
            onSubmit={handleSubmit}
            setData={setData}
          />
        </div>
      </div>
      <ButtonBottom>
        <Button
          onClick={() => handleSubmit(data)}
          label='Update'
          icon='pi pi-save'
          size='large'
          className=' w-full p-3 bg-[#0c2f3e] text-white'
        />
      </ButtonBottom>
    </>
  );
};

export default ContactUpdatePage;
