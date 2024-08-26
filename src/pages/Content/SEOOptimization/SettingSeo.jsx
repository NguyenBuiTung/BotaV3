import {
  HomeFilled,
  MenuOutlined,
  RightOutlined,
} from "@ant-design/icons";
import {  Divider, Tabs } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import SetingTab2 from "./SetingTab2";
import SetingTab1 from "./SetingTab1";
import SetingTab3 from "./SetingTab3";
import SetingTab4 from "./SetingTab4";
import SetingTab5 from "./SetingTab5";
import SetingTab7 from "./SetingTab7";
import SetingTab8 from "./SetingTab8";

export default function SettingSeo() {
  const onChange = (key) => {
    // console.log(key);
  };

  const items = [
    {
      key: "1",
      label: `SEO URL`,
      children: (
        <>
          <SetingTab1 />
        </>
      ),
    },
    {
      key: "2",
      label: `Cài đặt dạng tên miền`,
      children: (
        <div style={{ padding: "20px 0 " }}>
          <SetingTab2 />
        </div>
      ),
    },
    {
      key: "3",
      label: `Google Authorship`,
      children: (
        <>
          <SetingTab3 />
        </>
      ),
    },
    {
      key: "4",
      label: `Quản lý file robot.txt`,
      children: (
        <SetingTab4/>
      ),
    },
    {
      key: "5",
      label: `Google analytics`,
      children: (
        <SetingTab5/>
      ),
    },
    {
      key: "6",
      label: `Google sitemap`,
      children: `Hiện không có dữ liệu nào`,
    },
    {
      key: "7",
      label: `Quản lý tags`,
      children: (
        <div>
            <SetingTab7/>
        </div>
      ),
    },
    {
      key: "8",
      label: `Chuyển hướng URL`,
      children: (
        <SetingTab8/>
      ),
    },
  ];

  return (
    <div>
      <div className="home_body">
        <h2>Tối ưu hóa tìm kiếm</h2>
        <span>Tối ưu hóa tìm kiếm</span>
      </div>
      <div className="home_bodyheader">
        <HomeFilled />
        <NavLink>Trang chủ</NavLink>
        <RightOutlined />
        <NavLink>Tối ưu hóa tìm kiếm</NavLink>
        <RightOutlined />
        <NavLink>Tối ưu hóa tìm kiếm</NavLink>
      </div>
      <Divider />
      <div>
        <MenuOutlined style={{ fontSize: "18px", marginRight: "5px" }} />
        <span style={{ fontSize: "18px" }}>Tối ưu hóa tìm kiếm</span>
        <Divider />
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          type="card"
        />
      </div>
    </div>
  );
}
