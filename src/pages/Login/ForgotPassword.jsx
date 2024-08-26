import { LeftCircleFilled, MailOutlined, RightCircleFilled } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React from "react";

export default function ForgotPassword({toggleForm}) {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <>
    <h2>Quên mật khẩu ?</h2>
    <p>Hãy nhập email để lấy lại mật khẩu</p>
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
            message: "Please input your Email!",
          },
        ]}
      >
        <Input
          prefix={<MailOutlined />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={toggleForm} style={{marginRight:'20px'}} icon={<LeftCircleFilled />}>Quay lại</Button>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Gửi
        </Button>
      </Form.Item>
    </Form>
    </>
  );
}
