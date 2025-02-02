import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../../utils/navLink';
import { LuAlignJustify } from 'react-icons/lu';
import { toggleSidebar } from '../../store/sidebarSlice';
import { IoMdArrowDropdown } from 'react-icons/io';
import { BsPiggyBank } from 'react-icons/bs';
import { SiStarlingbank } from 'react-icons/si';
import { TbCategory2, TbReport } from 'react-icons/tb';
import { urlPage } from '../../utils/constans';

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const dispatch = useDispatch();
  const location = useLocation();
  const [dropdowns, setDropdowns] = useState({});

  const handleDropdownToggle = (label) => {
    setDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const isActive = (path) => location.pathname.startsWith(path);

  // Sub-nav item untuk default
  const subNavItemDefault = [
    {
      to: urlPage.PRODUCT,
      icon: <BsPiggyBank className='h-9 w-9 lg:w-7 lg:h-7 xl:w-9 xl:h-9' />,
      label: 'Bank Product',
    },
    {
      to: '#',
      icon: <SiStarlingbank className='h-9 w-9 lg:w-7 lg:h-7 xl:w-9 xl:h-9' />,
      label: 'Product',
    },
    {
      to: '#',
      icon: <TbCategory2 className='h-9 w-9 lg:w-7 lg:h-7 xl:w-9 xl:h-9' />,
      label: 'Category Product',
    },
  ];

  // Sub-nav item khusus untuk 'Whatsapp'
  const subNavItemWhatsapp = [
    {
      to: '#',
      icon: <TbReport className='h-9 w-9 lg:w-7 lg:h-7 xl:w-9 xl:h-9' />,
      label: 'Report',
    },
  ];

  return (
    isSidebarOpen && (
      <div className='bg-white border-r-[1px] h-screen z-50'>
        <div className='flex justify-center p-1 lg:p-0'>
          <img
            src='https://www.loanmarket.co.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Floan-market-logo.08e43cb2.png&w=96&q=75'
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
            <div key={index} className='relative'>
              <Link
                to={item.to}
                onClick={() => {
                  if (item.label === 'Product' || item.label === 'Whatsapp') {
                    handleDropdownToggle(item.label);
                  }
                }}
                className={`flex justify-center lg:justify-start items-center rounded-md w-full mb-2 lg:mb-1.5 lg:hover:bg-[#1cabe6] lg:hover:text-white ${
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
                  {(item.label === 'Product' || item.label === 'Whatsapp') && (
                    <IoMdArrowDropdown
                      className={`hidden lg:block h-7 w-7 cursor-pointer transition-transform duration-300 ${
                        dropdowns[item.label] ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </div>
              </Link>
              {(item.label === 'Product' || item.label === 'Whatsapp') &&
                dropdowns[item.label] && // Pastikan hanya dropdown yang sesuai yang terbuka
                (item.label === 'Whatsapp'
                  ? subNavItemWhatsapp
                  : subNavItemDefault
                ).map((link, index) => (
                  <div
                    key={index}
                    className='left-0 top-full mt-2 w-full bg-white z-10'
                  >
                    <Link
                      to={link.to}
                      className={`flex justify-center lg:justify-start items-center rounded-md w-full mb-2 lg:mb-1.5 lg:hover:bg-[#1cabe6] lg:hover:text-white ${
                        isActive(link.to)
                          ? 'bg-[#1cabe6] text-white lg:text-[#1cabe6] lg:font-bold lg:bg-white'
                          : ''
                      }`}
                    >
                      <div className='flex lg:space-x-1.5 xl:space-x-4 items-center px-0 py-0.5 lg:py-1.5 lg:px-1 xl:px-2'>
                        <div className='flex-shrink-0 h-9 w-9 flex items-center justify-center'>
                          <div className='block lg:hidden'>{link.icon}</div>
                        </div>
                        <p className='text-md xl:text-lg hidden lg:inline-block'>
                          {link.label}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default Sidebar;
