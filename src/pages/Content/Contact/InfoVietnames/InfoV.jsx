import {
  CheckOutlined,
  LeftOutlined,
  PlusOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import {
  Button,
  Divider,
  Form,
  Image,
  Input,
  Modal,
  Select,
  Space,
  Upload,
  message,
} from "antd";
import React, { useState } from "react";
import TextEditorAlone from "../../../../components/TextEditor/TextEditorAlone";
import TextArea from "antd/es/input/TextArea";
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

export default function InfoV({ keyLan }) {
  const [fileList, setFileList] = useState([]);

  const handleChange = ({ fileList }) => {
    console.log(fileList);
    setFileList(fileList);
    if (fileList[0]?.status === "done") {
      message.success(`Tải ảnh lên thành công`);
    } else if (fileList[0]?.status === "error") {
      message.error(fileList[0]?.response?.content);
    }
  };

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const handlePreview = (file) => {
    // console.log(file)
    // Hiển thị hình ảnh trong modal
    Modal.info({
      title: "Xem trước hình ảnh",
      content: <Image src={file.response.content.avatar} />,
    });
  };
  const uploadButton = (
    <div>
      <PlusOutlined />
      <p> Thay ảnh </p>
    </div>
  );
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div>
      <div
        style={{
          background: "#f2cf87",
          padding: "15px 30px 15px 15px",
          marginBottom: "20px",
        }}
      >
        <span>Bạn đang đăng dữ liệu với ngôn ngữ</span>
        <span
          style={{
            backgroundColor: "#d84a38",
            padding: "1px 5px",
            color: "#fff",
            marginLeft: "3px",
          }}
        >
          Tiếng Việt
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
            Thông tin liên hệ
          </span>
        </div>
        <Divider />
        <Form
          name="validate_other"
          {...formItemLayout}
          onFinish={onFinish}
          initialValues={{}}
        >
          <TextEditorAlone />
          <Form.Item
            name="avatar"
            label="Ảnh đại diện"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload
              name="formFile"
              // beforeUpload={beforeUpload}
              onChange={handleChange}
              onPreview={handlePreview}
              action="https://airbnbnew.cybersoft.edu.vn/api/users/upload-avatar"
              headers={{
                token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMwNTUiLCJlbWFpbCI6Im5ndXllbmJ1aXR1bmc5OUBnbWFpbC5jb20iLCJyb2xlIjoiVVNFUiIsIm5iZiI6MTY4OTkwMzQwMywiZXhwIjoxNjkwNTA4MjAzfQ.8pDonRMvMbyu4PwMjZlX8jFMzlAYeejSwheRmzeQCIo`,
                tokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAwMSIsIkhldEhhblN0cmluZyI6IjMwLzA5LzIwMzEiLCJIZXRIYW5UaW1lIjoiMTk0ODQ5MjgwMDAwMCIsIm5iZiI6MTYwMTIyNjAwMCwiZXhwIjoxOTQ4NjQwNDAwfQ.4l-eTzlgVnFczfvc2Or7BNPOcaesY3Kwc8RoNm-o-6M`,
              }}
              listType="picture-card"
            >
              {fileList.length >= 1 ? null : uploadButton}
            </Upload>
          </Form.Item>
          <Form.Item
            name="icon"
            label="Biểu tượng"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload
              name="formFile"
              // beforeUpload={beforeUpload}
              onChange={handleChange}
              onPreview={handlePreview}
              action="https://airbnbnew.cybersoft.edu.vn/api/users/upload-avatar"
              headers={{
                token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMwNTUiLCJlbWFpbCI6Im5ndXllbmJ1aXR1bmc5OUBnbWFpbC5jb20iLCJyb2xlIjoiVVNFUiIsIm5iZiI6MTY4OTkwMzQwMywiZXhwIjoxNjkwNTA4MjAzfQ.8pDonRMvMbyu4PwMjZlX8jFMzlAYeejSwheRmzeQCIo`,
                tokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAwMSIsIkhldEhhblN0cmluZyI6IjMwLzA5LzIwMzEiLCJIZXRIYW5UaW1lIjoiMTk0ODQ5MjgwMDAwMCIsIm5iZiI6MTYwMTIyNjAwMCwiZXhwIjoxOTQ4NjQwNDAwfQ.4l-eTzlgVnFczfvc2Or7BNPOcaesY3Kwc8RoNm-o-6M`,
              }}
              listType="picture-card"
            >
              {fileList.length >= 1 ? null : uploadButton}
            </Upload>
          </Form.Item>
          <Form.Item
            name="background"
            label="Ảnh nền"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload
              name="formFile"
              // beforeUpload={beforeUpload}
              onChange={handleChange}
              onPreview={handlePreview}
              action="https://airbnbnew.cybersoft.edu.vn/api/users/upload-avatar"
              headers={{
                token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMwNTUiLCJlbWFpbCI6Im5ndXllbmJ1aXR1bmc5OUBnbWFpbC5jb20iLCJyb2xlIjoiVVNFUiIsIm5iZiI6MTY4OTkwMzQwMywiZXhwIjoxNjkwNTA4MjAzfQ.8pDonRMvMbyu4PwMjZlX8jFMzlAYeejSwheRmzeQCIo`,
                tokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAwMSIsIkhldEhhblN0cmluZyI6IjMwLzA5LzIwMzEiLCJIZXRIYW5UaW1lIjoiMTk0ODQ5MjgwMDAwMCIsIm5iZiI6MTYwMTIyNjAwMCwiZXhwIjoxOTQ4NjQwNDAwfQ.4l-eTzlgVnFczfvc2Or7BNPOcaesY3Kwc8RoNm-o-6M`,
              }}
              listType="picture-card"
            >
              {fileList.length >= 1 ? null : uploadButton}
            </Upload>
          </Form.Item>
          <Form.Item
            name="code"
            label="Mã nhúng bản đồ"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mã nhúng bản đồ",
              },
            ]}
          >
            <TextArea maxLength={100} />
          </Form.Item>
          <Form.Item
            name="active"
            label="Kích hoạt"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Vui lòng chọn yêu cầu !",
              },
            ]}
          >
            <Select placeholder="Vui lòng chọn " style={{ width: 250 }}>
              <Option value="1">Kích hoạt</Option>
              <Option value="2">Không kích hoạt</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập email",
              },
              {
                type: "email",
                message: "Email bạn nhập không hợp lệ!",
              },
            ]}
          >
            <Input style={{ width: 250 }} />
          </Form.Item>
          <Divider/>
          <Form.Item
            wrapperCol={{
              span: 12,
              offset: 6,
            }}
          >
            <Space>
              <Button htmlType="reset" icon={<LeftOutlined />} danger>
                Hủy
              </Button>
              <Button type="primary" htmlType="submit" icon={<CheckOutlined />}>
                Lưu
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
