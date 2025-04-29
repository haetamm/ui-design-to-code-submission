import { Button } from 'primereact/button';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const CardHeaderApplication = ({ name, link }) => {
  return (
    <>
      <div className="bg-[#12265b] w-full px-4 py-3 rounded-t-md">
        <div className="flex justify-between items-center">
          <p className="w-full text-lg font-bold text-white">{name}</p>
          <Link to={link}>
            <Button
              label={`${name}`}
              icon="pi pi-plus"
              size="large"
              className="xs:w-[200px] p-2.5 bg-white text-black "
            />
          </Link>
        </div>
      </div>
    </>
  );
};
CardHeaderApplication.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
export default CardHeaderApplication;
