import React from 'react';
import { Button } from 'primereact/button';
import ButtonBottom from '../components/layouts/ButtonBottom';
import CardDetail from '../components/pages/CardDetail';
import { Link, useParams } from 'react-router-dom';
import { dataContact } from '../utils/data';
import DataNotFound from '../components/pages/DataNotFound';
import { contactField } from '../utils/fieldInput';
import { urlPage } from '../utils/constans';
import { Helmet } from 'react-helmet-async';

const ContactByIdPage = () => {
  const { id } = useParams();
  const data = dataContact.find((item) => item.id === parseInt(id));

  if (!data) return <DataNotFound msg="Contact not found!!" />;

  return (
    <>
      <Helmet>
        <title>{data.name} | Loan Market</title>
        <meta name="description" content="Contact Detail page" />
      </Helmet>
      <div className="mb-14 mt-[68px] md:mb-0">
        <div className="px-3  md:px-3 lg:px-4 xl:px-6 py-4 w-full">
          <CardDetail data={data} fields={contactField} />
        </div>
      </div>
      <ButtonBottom>
        <Link to={`${urlPage.CONTACT_ME}/${id}/update`} className="w-full">
          <Button
            label="Edit Contact"
            icon="pi pi-save"
            size="large"
            className=" w-full p-2.5 bg-[#0c2f3e] text-white"
          />
        </Link>
      </ButtonBottom>
    </>
  );
};

export default ContactByIdPage;
