import React from 'react';
import { useSidebar } from '../../store/sidebar';
import { IoMdClose } from 'react-icons/io';
import { TbAlignJustified } from 'react-icons/tb';

const ToggleSidebarButton = () => {
  const { isOpen, toggleSidebar } = useSidebar();
  const Icon = isOpen ? IoMdClose : TbAlignJustified;

  return (
    <Icon
      onClick={toggleSidebar}
      className="h-9 w-9 flex items-center justify-center lg:hidden"
    />
  );
};

export default ToggleSidebarButton;
