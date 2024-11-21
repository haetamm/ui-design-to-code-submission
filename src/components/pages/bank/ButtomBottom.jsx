import React from 'react';
import PropTypes from 'prop-types';

const ButtomBottom = ({ children }) => {
  return (
    <div className='flex md:hidden justify-between items-center bottom-0 fixed w-full space-x-10 px-2 py-1.5 z-50 shadow-3xl shadow-black bg-white border-t-2 border-gray-200'>
      <div className='flex flex-1 items-center space-x-1'>{children}</div>
    </div>
  );
};

ButtomBottom.propTypes = {
  children: PropTypes.node,
};

export default ButtomBottom;
