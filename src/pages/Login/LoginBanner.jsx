import { HomeTwoTone } from "@ant-design/icons";
import { Button, Col, Divider, Row } from "antd";
import { Header } from "antd/es/layout/layout";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import FormLoginBanner from "./FormLoginBanner";
export default function LoginBanner() {
  const [status, setStatus] = useState(false);
  const handleStatus = () => {
    setStatus(!status);
  };

  return (
    <div>
      <Header className="header_login_banner">
        <img src="./img/logo_bota.png" alt="" />
        <div className="header_login_right">
          <Button type="text">
            <HomeTwoTone />
          </Button>
          <NavLink>
            <Button type="text">GIỚI THIỆU</Button>
          </NavLink>
          <NavLink>
            <Button type="text">BẢNG GIÁ</Button>
          </NavLink>
          <NavLink>
            <Button type="text">TÍNH NĂNG</Button>
          </NavLink>
          <NavLink>
            <Button type="text">KHO ỨNG DỤNG</Button>
          </NavLink>
          <NavLink>
            <Button type="text">KHO GIAO DIỆN</Button>
          </NavLink>
          <NavLink>
            <Button type="text">KHO GIAO DIỆN</Button>
          </NavLink>
        </div>
      </Header>
      <div className="main_login_banner">
        {!status ? (
          <div className="box_login_banner">
            <div className="box_login">
              <Button type="primary" block>
                <NavLink to={"/idweb"}>ĐĂNG NHẬP BẰNG ID BOTA</NavLink>
              </Button>
              <img src="./img/1519276786_icon-login.png" alt="" />
              <Divider />
              <Button onClick={handleStatus}>
                Đăng nhập tài khoản quản trị
              </Button>
            </div>
          </div>
        ) : (
          <Row gutter={[16,16]}>
            <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
              <div className="box_login_banner">
                <div className="box_login">
                  <FormLoginBanner />
                </div>
              </div>
            </Col>
            <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
              <div className="box_login_banner">
                <div className="box_login">
                  <Button type="primary" block>
                    <NavLink to={"/idweb"}>ĐĂNG NHẬP BẰNG ID BOTA</NavLink>
                  </Button>
                  <img src="./img/1519276786_icon-login.png" alt="" />
                  <Divider />
                  <Button onClick={handleStatus}>
                    Đăng nhập tài khoản quản trị
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        )}
      </div>
    </div>
  );
}
