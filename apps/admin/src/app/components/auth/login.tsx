import React, { useState } from 'react';
import { Form, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import './login.css';

const Login: React.FC = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Login
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="background-login">
            <div className="svg-image"></div>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <h2 className="form-login-h2">Login</h2>

              <Form.Item
                name="username"
                rules={[
                  { required: true, message: 'Please input your Username!' },
                ]}
              >
                <label htmlFor="login-input">Email</label>
                <Input id="login-input" type="email" placeholder="" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: 'Please input your Password!' },
                ]}
              >
                <label htmlFor="password-input">Password</label>

                <a className="login-form-forgot" href="#">
                  Forgot password
                </a>
                <Input.Password
                  id="password-input"
                  placeholder=""
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>

              <Form.Item className="submit-create">
                <button className="login-form-button">Login</button>
                <a className="login-form-create-btn" href="">
                  Create account
                </a>
              </Form.Item>
            </Form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
