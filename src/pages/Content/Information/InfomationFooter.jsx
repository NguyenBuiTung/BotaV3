import {
  HomeFilled,
  MenuOutlined,
  RightOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Divider, Tabs } from "antd";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import TextEditor from "../../../components/TextEditor/TextEditor";
import SwitchPage from "./Switch/SwitchPage";

export default function InfomationFooter() {
  const [activekey, setActivekey] = useState();
  const handleChange = (key) => {
    setActivekey(key);
  };
  const item2 = [
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
                Nhập thông tin chân trang cho website của bạn
              </span>
            </div>
            <Divider />
            <TextEditor keyLan={activekey} />
          </div>
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
                Nhập thông tin chân trang cho website của bạn
              </span>
            </div>
            <Divider />
            <TextEditor keyLan={activekey} />
          </div>
        </>
      ),
    },
  ];
  const items = [
    {
      key: "1",
      label: `Thông tin chân trang`,
      children: (
        <>
          <Tabs activeKey={activekey} items={item2} onChange={handleChange} />
        </>
      ),
    },
    {
      key: "2",
      label: `Quảng cáo chân trang`,
      children: (
        <>
          <SwitchPage />
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
        <RightOutlined />
        <NavLink>Quản lý chân trang</NavLink>
      </div>
      <div>
        <MenuOutlined style={{ fontSize: "18px", marginRight: "5px" }} />
        <span>Quản lý chân trang</span>
        <Divider style={{ margin: "10px 0" }} />
        <Tabs defaultActiveKey="1" items={items} type="card" />
      </div>
    </div>
  );
}
