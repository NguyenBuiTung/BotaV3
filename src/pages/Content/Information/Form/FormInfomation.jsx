import { CheckOutlined, LeftOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Divider, Form, Input, Space } from 'antd';
import React, { useState } from 'react'

export default function FormInfomation() {
    const [form] = Form.useForm();
    const [checkbox, setCheckBox] = useState(false);
    const handleBox = (e) => {
      setCheckBox(e.target.checked);
    };
    const handleSubmit = (values) => {
      console.log({ checkbox, values });
    };
  return (
    <Form form={form} onFinish={handleSubmit} name="validate_other">
    <Form.Item label="Tên miền song song">
      <Checkbox value={checkbox} onChange={handleBox} />
    </Form.Item>
    <Divider />
    <Form.Item>
      <Space
        style={{
          display: "flex",
          marginBottom: 8,
        }}
        align="baseline"
      >
        <Form.Item
            name={["tung", "first"]}
          label="Tên miền IP"
          rules={[
            {
              required: true,
              message: "Vui lòng điền chính xác tên miền",
            },
            {
              pattern:
                /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/,
              message: "Tên miền không chính xác!",
            },
          ]}
        >
          <Input placeholder="Nhập domain" />
        </Form.Item>
        <Form.Item
            name={["tung", "last"]}
          label="Địa chỉ IP"
          rules={[
            {
              required: true,
              message: "Vui lòng điền địa chỉ IP",
            },
            {
              pattern:
                /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
              message: "Địa chỉ IP không hợp lệ!",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Space>
    </Form.Item>
    <Form.List name="tenmien">
      {(fields, { add, remove }) => (
        <>
          <Form.Item>
            <Button
              type="dashed"
              onClick={() => add()}
              disabled={!checkbox}
              icon={<PlusOutlined />}
            ></Button>
          </Form.Item>
          {fields.map(({ key, name, ...restField }) => (
            <Space
              key={key}
              style={{
                display: "flex",
                marginBottom: 8,
              }}
              align="baseline"
            >
              <Form.Item
                {...restField}
                name={[name, "first"]}
                label="Tên miền IP"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng điền chính xác tên miền",
                  },
                  {
                    pattern:
                      /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/,
                    message: "Tên miền không chính xác!",
                  },
                ]}
              >
                <Input placeholder="Nhập domain" />
              </Form.Item>
              <Form.Item
                {...restField}
                name={[name, "last"]}
                label="Địa chỉ IP"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng điền địa chỉ IP",
                  },
                  {
                    pattern:
                      /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
                    message: "Địa chỉ IP không hợp lệ!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <MinusCircleOutlined
                onClick={() => remove(name)}
                style={{ color: "red" }}
              />
            </Space>
          ))}
        </>
      )}
    </Form.List>
    <Form.Item>
      <Space>
        <Button htmlType="reset" danger icon={<LeftOutlined />}>
          Hủy
        </Button>
        <Button type="primary" htmlType="submit" icon={<CheckOutlined />}>
          Lưu
        </Button>
      </Space>
    </Form.Item>
  </Form>
  )
}
