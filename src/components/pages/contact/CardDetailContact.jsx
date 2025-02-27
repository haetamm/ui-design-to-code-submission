import React from 'react';
import PropTypes from 'prop-types';
import { contactSubDetailField } from '../../../utils/fieldInput';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { urlPage } from '../../../utils/constans';

const CardDetailContact = ({ data }) => {
  // Mengelompokkan data berdasarkan 'type'
  const groupedFields = contactSubDetailField.reduce((acc, field) => {
    const group = field.type;
    if (!acc[group]) acc[group] = [];
    acc[group].push(field);
    return acc;
  }, {});

  return (
    <>
      <div className='bg-white py-5 px-2 xl:px-4 flex flex-col items-center rounded-md'>
        <p className='font-bold text-3xl'>{data?.name}</p>
        <p className='mt-1 text-md'>Date Created : {data?.created_at}</p>

        {Object.entries(groupedFields).map(([group, fields], index) => (
          <div key={index} className='w-full mt-5 mb-3'>
            <div className='border-[1px] border-gray-200 w-full rounded-t-md bg-gray-200 px-4 py-1 font-bold text-lg'>
              {group}
            </div>
            {fields.map(({ label, value }, idx) => (
              <div
                key={idx}
                className={`flex space-x-2 border-gray-200 w-full border-x-[1px] ${
                  idx === fields.length - 1 ? 'border-b-[1px] rounded-b-md' : ''
                }`}
              >
                <div className='px-1 xs:px-4 py-1.5 text-md w-[40%] border-r-[1px] '>
                  <p>{label}</p>
                </div>
                <div className='px-1 xs:px-4 py-1.5 text-md w-[60%]'>
                  <p>
                    {value === 'birth_date'
                      ? data[value]?.toLocaleDateString('id-ID')
                      : data[value]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}

        <div className='flex space-x-2 items-center w-full'>
          <Button
            label='Share'
            icon='pi pi-share-alt'
            size='large'
            className=' w-full p-2.5 bg-blue-600 text-white'
          />
          <Button
            label='Delete'
            icon='pi pi-trash'
            size='large'
            className=' w-full p-2.5 bg-red-500 text-white'
          />
        </div>
        <Link to={`${urlPage.CONTACT_ME}/${data.id}`} className='w-full'>
          <Button
            label='Edit Contact'
            icon='pi pi-pen-to-square'
            size='large'
            className=' w-full p-2.5 bg-[#0c2f3e] text-white mt-2'
          />
        </Link>
      </div>
    </>
  );
};

CardDetailContact.propTypes = {
  data: PropTypes.object.isRequired,
};
export default CardDetailContact;
