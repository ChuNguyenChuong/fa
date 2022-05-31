import React from 'react';
import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="background-login">
        <div className="svg-image"></div>
        <Outlet />
      </div>
    </div>
  );
};
