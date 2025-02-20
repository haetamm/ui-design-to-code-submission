import React from 'react';
import CardInfo from '../loan/CardInfo';
import { assetsInfoField } from '../../../utils/fieldInput';

const AssetInfoSection = () => {
  return (
    <>
      <>
        <div className='w-full  p-1 lg:p-6 bg-white h-full mb-4 text-black rounded-md'>
          <CardInfo title='Alamat Jaminan' fields={assetsInfoField} />
        </div>
      </>
    </>
  );
};

export default AssetInfoSection;
