import {
  CheckOutlined,
  HomeFilled,
  LeftOutlined,
  MenuOutlined,
  RightOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Divider, Form, Tabs, Select, Checkbox, Button, Space } from "antd";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};
export default function Infomation() {
  const [form] = Form.useForm();
  const [selectedLanguage, setSelectedLanguage] = useState([]);

  const handleLanguageChange = (value) => {
    setSelectedLanguage([value]);
  };
  console.log(selectedLanguage);
  const handleCheckboxChange = (checkedValues) => {
    console.log(checkedValues);
    setSelectedLanguage(checkedValues);
  };

  const onChange = (key) => {
    console.log(key);
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const items = [
    {
      key: "1",
      label: `Cài đặt ngôn ngữ `,
      children: (
        <>
          <div
            style={{
              background: "#f2cf87",
              padding: "15px 30px 15px 15px",
              marginBottom: "20px",
            }}
          >
            <span>
              Cài đặt ngôn ngữ cho phép bạn quản lý ngôn ngữ được xuất hiện trên
              trang chủ
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
                CÀI ĐẶT NGÔN NGỮ
              </span>
            </div>
            <Divider />
            <Form
              name="validate_other"
              form={form}
              onFinish={onFinish}
              //   {...formItemLayout}
              requiredMark="optional"
              initialValues={{
                select: "viet",
              }}
              style={{ maxWidth: 400 }}
            >
              <Form.Item
                name="select"
                label="Ngôn ngữ chính"
                rules={[{ required: true,message:"Vui lòng chọn ngôn ngữ" }]}
              >
                <Select
                  placeholder="Vui lòng chọn ngôn ngữ"
                  onChange={handleLanguageChange}
                >
                  <Option value="viet">Tiếng Việt</Option>
                  <Option value="eng">Tiếng Anh</Option>
                </Select>
              </Form.Item>
              <Space>
                <span>Ngôn ngữ hiển thị trang chủ:</span>
                <Checkbox.Group
                  disabled
                  value={selectedLanguage}
                  onChange={handleCheckboxChange}
                >
                  <Checkbox value="viet">Tiếng Việt</Checkbox>
                  <Checkbox value="eng">Tiếng Anh</Checkbox>
                </Checkbox.Group>
              </Space>
              <Divider />
              <Form.Item>
                <Space>
                  <Button htmlType="reset" danger icon={<LeftOutlined />}>
                    Hủy
                  </Button>
                  <Button
                    type="primary"
                    htmlType="submit"
                    icon={<CheckOutlined />}
                  >
                    Lưu
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </div>
        </>
      ),
    },
    {
      key: "2",
      label: `Dịch ngôn ngữ`,
      children: (
        <>
          <div
            style={{
              background: "#f2cf87",
              padding: "15px 30px 15px 15px",
              marginBottom: "20px",
            }}
          >
            <span>
              Khi sử dụng chức năng dịch tự động có thể mất tới vài phút để hoàn
              thành Chức năng hoạt động tốt nhất trên trình duyệt
            </span>
            <span
              style={{
                backgroundColor: "#d84a38",
                padding: "1px 5px",
                color: "#fff",
                marginLeft: "3px",
              }}
            >
              Chrome
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
               Thêm layout
              </span>
            </div>
            <Divider />
           
          </div>
        </>
      ),
    },
  ];
  return (
    <div>
      <div className="home_body">
        <h2>Thông tin cơ bản</h2>
        <span>Thông tin cơ bản</span>
      </div>
      <div className="home_bodyheader">
        <HomeFilled />
        <NavLink>Trang chủ</NavLink>
        <RightOutlined />
        <NavLink>Thông tin cơ bản</NavLink>
      </div>
      <MenuOutlined style={{ fontSize: "18px", marginRight: "5px" }} />
      <span style={{ fontSize: "18px" }}>Cài đặt ngôn ngữ</span>
      <Divider style={{ margin: "10px 0" }} />
      <Tabs items={items} onChange={onChange} type="card" />
    </div>
  );
}
