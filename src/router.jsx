import { createBrowserRouter, Navigate } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import DefaultLayout from './layouts/DefaultLayout';
import ProductPage from './pages/ProductPage';
import { urlPage } from './utils/constans';
import BankPage from './pages/BankPage';
import DeveloperPage from './pages/DeveloperPage';
import BankDetailPage from './pages/BankDetailPage';
import BankUpdatePage from './pages/BankUpdatePage';
import LoanPage from './pages/LoanPage';
import NotFound from './pages/NotFound';
import NotificationPage from './pages/NotificationPage';
import ContactPage from './pages/ContactPage';
import ContactMePage from './pages/ContactMePage';
import ContactOtherPage from './pages/ContactOtherPage';
import ContactDetailPage from './pages/ContactDetailPage';
import ContactUpdatePage from './pages/ContactUpdatePage';
import DeveloperDetailPage from './pages/DeveloperDetailPage';
import DeveloperUpdatePage from './pages/DeveloperUpdatePage';
import BankAddPage from './pages/BankAddPage';
import ContactAddPage from './pages/ContactAddPage';
import ContactAddCategoryPage from './pages/ContactAddCategoryPage';
import ContactByIdPage from './pages/ContactByIdPage';

const routerConfig = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '',
        element: <Navigate to='dashboard' />,
      },
      {
        path: urlPage.DASHBOARD,
        element: <DashboardPage />,
        handle: { name: 'Dashboard' },
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
            element: <Navigate to='me' />,
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
        path: urlPage.PRODUCT,
        element: <ProductPage />,
        children: [
          {
            path: '',
            element: <Navigate to='bank' />,
          },
          {
            path: 'bank',
            element: <BankPage />,
            handle: { name: 'Product' },
          },
          {
            path: 'bank/add',
            element: <BankAddPage />,
            handle: { name: 'Product' },
          },
          {
            path: 'bank/:id',
            element: <BankDetailPage />,
            handle: { name: 'Product' },
          },
          {
            path: 'bank/:id/update',
            element: <BankUpdatePage />,
            handle: { name: 'Product' },
          },
          {
            path: 'developer',
            element: <DeveloperPage />,
            handle: { name: 'Product' },
          },
          {
            path: 'developer/:id',
            element: <DeveloperDetailPage />,
            handle: { name: 'Product' },
          },
          {
            path: 'developer/:id/update',
            element: <DeveloperUpdatePage />,
            handle: { name: 'Product' },
          },
        ],
      },
      {
        path: urlPage.LOAN,
        element: <LoanPage />,
        handle: { name: 'Edit Application' },
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
