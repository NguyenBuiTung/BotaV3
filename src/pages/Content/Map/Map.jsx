import {
  HomeFilled,
  MenuOutlined,
  RightOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Divider, Tabs } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import Form from "./FormMap/Form";

export default function Map() {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Tiếng Việt `,
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
          <div style={{ border: "1px solid #e1e1e1", padding: "20px" }}>
              <Form/>
          </div>
        </>
      ),
    },
    {
      key: "2",
      label: `Tiếng Anh`,
      children: (
        <>
         
        </>
      ),
    },
  ];
  return (
    <div>
      <div className="home_body">
        <h2>Bản đồ</h2>
        <span>Bản đồ</span>
      </div>
      <div className="home_bodyheader">
        <HomeFilled />
        <NavLink>Trang chủ</NavLink>
        <RightOutlined />
        <NavLink>Bản đồ</NavLink>
      </div>
      <MenuOutlined style={{ fontSize: "18px", marginRight: "5px" }} />
      <span style={{ fontSize: "18px" }}>Bản đồ</span>
      <Divider style={{ margin: "10px 0" }} />
      <Tabs items={items} onChange={onChange} type="card" />
    </div>
  );
}
