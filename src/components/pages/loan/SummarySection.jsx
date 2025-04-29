import { Button } from 'primereact/button';
import React from 'react';

const SummarySection = () => {
  return (
    <>
      <div className="w-full bg-white h-full mb-4 text-black rounded-md">
        <div className="p-3 py-7 md:p-7 md:pt-7">
          <div className="md:flex justify-between items-start">
            <div className="flex justify-end order-1 mb-6 md:mb-0 md:order-2 ">
              <Button
                label="Send to all"
                size="small"
                className="p-2.5 bg-[#1cabe6] text-white"
              />
            </div>
            <div className="order-2 md:order-1 p-3 border-[1px] rounded-md md:w-1/2 lg:max-w-[392px]">
              <h2 className="text-[#1cabe6] text-xl font-bold">Mandiri</h2>
              <h3 className="text-blue-900 font-bold mb-2">
                Pilih Cabang Bank
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-gray-800 w-24 mr-2">Bank Officer</span>
                  <span className="text-gray-800">: Pilih Bank Officer</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-800 w-24 mr-2">Email</span>
                  <span className="text-gray-800">: Pilih Bank Officer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end space-x-1 mt-7">
            <Button
              label="Save"
              icon="pi pi-save"
              size="large"
              className=" p-2.5 bg-[#0c2f3e] text-white"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SummarySection;
