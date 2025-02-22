import React, { useState } from 'react';
import CardInfo from './CardInfo';
import { assetsInfoField } from '../../../utils/fieldInput';
import { Button } from 'primereact/button';

const AssetInfoSection = () => {
  const [data, setData] = useState({});
  const handleSubmit = () => {
    console.log('Form Data', data);
  };
  return (
    <>
      <div className='w-full  p-1 lg:p-6 bg-white h-full mb-4 text-black rounded-md'>
        <CardInfo
          title='Alamat Jaminan'
          fields={assetsInfoField}
          onSubmit={setData}
        />
        <div className='flex items-center justify-end space-x-1 mt-10 px-6 pb-6 lg:p-0'>
          <Button
            onClick={handleSubmit}
            label='Save'
            icon='pi pi-save'
            size='large'
            className={`bg-[#1cabe6] p-2.5 text-white`}
            type='submit'
          />
        </div>
      </div>
    </>
  );
};

export default AssetInfoSection;
