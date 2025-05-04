import React, { useState } from 'react';
import { dataNotifWA } from '../../../utils/data';

const CardNotif = () => {
  const [data] = useState(dataNotifWA);
  return (
    <>
      <div className="overflow-x-auto pb-3">
        <div className="grid grid-flow-col auto-cols-max gap-x-4 md:gap-x-6">
          {data.map(
            ({ id, borderColor, textColor, label, totalNotif, newNotif }) => (
              <div
                key={id}
                className={` ${borderColor} bg-white shadow-md rounded-lg p-4 border-l-4 min-w-[200px] md:w-[254px]`}
              >
                <h2 className="text-lg font-medium">{label}</h2>
                <p className="text-2xl font-semibold">
                  {totalNotif}{' '}
                  <span className={`${textColor} text-sm`}>
                    + {newNotif} New
                  </span>
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default CardNotif;
