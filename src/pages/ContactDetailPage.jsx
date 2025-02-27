import React from 'react';
import { dataApplication, dataContact } from '../utils/data';
import { useParams } from 'react-router-dom';
import DataNotFound from '../components/pages/DataNotFound';
import CardDetailContact from '../components/pages/contact/CardDetailContact';
import CardApplication from '../components/pages/contact/CardApplication';
import CardNotes from '../components/pages/contact/CardNotes';
import { Helmet } from 'react-helmet-async';

const ContactDetailPage = () => {
  const { id } = useParams();
  const data = dataContact.find((item) => item.id === parseInt(id));
  const application = dataApplication.filter((app) => app.userId === data?.id);

  if (!data) return <DataNotFound msg='Contact not found!!' />;

  return (
    <>
      <Helmet>
        <title>{data.name}| Loan Market</title>
        <meta name='description' content='Contact Detail page' />
      </Helmet>
      <div className='mt-[68px] mb-2'>
        <div className='py-1'>
          <div className='p-3 xl:px-6 grid grid-cols-1 lg:grid-cols-[40%_60%] lg:space-x-3 xl:space-x-4'>
            <CardDetailContact data={data} />
            <CardApplication application={application} name={data.name} />
          </div>
          <div className='px-3 pt-0 py-3 xl:px-6 w-full'>
            <CardNotes />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetailPage;
