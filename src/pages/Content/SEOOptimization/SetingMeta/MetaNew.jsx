import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

export default function MetaNew() {
  return (
    <div>
      <Form.Item
        name="metatitlenew"
        label="Thẻ meta tiêu đề"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập tên tác giả",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="metakeynew"
        label="Từ khóa meta"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập tên tác giả",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="metadespnew"
        label="Mô tả meta"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập tên tác giả",
          },
        ]}
      >
        <TextArea></TextArea>
      </Form.Item>
    </div>
  );
}
