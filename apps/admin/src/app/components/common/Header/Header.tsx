import { Button, Divider, Image, Typography } from 'antd';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Images } from 'apps/admin/src/assets/Images';
import React from 'react';
import { Select } from 'antd';
import './Header.css';

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
          <Typography.Link style={{ color: '#000000' }}>
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

          <div className="auth-btn">
            <Button
              children={'SignIn'}
              type="link"
              style={{ color: '#000000' }}
            />
            <Divider type="vertical" style={{ height: '62px' }} />
            <Button
              children={'SignUp'}
              type="link"
              style={{ color: '#000000' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
