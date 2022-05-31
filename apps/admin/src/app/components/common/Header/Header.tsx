import { Button, Divider, Image, Typography } from 'antd';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Images } from 'apps/admin/src/assets/Images';
import React from 'react';
import { Select } from 'antd';
import './Header.css';
import { NavLink } from 'react-router-dom';

const { Option } = Select;
export const HeaderLayout = () => {
  return (
    <div id="header">
      <div className="logo">
        <div className="logo-icon">
          <Image
            src={Images.logo}
            preview={false}
            width={45}
            height={45}
            className="logo-img"
          />
          <Typography.Link style={{ color: '#000000', fontWeight: 600 }}>
            Room Meeting
          </Typography.Link>
          <Button children={'Dashboard'} className="logo-btn" type="primary" />
        </div>
        <div className="auth">
          <div className="auth-select">
            <Select defaultValue="EN" style={{ width: 70 }} allowClear>
              <Option value="EN">EN</Option>
              <Option value="VN">VN</Option>
            </Select>
          </div>

          <div className="auth-link">
            <NavLink to={'/auth/login'} className="link-sign">
              Login
            </NavLink>
            <Divider type="vertical" style={{ height: '62px' }} />
            <NavLink to={'/auth/signup'} className="link-sign">
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
