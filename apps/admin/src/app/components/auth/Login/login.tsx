import React, { useState } from 'react';
import { Form, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import '../style.css';
import { Link, NavLink } from 'react-router-dom';

export const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      layout="vertical"
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <h2 className="form-login-h2">Login</h2>

      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, message: 'Please input your E-mail!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item className="form__password">
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input.Password
            type="password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>

        <Form.Item className="form__forgot">
          <Link className="login-form-forgot" to={'/auth/forgot'}>
            Forgot password
          </Link>
        </Form.Item>
      </Form.Item>

      <Form.Item className="submit-create">
        <button type="submit" className="login-form-button">
          Login
        </button>
        <NavLink className="login-form-create-btn" to={'/auth/signup'}>
          Create account
        </NavLink>
      </Form.Item>
    </Form>
  );
};
