import React from 'react';
import PropTypes from 'prop-types';

const FilterSection = ({ labelLeft, labelRight, leftChild, rightChild }) => {
  return (
    <div className="bg-white p-3 md:p-6 rounded-md">
      <div className="font-medium text-2xl">Filter Option</div>
      <div className="grid grid-cols-1 xs:grid-cols-2 space-x-0 xs:space-x-4">
        <div className="my-3">
          <p className="font-bold md:mb-1">{labelLeft}</p>
          {leftChild}
        </div>
        <div className="my-3">
          <p className="font-bold md:mb-1">{labelRight}</p>
          {rightChild}
        </div>
      </div>
    </div>
  );
};

FilterSection.propTypes = {
  labelLeft: PropTypes.string.isRequired,
  labelRight: PropTypes.string,
  leftChild: PropTypes.node.isRequired,
  rightChild: PropTypes.node,
};

export default FilterSection;
