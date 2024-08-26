import { CheckOutlined, LeftOutlined } from "@ant-design/icons";
import { Button, Form, Space } from "antd";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function TextEditor({ keyLan,pageSettingCustom }) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6] }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["blockquote", "code-block"],
      ["link", "image", "video"],
      [{ size: ["small", false, "large", "huge"] }]["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "align",
    "list",
    "bullet",
    "blockquote",
    "code-block",
    "link",
    "image",
    "video",
  ];
  const [form] = Form.useForm();
  const [value, setValue] = useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
    form.setFieldsValue({ editor: newValue });
  };
  const handleSubmit = (values) => {
    if (keyLan === "1" && pageSettingCustom) {
      console.log("keyLan1",values);
    }
    if (keyLan === "2"&& pageSettingCustom) {
      console.log("keyLan2",values);
    }
  };
  return (
    <Form form={form} onFinish={handleSubmit}>
      <Form.Item
        name="editor"
        rules={[{ required: true, message: "Vui lòng nhập văn bản" }]}
      >
        <ReactQuill
          theme="snow"
          value={value}
          onChange={handleChange}
          placeholder="Viết gì đó...."
          modules={modules}
          formats={formats}
        />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button
            htmlType="reset"
            danger
            icon={<LeftOutlined />}
          >
            Hủy
          </Button>
          <Button type="primary" htmlType="submit" icon={<CheckOutlined />}>
            Lưu
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
}
