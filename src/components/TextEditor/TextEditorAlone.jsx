import { Form } from "antd";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
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
export default function TextEditorAlone() {
  const [value, setValue] = useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <Form.Item
      label="Thông tin tùy biến"
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
  );
}
