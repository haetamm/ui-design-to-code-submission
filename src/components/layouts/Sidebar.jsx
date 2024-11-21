import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../../utils/navLink';
import { LuAlignJustify } from 'react-icons/lu';
import { toggleSidebar } from '../../store/sidebarSlice';

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const dispatch = useDispatch();
  const location = useLocation();

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    isSidebarOpen && (
      <div className='bg-white border-r-[1px] h-screen z-50'>
        <div className='flex justify-center p-1 lg:p-0'>
          <img
            src='https://loanmarket.co.id/assets/img/lm-logo.png'
            alt='logo-img'
            className='hidden lg:inline-block h-[80px] w-[80px]'
          />
          <LuAlignJustify
            onClick={() => dispatch(toggleSidebar())}
            className='h-10 w-10 block lg:hidden'
          />
        </div>
        <div className='mx-auto px-1.5 xl:px-3 h-[calc(100%-55px)] lg:h-[calc(100%-80px)] overflow-auto no-scrollbar pt-5 lg:py-3 xl:pt-6'>
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className={`flex justify-center lg:justify-start items-center rounded-md w-full mb-2 lg:mb-1.5 hover:bg-[#1cabe6] hover:text-white ${
                isActive(item.to)
                  ? 'bg-[#1cabe6] text-white lg:text-[#1cabe6] lg:font-bold lg:bg-white'
                  : ''
              }`}
            >
              <div className='flex lg:space-x-1.5 xl:space-x-4 items-center px-0 py-0.5 lg:py-1.5 lg:px-1 xl:px-2'>
                <div className='flex-shrink-0 h-9 w-9 flex items-center justify-center'>
                  {item.icon}
                </div>
                <p className='text-md xl:text-lg hidden lg:inline-block'>
                  {item.label}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  );
};

export default Sidebar;
