import React from 'react';
import PropTypes from 'prop-types';

const DataNotFound = ({ msg }) => {
  return (
    <>
      <div className=" text-2xl font-bold flex h-[calc(100vh-60px)] items-center justify-center">
        {msg ? msg : 'Product not found!'}
      </div>
    </>
  );
};

DataNotFound.propTypes = {
  msg: PropTypes.string,
};

export default DataNotFound;
