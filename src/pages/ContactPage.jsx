import React from 'react';
import { Outlet } from 'react-router-dom';
import { contactLink } from '../utils/link';
import NavPage from '../components/layouts/NavPage';

const ContactPage = () => {
  return (
    <>
      <NavPage links={contactLink} entityName='Contact' subName='Contact' />
      <Outlet />
    </>
  );
};

export default ContactPage;
