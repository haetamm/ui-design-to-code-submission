import { AiOutlineQuestionCircle, AiOutlineShopping } from 'react-icons/ai';
import { urlPage } from './constans.js';
import { LiaAddressCard } from 'react-icons/lia';
import { FaRegBuilding, FaRegCreditCard, FaWhatsapp } from 'react-icons/fa';
import { CiFileOn } from 'react-icons/ci';
import { RiBankLine, RiHome4Line } from 'react-icons/ri';
import { PiGauge } from 'react-icons/pi';
import { IoHomeOutline, IoLayersOutline } from 'react-icons/io5';
import { FiArchive, FiUser } from 'react-icons/fi';
import { MdOutlineSavings } from 'react-icons/md';
import { BsPiggyBank } from 'react-icons/bs';
import { SiStarlingbank } from 'react-icons/si';
import { TbCategory2, TbReport } from 'react-icons/tb';

export const navItems = [
  {
    to: urlPage.DASHBOARD,
    icon: <RiHome4Line className="h-9 w-9 lg:w-7 lg:h-7 xl:w-9 xl:h-9" />,
    label: 'Dashboard',
  },
  {
    to: urlPage.CONTACT,
    icon: <LiaAddressCard className="h-9 w-9 lg:w-7 lg:h-7 xl:w-9 xl:h-9" />,
    label: 'Contact',
  },
  {
    to: urlPage.LOAN,
    icon: <CiFileOn className="h-9 w-9 lg:w-7 lg:h-7 xl:w-9 xl:h-9" />,
    label: 'Loan',
  },
  {
    to: '#',
    icon: <AiOutlineShopping className="h-9 w-9 lg:w-7 lg:h-7 xl:w-9 xl:h-9" />,
    label: 'Product',
  },
  {
    to: urlPage.BANK,
    icon: <RiBankLine className="h-9 w-9 lg:w-7 lg:h-7 xl:w-9 xl:h-9" />,
    label: 'Bank',
  },
  {
    to: urlPage.CREDIT_SCORING,
    icon: <PiGauge className="h-9 w-9 lg:w-7 lg:h-7 xl:w-9 xl:h-9" />,
    label: 'Credit Scoring',
  },
  {
    to: urlPage.FAQ,
    icon: (
      <AiOutlineQuestionCircle className="h-9 w-9 lg:w-7 lg:h-7 xl:w-9 xl:h-9" />
    ),
    label: "FAQ's",
  },
  {
    to: urlPage.PIPELINE,
    icon: <IoLayersOutline className="h-9 w-9 lg:w-7 lg:h-7 xl:w-9 xl:h-9" />,
    label: 'Pipeline',
  },
  {
    to: urlPage.PIPELINE_DEV,
    icon: <IoLayersOutline className="h-9 w-9 lg:w-7 lg:h-7 xl:w-9 xl:h-9" />,
    label: 'Pipeline Developer',
  },
  {
    to: urlPage.MARKETING_TOOL,
    icon: <FiArchive className="h-9 w-9 lg:w-7 lg:h-7 xl:w-9 xl:h-9" />,
    label: 'Marketing Tools',
  },
  {
    to: '#',
    icon: <FaWhatsapp className="h-9 w-9 lg:w-7 lg:h-7 xl:w-9 xl:h-9" />,
    label: 'Whatsapp',
  },
];

export const cardItems = [
  {
    icon: <LiaAddressCard className="h-6 w-6 flex-shrink-0 text-[#1cabe6]" />,
    label: 'CONTACT',
    count: 51,
  },
  {
    icon: <CiFileOn className="h-6 w-6 flex-shrink-0 text-[#1cabe6]" />,
    label: 'LOAN',
    count: 56,
  },
  {
    icon: (
      <AiOutlineShopping className="h-6 w-6 flex-shrink-0 text-[#1cabe6]" />
    ),
    label: 'PRODUCT',
    count: 80,
  },
  {
    icon: <RiBankLine className="h-6 w-6 flex-shrink-0 text-[#1cabe6]" />,
    label: 'BANK',
    count: 30,
  },
];

export const productBankLink = [
  {
    to: urlPage.PRODUCT_BANK,
    label: 'BANK',
  },
  {
    to: urlPage.PRODUCT_DEVELOPER,
    label: 'DEVELOPER',
  },
];

export const creditScoringLink = [
  {
    to: urlPage.CREDIT_SCORING_INDIVIDUAL,
    label: 'Individual',
  },
  {
    to: urlPage.CREDIT_SCORING_COMPANY,
    label: 'Company',
  },
];

export const productAddLink = [
  {
    to: urlPage.PRODUCT_ADD,
    label: 'BANK',
  },
  {
    to: urlPage.PRODUCT_DEVELOPER,
    label: 'DEVELOPER',
  },
];

export const productAddCategoryLink = [
  {
    to: urlPage.PRODUCT_ADD_CATEGORY,
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
    icon: <IoHomeOutline className="h-12 w-12 flex-shrink-0" />,
    label: 'KPR dan Multiguna',
  },
  {
    icon: <FiUser className="h-12 w-12 flex-shrink-0" />,
    label: 'Rafinancing',
  },
  {
    icon: <FaRegCreditCard className="h-12 w-12 flex-shrink-0" />,
    label: 'Kredit Modal Usaha dan Investasi',
  },
  {
    icon: <MdOutlineSavings className="h-12 w-12 flex-shrink-0" />,
    label: 'Deposito',
  },
  {
    icon: <FaRegBuilding className="h-12 w-12 flex-shrink-0" />,
    label: 'Take Over dan Bridging Loan',
  },
];

export const subNavItemProduct = [
  {
    to: urlPage.PRODUCT,
    icon: <BsPiggyBank className="h-9 w-9 lg:w-7 lg:h-7 xl:w-9 xl:h-9" />,
    label: 'Bank Product',
  },
  {
    to: urlPage.PRODUCT_ADD,
    icon: <SiStarlingbank className="h-9 w-9 lg:w-7 lg:h-7 xl:w-9 xl:h-9" />,
    label: 'Product',
  },
  {
    to: urlPage.PRODUCT_ADD_CATEGORY,
    icon: <TbCategory2 className="h-9 w-9 lg:w-7 lg:h-7 xl:w-9 xl:h-9" />,
    label: 'Category Product',
  },
];

export const subNavItemWhatsapp = [
  {
    to: urlPage.WHATSAPP_REPORT,
    icon: <TbReport className="h-9 w-9 lg:w-7 lg:h-7 xl:w-9 xl:h-9" />,
    label: 'Report',
  },
];
