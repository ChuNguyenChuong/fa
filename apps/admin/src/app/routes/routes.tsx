import { RouteObject } from 'react-router-dom';
import Login from '../components/auth/login';
import { NotFound } from '../components/common/NotFound';
import { DashboardLayout } from '../components/layouts/Dashboard';
import { HomePage } from '../components/pages/HomePage';

export const rootRouters: RouteObject[] = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/signin', element: <Login /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];
