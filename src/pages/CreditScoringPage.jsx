import React from 'react';
import NavPage from '../components/layouts/NavPage';
import { Outlet } from 'react-router-dom';
import { creditScoringLink } from '../utils/link';

const CreditScoringPage = () => {
  return (
    <>
      <NavPage
        links={creditScoringLink}
        entityName="Credit Scoring"
        subName="Credit Scoring"
      />
      <Outlet />
    </>
  );
};

export default CreditScoringPage;
