import { CheckOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space } from "antd";
import React from "react";
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};
const { TextArea } = Input;
export default function SetingTab4() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div style={{border:'1px solid #e1e1e1 '}}>
      <Form
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
        requiredMark={"optional"}
        style={{
          maxWidth: 1000,
          padding: 10,
        }}
      >
        <Form.Item
          name="name"
          label="Nội dung file robot.txt"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập nội dung",
            },
          ]}
        >
          <TextArea rows={4} placeholder="maxLength is 500" maxLength={500} />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            span: 12,
            offset: 6,
          }}
        >
          <Space>
            <Button type="primary" htmlType="submit" icon={<CheckOutlined />}>
              Cập nhật nội dung
            </Button>
            <Button
              type="primary"
              htmlType="reset"
              danger
              icon={<DeleteOutlined />}
            >
              Xóa
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
}
