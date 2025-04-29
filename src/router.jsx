import { createBrowserRouter, Navigate } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import DefaultLayout from './layouts/DefaultLayout';
import ProductPage from './pages/ProductPage';
import { urlPage } from './utils/constans';
import ProductBankPage from './pages/ProductBankPage';
import ProductDeveloperPage from './pages/ProductDeveloperPage';
import ProductBankDetailPage from './pages/ProductBankDetailPage';
import ProductBankUpdatePage from './pages/ProductBankUpdatePage';
import ProductAddPage from './pages/ProductAddPage';
import ProductAddCategoryPage from './pages/ProductAddCategoryPage';
import LoanPage from './pages/LoanPage';
import NotFound from './pages/NotFound';
import NotificationPage from './pages/NotificationPage';
import ContactPage from './pages/ContactPage';
import ContactMePage from './pages/ContactMePage';
import ContactOtherPage from './pages/ContactOtherPage';
import ContactDetailPage from './pages/ContactDetailPage';
import ContactUpdatePage from './pages/ContactUpdatePage';
import ProductDeveloperDetailPage from './pages/ProductDeveloperDetailPage';
import ProductDeveloperUpdatePage from './pages/ProductDeveloperUpdatePage';
import ProductBankAddPage from './pages/ProductBankAddPage';
import ContactAddPage from './pages/ContactAddPage';
import ContactAddCategoryPage from './pages/ContactAddCategoryPage';
import ContactByIdPage from './pages/ContactByIdPage';
import BankPage from './pages/BankPage';
import BankDetailPage from './pages/BankDetailPage';

const routerConfig = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="dashboard" />,
      },
      {
        path: urlPage.DASHBOARD,
        element: <DashboardPage />,
        handle: { name: 'Dashboard' },
      },
      {
        path: urlPage.NOTIFICATION,
        element: <NotificationPage />,
        handle: { name: 'Notification' },
      },
      {
        path: urlPage.CONTACT,
        element: <ContactPage />,
        children: [
          {
            path: '',
            element: <Navigate to="me" />,
          },
          {
            path: 'add',
            element: <ContactAddPage />,
            handle: { name: 'Contact' },
          },
          {
            path: 'add-category',
            element: <ContactAddCategoryPage />,
            handle: { name: 'Contact' },
          },
          {
            path: 'me',
            element: <ContactMePage />,
            handle: { name: 'Contact' },
          },
          {
            path: 'me/:id',
            element: <ContactByIdPage />,
            handle: { name: 'Contact' },
          },
          {
            path: 'me/:id/detail',
            element: <ContactDetailPage />,
            handle: { name: 'Contact' },
          },
          {
            path: 'me/:id/update',
            element: <ContactUpdatePage />,
            handle: { name: 'Contact' },
          },
          {
            path: 'other',
            element: <ContactOtherPage />,
            handle: { name: 'Contact' },
          },
        ],
      },
      {
        path: urlPage.LOAN,
        element: <LoanPage />,
        handle: { name: 'Edit Application' },
      },
      {
        path: urlPage.PRODUCT,
        element: <ProductPage />,
        children: [
          {
            path: '',
            element: <Navigate to="bank" />,
          },
          {
            path: 'bank',
            element: <ProductBankPage />,
            handle: { name: 'Product' },
          },
          {
            path: 'bank/add',
            element: <ProductBankAddPage />,
            handle: { name: 'Product' },
          },
          {
            path: 'bank/:id',
            element: <ProductBankDetailPage />,
            handle: { name: 'Product' },
          },
          {
            path: 'bank/:id/update',
            element: <ProductBankUpdatePage />,
            handle: { name: 'Product' },
          },
          {
            path: 'developer',
            element: <ProductDeveloperPage />,
            handle: { name: 'Product' },
          },
          {
            path: 'developer/:id',
            element: <ProductDeveloperDetailPage />,
            handle: { name: 'Product' },
          },
          {
            path: 'developer/:id/update',
            element: <ProductDeveloperUpdatePage />,
            handle: { name: 'Product' },
          },
        ],
      },
      {
        path: urlPage.PRODUCT_ADD,
        element: <ProductAddPage />,
        handle: { name: 'Product' },
      },
      {
        path: urlPage.PRODUCT_ADD_CATEGORY,
        element: <ProductAddCategoryPage />,
        handle: { name: 'Category' },
      },
      {
        path: urlPage.BANK,
        element: <BankPage />,
        handle: { name: 'Bank' },
      },
      {
        path: `${urlPage.BANK}/:id/detail`,
        element: <BankDetailPage />,
        handle: { name: 'Bank' },
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routerConfig);
export default router;
