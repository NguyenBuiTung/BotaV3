import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Divider, Form, Input } from "antd";
import ForgotPassword from "./ForgotPassword";
import RegisterForm from "../Register/RegisterForm";
import { useNavigate } from "react-router-dom";
export default function FormLogin() {
  const [isLogin, setIsLogin] = useState(true);
  const [isRegister, setIsRegister] = useState(false);
  const navigate=useNavigate()
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  const toggleRegisterForm = () => {
    setIsRegister(!isRegister);
    setIsLogin(!isLogin);
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <>
      {isLogin && !isRegister ? (
        <>
          <h2>Đăng nhập vào hệ thống</h2>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Ghi nhớ đăng nhập</Checkbox>
              </Form.Item>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onClick={()=>navigate('/home')}
              >
                Đăng nhập
              </Button>
             <span style={{padding:'0 10px'}}>hoặc</span>
              <Button type="link" onClick={toggleRegisterForm}>
                Tạo tài khoản ngay
              </Button>
            </Form.Item>
            <Divider />
            <h3>Quên mật khẩu ?</h3>
            <p>
              Click vào
              <Button type="link" onClick={toggleForm}>
                đây
              </Button>
              để lấy lại mật khẩu{" "}
            </p>
          </Form>
        </>
      ) : isRegister ? (
        <RegisterForm toggleRegisterForm={toggleRegisterForm} />
      ) :  (
        <ForgotPassword toggleForm={toggleForm}/>
      )
    }
    </>
  );
}
