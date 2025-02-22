import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/layouts/Sidebar';
import Navbar from '../components/layouts/Navbar';
import { useSidebar } from '../store/sidebar';
import { ToastContainer } from 'react-toastify';

const DefaultLayout = () => {
  const { isOpen, openSidebar } = useSidebar();
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    if (isDesktopOrLaptop) {
      openSidebar();
    }
  }, [isDesktopOrLaptop, openSidebar]);

  return (
    <>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <Navbar />
      <div className='bg-custome w-full'>
        <div className='kontener h-screen mx-auto'>
          <div
            className={`grid ${
              isOpen
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
