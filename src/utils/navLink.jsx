import {
  AiOutlineHome,
  AiOutlineQuestionCircle,
  AiOutlineShopping,
} from 'react-icons/ai';
import { urlPage } from './constans.js';
import { LiaAddressCard } from 'react-icons/lia';
import { FaRegBuilding, FaRegCreditCard, FaWhatsapp } from 'react-icons/fa';
import { CiFileOn } from 'react-icons/ci';
import { RiBankLine } from 'react-icons/ri';
import { PiGauge } from 'react-icons/pi';
import { IoHomeOutline, IoLayersOutline } from 'react-icons/io5';
import { FiArchive, FiUser } from 'react-icons/fi';
import { MdOutlineSavings } from 'react-icons/md';
import { BsPiggyBank } from 'react-icons/bs';
import { SiStarlingbank } from 'react-icons/si';
import { TbCategory2 } from 'react-icons/tb';

export const navItems = [
  {
    to: urlPage.DASHBOARD,
    icon: <AiOutlineHome className='h-9 w-9 lg:w-7 lg:h-7 xl:w-9 xl:h-9' />,
    label: 'Dashboard',
  },
  {
    to: urlPage.CONTACT,
    icon: <LiaAddressCard className='h-9 w-9 lg:w-7 lg:h-7 xl:w-9 xl:h-9' />,
    label: 'Contact',
  },
  {
    to: urlPage.LOAN,
    icon: <CiFileOn className='h-9 w-9 lg:w-7 lg:h-7 xl:w-9 xl:h-9' />,
    label: 'Loan',
  },
  {
    to: '#',
    icon: <AiOutlineShopping className='h-9 w-9 lg:w-7 lg:h-7 xl:w-9 xl:h-9' />,
    label: 'Product',
  },
  {
    to: '#',
    icon: <RiBankLine className='h-9 w-9 lg:w-7 lg:h-7 xl:w-9 xl:h-9' />,
    label: 'Bank',
  },
  {
    to: '#',
    icon: <PiGauge className='h-9 w-9 lg:w-7 lg:h-7 xl:w-9 xl:h-9' />,
    label: 'Credit Scoring',
  },
  {
    to: '#',
    icon: (
      <AiOutlineQuestionCircle className='h-9 w-9 lg:w-7 lg:h-7 xl:w-9 xl:h-9' />
    ),
    label: "FAQ's",
  },
  {
    to: '#',
    icon: <IoLayersOutline className='h-9 w-9 lg:w-7 lg:h-7 xl:w-9 xl:h-9' />,
    label: 'Pipeline',
  },
  {
    to: '#',
    icon: <IoLayersOutline className='h-9 w-9 lg:w-7 lg:h-7 xl:w-9 xl:h-9' />,
    label: 'Pipeline Developer',
  },
  {
    to: '#',
    icon: <FiArchive className='h-9 w-9 lg:w-7 lg:h-7 xl:w-9 xl:h-9' />,
    label: 'Marketing Tools',
  },
  {
    to: '#',
    icon: <FaWhatsapp className='h-9 w-9 lg:w-7 lg:h-7 xl:w-9 xl:h-9' />,
    label: 'Whatsapp',
  },
];

export const cardItems = [
  {
    icon: <LiaAddressCard className='h-6 w-6 flex-shrink-0 text-[#1cabe6]' />,
    label: 'CONTACT',
    count: 51,
  },
  {
    icon: <CiFileOn className='h-6 w-6 flex-shrink-0 text-[#1cabe6]' />,
    label: 'LOAN',
    count: 56,
  },
  {
    icon: (
      <AiOutlineShopping className='h-6 w-6 flex-shrink-0 text-[#1cabe6]' />
    ),
    label: 'PRODUCT',
    count: 80,
  },
  {
    icon: <RiBankLine className='h-6 w-6 flex-shrink-0 text-[#1cabe6]' />,
    label: 'BANK',
    count: 30,
  },
];

export const productLink = [
  {
    to: urlPage.PRODUCT_BANK,
    label: 'BANK',
  },
  {
    to: urlPage.PRODUCT_DEVELOPER,
    label: 'DEVELOPER',
  },
];

export const contactLink = [
  {
    to: urlPage.CONTACT_ME,
    label: 'My Contact',
  },
  {
    to: urlPage.CONTACT_OTHER,
    label: 'Other Contact',
  },
];

export const cardMenuBank = [
  {
    icon: <IoHomeOutline className='h-12 w-12 flex-shrink-0' />,
    label: 'KPR dan Multiguna',
  },
  {
    icon: <FiUser className='h-12 w-12 flex-shrink-0' />,
    label: 'Rafinancing',
  },
  {
    icon: <FaRegCreditCard className='h-12 w-12 flex-shrink-0' />,
    label: 'Kredit Modal Usaha dan Investasi',
  },
  {
    icon: <MdOutlineSavings className='h-12 w-12 flex-shrink-0' />,
    label: 'Deposito',
  },
  {
    icon: <FaRegBuilding className='h-12 w-12 flex-shrink-0' />,
    label: 'Take Over dan Bridging Loan',
  },
];

export const subNavItem = [
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
