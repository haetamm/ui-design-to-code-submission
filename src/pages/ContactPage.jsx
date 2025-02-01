import React from 'react';
import { Outlet } from 'react-router-dom';
import { contactLink } from '../utils/navLink';
import { urlPage } from '../utils/constans';
import NavPage from '../components/layouts/NavPage';

const ContactPage = () => {
  return (
    <>
      <NavPage
        links={contactLink}
        basePath={urlPage.CONTACT_ME}
        entityName='Contact'
      />
      <Outlet />
    </>
  );
};

export default ContactPage;
