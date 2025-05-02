import React from 'react';
import { dataFaqs } from '../../../utils/data';
import { Link } from 'react-router-dom';

const FaqList = () => {
  return (
    <div className="p-3 px-3 pt-0 md:px-3 lg:px-4 xl:px-6 py-4 xs:pt-0 w-full mt-2">
      {dataFaqs.map((faq, index) => (
        <Link
          to={`${faq.id}/detail`}
          key={index}
          className="h-[48px] mb-2.5 border border-gray-200 bg-white cursor-pointer rounded-lg flex items-center justify-between px-4 hover:bg-gray-50 transition-colors"
        >
          <span className=" text-sm md:text-lg font-medium">{faq.title}</span>
          <i className="pi pi-chevron-right " />
        </Link>
      ))}
    </div>
  );
};
export default FaqList;
