import React from 'react';
import { Layout } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import { HeaderLayout } from '../../common/Header';
import { Outlet } from 'react-router-dom';
import './Dashboard.css';
export const DashboardLayout = () => {
  return (
    <Layout id="dashboard-layout">
      <Header className="header">
        <HeaderLayout />
      </Header>
      <Layout>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
