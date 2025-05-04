import { Link, useLocation } from 'react-router-dom';
import {
  navItems,
  subNavItemProduct,
  subNavItemWhatsapp,
} from '../../utils/link';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useState } from 'react';
import { useSidebar } from '../../store/sidebar';
import ToggleSidebarButton from './ToggleSidebarButton';

const Sidebar = () => {
  const { isOpen } = useSidebar();
  const location = useLocation();
  const [dropdowns, setDropdowns] = useState({});

  const handleDropdownToggle = (label) => {
    setDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const isActive = (path) => {
    if (path.includes('pipeline')) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    isOpen && (
      <div className="bg-white border-r-[1px] h-screen z-50">
        <div className="flex justify-center p-1 lg:p-0">
          <img
            src="https://www.loanmarket.co.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Floan-market-logo.08e43cb2.png&w=96&q=75"
            alt="logo-img"
            className="hidden lg:inline-block h-[80px] w-[80px]"
          />
          <ToggleSidebarButton />
        </div>
        <div className="mx-auto px-1.5 xl:px-3 h-[calc(100%-55px)] lg:h-[calc(100%-80px)] overflow-auto no-scrollbar pt-5 lg:py-3 xl:pt-6">
          {navItems.map((item, index) => (
            <div key={index} className="relative">
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
                <div className="flex lg:space-x-1.5 xl:space-x-4 items-center px-0 py-0.5 lg:py-1.5 lg:px-1 xl:px-2">
                  <div className="flex-shrink-0 h-9 w-9 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <p className="text-md xl:text-lg hidden lg:inline-block">
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
                dropdowns[item.label] &&
                (item.label === 'Whatsapp'
                  ? subNavItemWhatsapp
                  : subNavItemProduct
                ).map((link, index) => (
                  <div
                    key={index}
                    className="left-0 top-full mt-2 w-full bg-white z-10"
                  >
                    <Link
                      to={link.to}
                      className={`flex justify-center lg:justify-start items-center rounded-md w-full mb-2 lg:mb-1.5 lg:hover:bg-[#1cabe6] lg:hover:text-white ${
                        isActive(link.to)
                          ? 'bg-[#1cabe6] text-white lg:text-[#1cabe6] lg:font-bold lg:bg-white'
                          : ''
                      }`}
                    >
                      <div className="flex lg:space-x-1.5 xl:space-x-4 items-center px-0 py-0.5 lg:py-1.5 lg:px-1 xl:px-2">
                        <div className="flex-shrink-0 h-9 w-9 flex items-center justify-center">
                          <div className="block lg:hidden">{link.icon}</div>
                        </div>
                        <p className="text-md xl:text-lg hidden lg:inline-block">
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
