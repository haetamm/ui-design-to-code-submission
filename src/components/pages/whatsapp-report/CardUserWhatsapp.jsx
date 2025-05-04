import { Button } from 'primereact/button';
import React from 'react';
import { dataNotifUser } from '../../../utils/data';

const CardUserWhatsapp = () => {
  return (
    <>
      <div className="mt-3 w-full xl:w-[254px] px-4 py-2.5 bg-white rounded-lg xl:max-h-[388px] order-1 xl:order-2">
        <p className="mb-3 font-bold">Pengguna Whatsapp</p>
        <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 xl:gap-0 xl:grid-cols-1">
          {dataNotifUser.map(({ id, label, total }) => (
            <div
              key={id}
              className="rounded-lg border mb-4 px-3 py-2 w-full md:w-[180px] xl:w-full"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-xl">{total}</p>
                  <small className="">{label}</small>
                </div>
                <Button
                  size="small"
                  icon="pi pi-arrow-right"
                  className=" bg-[#1cabe6] h-8 w-8 text-white"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardUserWhatsapp;
