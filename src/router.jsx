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
