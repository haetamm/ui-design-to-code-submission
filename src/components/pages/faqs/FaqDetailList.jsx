import React from 'react';
import PropTypes from 'prop-types';

const FaqDetailList = ({ faq }) => {
  const { details } = faq;

  return (
    <div className="p-3 px-3 pt-0 md:px-3 lg:px-4 xl:px-6 py-4 xs:pt-0 w-full mt-2">
      <div>
        {details.map(({ id, title, desc }) => (
          <div
            key={id}
            className="mb-2.5 border border-gray-200 bg-white rounded-lg"
          >
            <details className="group">
              <summary className="h-[48px] flex items-center justify-between px-4 cursor-pointer text-sm md:text-lg font-medium">
                <span>{title}</span>
                <i className="pi pi-chevron-down group-open:pi-chevron-up " />
              </summary>
              <div className="px-4 py-3 text-slate-800 text-sm bg-slate-300">
                {desc}
              </div>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
};

FaqDetailList.propTypes = {
  faq: PropTypes.array.isRequired,
};

export default FaqDetailList;
