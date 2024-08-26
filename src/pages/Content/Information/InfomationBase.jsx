import {
  HomeFilled,
  RightOutlined,
  SettingOutlined,
  UnorderedListOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  Button,
  Col,
  Divider,
  Form,
  Image,
  Input,
  Row,
  Select,
  Space,
  Tabs,
  Upload,
} from "antd";

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const { TextArea } = Input;
const provinceData = ["Tỉnh 1", "Tỉnh 2", "Tỉnh 3"];
const cityData = {
  "Tỉnh 1": {
    "Huyện 1": ["Xã 1", "Xã 2", "Xã 3"],
    "Huyện 2": ["Xã 4", "Xã 5", "Xã 6"],
    "Huyện 3": ["Xã 7", "Xã 8", "Xã 9"],
  },
  "Tỉnh 2": {
    "Huyện 4": ["Xã 10", "Xã 11", "Xã 12"],
    "Huyện 5": ["Xã 13", "Xã 14", "Xã 15"],
    "Huyện 6": ["Xã 16", "Xã 17", "Xã 18"],
  },
  "Tỉnh 3": {
    "Huyện 7": ["Xã 19", "Xã 20", "Xã 21"],
    "Huyện 8": ["Xã 22", "Xã 23", "Xã 24"],
    "Huyện 9": ["Xã 25", "Xã 26", "Xã 27"],
  },
};
export default function InfomationBase() {
  const { Option } = Select;
  const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
  };
  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const [cities, setCities] = useState(
    cityData[provinceData[0]][Object.keys(cityData[provinceData[0]])[0]]
  );
  const [selectedProvince, setSelectedProvince] = useState(provinceData[0]);
  const [selectedCity, setSelectedCity] = useState(
    Object.keys(cityData[provinceData[0]])[0]
  );
  const [selectedDistrict, setSelectedDistrict] = useState(
    cityData[provinceData[0]][Object.keys(cityData[provinceData[0]])[0]][0]
  );

  const handleProvinceChange = (value) => {
    setSelectedProvince(value);
    setSelectedCity(Object.keys(cityData[value])[0]);
    setSelectedDistrict(cityData[value][Object.keys(cityData[value])[0]][0]);
    setCities(cityData[value][Object.keys(cityData[value])[0]]);
  };

  const handleCityChange = (value) => {
    setSelectedCity(value);
    setSelectedDistrict(cityData[selectedProvince][value][0]);
    setCities(cityData[selectedProvince][value]);
  };

  const handleDistrictChange = (value) => {
    setSelectedDistrict(value);
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    console.log(selectedProvince);
    console.log(selectedCity);
    console.log(selectedDistrict);
  };
  const items = [
    {
      key: "1",
      label: `Tiếng Việt`,
      children: (
        <div>
          <div
            style={{ background: "#f2cf87", padding: "15px 30px 15px 15px" }}
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
          <Form
            name="validate_other"
            {...formItemLayout}
            onFinish={onFinish}
            initialValues={{
              name: "Emily Pro",
              upload: "",
              phone: "0382201763",
              address: "87 Lĩnh nam",
              Email: "nguyenbuitung4@gmail.com",
              nameweb: "Emily Pro",
            }}
            style={{
              maxWidth: 900,
              marginTop: 10,
            }}
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                  message: "Please input your name",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="upload"
              label="Ảnh đại diện"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Space size={8}>
                <Image
                  width={200}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                <Upload name="logo" action="/upload" listType="picture">
                  <Button type="primary" icon={<UploadOutlined />}>
                    Thay ảnh
                  </Button>
                </Upload>
              </Space>
            </Form.Item>
            <Form.Item
              name="uploadfavicon"
              label="Favicon"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Space size={8}>
                <Image
                  width={200}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                <Upload name="logo" action="/upload" listType="picture">
                  <Button type="primary" icon={<UploadOutlined />}>
                    Thay ảnh
                  </Button>
                </Upload>
              </Space>
            </Form.Item>
            <Form.Item
              name="select"
              label="Tỉnh/TP"
              hasFeedback
              //   rules={[
              //     {
              //       required: true,
              //       message: "Please select your country!",
              //     },
              //   ]}
            >
              <Space size={8}>
              <Select
                defaultValue={selectedProvince}
                style={{ width: 200 }}
                onChange={handleProvinceChange}
                options={provinceData.map((province) => ({
                  label: province,
                  value: province,
                }))}
              ></Select>
              <Select
                style={{ width: 200 }}
                value={selectedCity}
                onChange={handleCityChange}
                options={Object.keys(cityData[selectedProvince]).map(
                  (city) => ({
                    label: city,
                    value: city,
                  })
                )}
              />
              <Select
                style={{ width: 200 }}
                value={selectedDistrict}
                onChange={handleDistrictChange}
                options={cityData[selectedProvince][selectedCity].map(
                  (district) => ({
                    label: district,
                    value: district,
                  })
                )}
              />
              </Space>
            </Form.Item>
            <Form.Item
              name="phone"
              label="Số điện thoại"
              //   rules={[
              //     {
              //       required: true,
              //       message: "Please input your name",
              //     },
              //   ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="address"
              label="Địa chỉ"
              rules={[
                {
                  required: true,
                  message: "Please input your name",
                },
              ]}
            >
              <Input type="text" />
            </Form.Item>
            <Form.Item
              name="Email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Please input your name",
                },
              ]}
            >
              <Input type="email" />
            </Form.Item>
            <Form.Item
              name="nameweb"
              label="Tên chủ web"
              rules={[
                {
                  required: true,
                  message: "Please input your name",
                },
              ]}
            >
              <Input type="text" />
            </Form.Item>

            <div
              className="meta-keyword"
              style={{ boxShadow: "0px 0px 32px -6px rgba(0,0,0,0.1)",padding:'5px',marginBottom:'10px' }}
            >
              <Row gutter={[8, 8]} justify={"start"} align={"middle"}>
                <Col xl={1} lg={1} md={1} sm={24}>
                  <UnorderedListOutlined rotate={-90} style={{color:'#e26a6a'}} />
                </Col>
                <Col xl={5} lg={9} md={12} sm={24}>
                  <h1 style={{color:'#e26a6a',fontWeight:700}}>THẺ META,KEYWORD</h1>
                </Col>
                <Col xl={18} lg={16} md={12} sm={24}>
                  <span style={{fontSize:'13px',lineHeight:'13px',color:'#aaa'}}>
                    Các thẻ meta bên dưới phục vụ cho SEO website của bạn lên
                    các bộ máy tìm kiếm như Google,Yahoo,Bing,..
                  </span>
                </Col>
              </Row>
              <Divider />
              <Form.Item
                name="name"
                label="Thẻ meta tiêu đề"
                rules={[
                  {
                    required: true,
                    message: "Please input your name",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="name"
                label="Từ khóa meta"
                rules={[
                  {
                    required: true,
                    message: "Please input your name",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="name"
                label="Mô tả meta"
                rules={[
                  {
                    required: true,
                    message: "Please input your name",
                  },
                ]}
              >
                <TextArea
                  rows={4}
                  placeholder="maxLength is 500 ký tự"
                  maxLength={500}
                />
              </Form.Item>
            </div>
            <Form.Item
              wrapperCol={{
                span: 12,
                offset: 6,
                
              }}
            >
              <Space>
                <Button type="primary" htmlType="submit">
                  Lưu
                </Button>
                <Button htmlType="reset">Hủy</Button>
              </Space>
            </Form.Item>
          </Form>
        </div>
      ),
    },
    {
      key: "2",
      label: `Tiếng Anh`,
      children: `Hiện không có dữ liệu nào`,
    },
  ];
  const onChange = (key) => {
    console.log(key);
  };

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
        <RightOutlined />
        <NavLink>Cài đặt</NavLink>
      </div>
      <div>
        <SettingOutlined style={{ fontSize: "18px", marginRight: "5px" }} />
        <span>Cài đặt</span>
        <Divider />
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  );
}
