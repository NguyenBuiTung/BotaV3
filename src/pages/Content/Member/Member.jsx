import { HomeFilled, RightOutlined } from "@ant-design/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import TableMember from "./TableMember";

export default function Member() {
  return (
    <div>
      <div className="home_body">
        <h2>Thành Viên</h2>
        <span>Thông tin thành viên</span>
      </div>
      <div className="home_bodyheader">
        <HomeFilled />
        <NavLink>Trang chủ</NavLink>
        <RightOutlined />
        <NavLink>Thành viên</NavLink>
        <RightOutlined />
        <NavLink>Danh sách thành viên</NavLink>
      </div>
      <div className="member">
        <TableMember />
      </div>
    </div>
  );
}
