import { RouteObject } from 'react-router-dom';
import { Forgot } from '../components/auth/Forgot';
import { Login } from '../components/auth/Login';
import { Signup } from '../components/auth/Signup';
import { NotFound } from '../components/common/NotFound';
import { AuthLayout } from '../components/layouts/Auth';
import { DashboardLayout } from '../components/layouts/Dashboard';
import { HomePage } from '../components/pages/HomePage';

export const rootRouters: RouteObject[] = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/auth',
        element: <AuthLayout />,
        children: [
          { path: 'login', element: <Login /> },
          { path: 'forgot', element: <Forgot /> },
          { path: 'signup', element: <Signup /> },
        ],
      },
      { path: '*', element: <NotFound /> },
    ],
  },
];
