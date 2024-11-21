import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { setSidebarOpen } from '../store/sidebarSlice';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/layouts/Sidebar';
import Navbar from '../components/layouts/Navbar';

const DefaultLayout = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    dispatch(setSidebarOpen(isDesktopOrLaptop));
  }, [isDesktopOrLaptop, dispatch]);

  return (
    <>
      <Navbar />
      <div className='bg-custome w-full'>
        <div className='kontener h-screen mx-auto'>
          <div
            className={`grid ${
              isSidebarOpen
                ? 'grid-cols-[55px_calc(100%-55px)] lg:grid-cols-[160px_calc(100%-160px)] xl:grid-cols-[210px_calc(100%-210px)]'
                : 'grid-cols-1'
            }`}
          >
            <Sidebar />
            <div className=' h-screen overflow-auto no-scrollbar'>
              <div className=' pt-[46px] lg:pt-[54px]'>
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
