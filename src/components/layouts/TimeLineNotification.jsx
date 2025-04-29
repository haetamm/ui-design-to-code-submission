import PropTypes from 'prop-types';
import { IoIosClose } from 'react-icons/io';
import { timelineNotif } from '../../utils/data';

const TimelineNotification = ({ isPageView = false }) => {
  return (
    <>
      {timelineNotif.map(({ time, status, details, isActive }, index) => (
        <div key={index} className="relative flex items-center">
          <div
            className={`text-right pr-4 text-sm text-gray-500 ${
              isPageView ? 'w-20 xs:pr-8' : 'w-16'
            }`}
          >
            {time}
          </div>

          <div className="relative flex flex-col items-center">
            {index !== 0 && (
              <div
                className={`absolute bottom-4 w-[2px] bg-gray-300 ${
                  isPageView ? 'top-[-110px] xs:top-[-80px]' : 'top-[-65px]'
                }`}
              />
            )}
            <div
              className={`relative z-10 w-4 h-4 rounded-full ${
                isActive ? 'bg-blue-500' : 'bg-gray-500'
              }`}
            />
          </div>

          <div
            className={`${
              isPageView
                ? 'ml-4 xs:ml-7 bg-white py-3 px-4 w-full text-lg rounded-lg'
                : 'ml-4'
            }`}
          >
            {isPageView ? (
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm md:text-md lg:text-lg font-bold">
                    {status}
                  </p>
                  <p className="text-sm md:text-md text-gray-500">{details}</p>
                </div>
                <IoIosClose className="w-8 h-8 shrink-0 cursor-pointer" />
              </div>
            ) : (
              <>
                <p className="text-sm font-medium text-gray-800">{status}</p>
                <p className="text-sm text-gray-500">{details}</p>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

TimelineNotification.propTypes = {
  isPageView: PropTypes.bool,
};

export default TimelineNotification;
