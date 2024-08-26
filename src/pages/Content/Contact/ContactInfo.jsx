import {
  HomeFilled,
  InfoCircleOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Divider, Tabs } from "antd";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import InfoV from "./InfoVietnames/InfoV";

export default function ContactInfo() {
    const [activekey, setActivekey] = useState();
    const handleChange = (key) => {
      setActivekey(key);
    };
      const items = [
        {
          key: '1',
          label: `Tiếng Việt`,
          children: (
            <InfoV keyLan={activekey}/>
          )
        },
        {
          key: '2',
          label: `Tiếng Anh`,
          children: `Content of Tab Pane 2`,
        },
      ]
  return (
    <div>
      <div className="home_body">
        <h2>Liên hệ</h2>
        <span>Liên hệ</span>
      </div>
      <div className="home_bodyheader">
        <HomeFilled />
        <NavLink>Trang chủ</NavLink>
        <RightOutlined />
        <NavLink>Liên hệ</NavLink>
        <RightOutlined />
        <NavLink>Thông tin liên hệ </NavLink>
      </div>
      <InfoCircleOutlined />
      <span style={{ fontSize: "18px" }}>Thông tin liên hệ</span>
      <Divider/>
      <Tabs activeKey={activekey} items={items} onChange={handleChange} />
    </div>
  )
}
