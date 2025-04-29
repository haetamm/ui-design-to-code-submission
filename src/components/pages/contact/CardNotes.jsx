import React from 'react';
import CardHeaderApplication from './CardHeaderApplication';

const CardNotes = () => {
  return (
    <>
      <div className=" mt-3 bg-white flex flex-col items-center rounded-md">
        <CardHeaderApplication name="Notes" link="#" />
        <div className="flex justify-center">
          <div className="px-2 xs:px-4 pt-6 pb-4 w-full min-h-[168px] overflow-auto grid grid-cols-2 gap-2 xs:grid-cols-3 xs:gap-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-4 xl:grid-cols-5 xl:gap-8">
            <div className="bg-slate-300 h-[150px] w-[150px] xl:w-[180px] xl:h-[180px] p-3 rounded-md">
              <p className="text-lg font-bold text-center">Testing</p>
              <p className="text-sm mb-2 text-center">February 9, 2034 </p>
              <p className="text-sm my-2">Mecoba fitur </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardNotes;
