import {
  MenuOutlined,
  MinusCircleOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Divider, Form, Input, Space } from "antd";
import React from "react";

export default function SetingTab8() {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };
  return (
    <div>
      <div>
        <MenuOutlined  style={{fontSize:'18px'}}/>
        <span style={{fontSize:'18px'}}>Chuyển hướng URL</span>
      </div>
      <Divider />
      <div style={{ border: "1px solid #e1e1e1", padding: "20px" }}>
        <Form
          name="dynamic_form_nest_item"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
          autoComplete="off"
        >
          <Form.List name="users">
            
            {(fields, { add, remove }) => (
              <>
               <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                  
                    icon={<PlusOutlined />}
                  >
                    Add field
                  </Button>
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
                      rules={[
                        {
                          required: true,
                          message: "Missing first name",
                        },
                      ]}
                    >
                      <Input placeholder="URL hiện tại" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "last"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing last name",
                        },
                      ]}
                    >
                      <Input placeholder="URL đích" />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} style={{color:'red'}} />
                  </Space>
                ))}
               
              </>
            )}
          </Form.List>
          <Divider/>
          <Form.Item>
            <Button type="primary" htmlType="submit" icon={<UploadOutlined/>}>
              Cập nhật
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
