import {
  HomeFilled,
  RightOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Divider,Tabs } from "antd";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import TextEditor from "../../../components/TextEditor/TextEditor";

export default function SettingCustomer() {
    const [activekey, setActivekey] = useState();
    const handleChange = (key) => {
      setActivekey(key);
    };
  const items = [
    {
      key: "1",
      label: `Tiếng Việt`,
      children: (
        <>
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
          <TextEditor keyLan={activekey} pageSettingCustom='pageSettingCustom'/>
        </>
      ),
    },
    {
      key: "2",
      label: `Tiếng Anh`,
      children: (
        <>
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
              Tiếng Anh
            </span>
          </div>
          <TextEditor keyLan={activekey} pageSettingCustom='pageSettingCustom'/>
        </>
      ),
    },
  ];

  return (
    <div>
      <div className="home_body">
        <h2>Ý kiến khách hàng</h2>
        <span>ý kiến khách hàng</span>
      </div>
      <div className="home_bodyheader">
        <HomeFilled />
        <NavLink>Trang chủ</NavLink>
        <RightOutlined />
        <NavLink>Ý kiến khách hàng</NavLink>
        <RightOutlined />
        <NavLink>Cài đặt</NavLink>
      </div>
      <div className="product">
        <SettingOutlined />
        <span style={{ fontSize: "18px" }}>Cài đặt</span>
      </div>
      <Divider />
      <Tabs activeKey={activekey} items={items} onChange={handleChange} />
    </div>
  );
}
