import {
  CheckOutlined,
  PoweroffOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Button, Divider, Form, Switch } from "antd";
import React, { useState } from "react";
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};
export default function SwitchPage() {
  const [form] = Form.useForm();
  const [value, setValue] = useState(false);
  const handleChange = (newValue) => {
    setValue(newValue);
    // form.setFieldValue({ switch: newValue });
  };
  const handleSubmit = (values) => {
    console.log("Submitted values:", values);
  };
  return (
    <>
      <div
        style={{
          background: "#f2cf87",
          padding: "15px 30px 15px 15px",
          marginBottom: "20px",
        }}
      >
        <span>Trạng thái quảng cáo chân trang </span>
        <span
          style={{
            backgroundColor: "#d84a38",
            padding: "1px 5px",
            color: "#fff",
            marginLeft: "3px",
          }}
        >
          {value ? "Bật" : "Tắt"}
        </span>
      </div>
      <div style={{ border: "1px solid #e1e1e1", padding: "20px" }}>
        <div>
          <UnorderedListOutlined
            rotate={-90}
            style={{ color: "#e26a6a", fontSize: "16px" }}
          />
          <span
            style={{
              textTransform: "uppercase",
              color: "#e26a6a",
              fontWeight: 700,
            }}
          >
            Chỉnh sửa quảng cáo chân trang
          </span>
        </div>
        <Divider />
        <div>
          {value ? (
            <p
              style={{
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Đang bật quảng cáo chân trang
              <span style={{ marginLeft: "5px", color: "#52c41a" }}>
                <CheckOutlined />
              </span>
            </p>
          ) : (
            <p
              style={{
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Đang tắt quảng cáo chân trang{" "}
              <span style={{ marginLeft: "5px", color: "#f5222d" }}>
                <PoweroffOutlined />
              </span>{" "}
            </p>
          )}
          <Form form={form} onFinish={handleSubmit} {...formItemLayout}>
            <Form.Item
              name="switch"
              rules={[{ required: true, message: "Vui lòng chọn trạng thái " }]}
            >
              <Switch checkedChildren="Bật" unCheckedChildren="Tắt" value={value} onChange={handleChange} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" icon={<CheckOutlined />}>
                Lưu
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}
