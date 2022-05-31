import React, { useState } from 'react';
import { Button, Form, Input, Typography } from 'antd';
import '../style.css';
import { Link, NavLink } from 'react-router-dom';
import Paragraph from 'antd/lib/typography/Paragraph';

export const Forgot: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      name="forgot"
      layout="vertical"
      className="login-form"
      onFinish={onFinish}
    >
      <Typography.Title
        level={3}
        style={{
          margin: 10,
        }}
      >
        Lost your password?
      </Typography.Title>

      <Paragraph>
        Enter your email address. You will receive a link via email.
      </Paragraph>

      <Form.Item
        name="Email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input type="email" placeholder="Input you email" />
      </Form.Item>

      <Form.Item className="submit-create">
        <button type="submit" className="btn-reset-pwd">
          Reset password
        </button>
        <NavLink className="login-form-create-btn" to={'/auth/login'}>
          Back to Login
        </NavLink>
      </Form.Item>
    </Form>
  );
};
