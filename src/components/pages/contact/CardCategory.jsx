import React from 'react';
import PropTypes from 'prop-types';

const CardCategory = ({ name }) => {
  return (
    <>
      <div className='border rounded-lg shadow-md overflow-hidden'>
        <div className='bg-[#1cabe6] text-white text-md p-3'>
          Category Group - {name}
        </div>
        <div className='overflow-x-auto px-2 py-3 md:p-6 bg-white text-md'>
          <table className='w-full border-collapse '>
            <thead>
              <tr className='bg-gray-200'>
                <th className='border px-3 py-2 text-left'>CATEGORY NAME</th>
                <th className='border px-3 py-2 text-left'>
                  VISIBILITY OPTION
                </th>
                <th className='border px-3 py-2'></th>
              </tr>
            </thead>
            <tbody>
              <tr className='border'>
                <td className='border px-3 py-1.5'>-</td>
                <td className='border px-3 py-1.5'>-</td>
                <td className='border px-3 py-1.5 text-center'>
                  <button className='p-1.5 bg-gray-100 rounded hover:bg-gray-200'>
                    &#8942;
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

CardCategory.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CardCategory;
