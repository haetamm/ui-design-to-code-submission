import React from 'react';
import TimelineNotification from '../components/layouts/TimeLineNotification';

const NotificationPage = () => {
  return (
    <>
      <div className='px-3 pb-4 md:px-3 lg:px-6 w-full'>
        <div className='pt-10 pb-4 rounded-lg'>
          <div className='block md:flex justify-center items-center'>
            <div className='flex flex-col relative space-y-6 w-full'>
              <TimelineNotification isPageView={true} />
              <div className='flex justify-end m-0'>
                <button className='text-md bg-red-800 px-3 py-0.5 rounded-md text-white'>
                  CLEAR ALL
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationPage;
