import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import HeaderBota from "./Header/HeaderBota";
import { items } from "./Sider/menu";
import { Outlet, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;
export default function Body() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  const onClick = (e) => {
    console.log("click", e.key  );
    navigate(e.key);
  };
  return (
    <div className="body">
      <Layout style={{ height: "100vh" }}>
        <Header style={{ display: "flex", backgroundColor: "#e1e1e1" }}>
          <HeaderBota />
        </Header>
        <Layout style={{ backgroundColor: "white" }}>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            style={{
              backgroundColor: "#f6f6f6",
              overflowY: "auto",
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
                
              }}
            />
            <div className="demo-logo-vertical" />
            <Menu
           
              onClick={onClick}
              style={{ backgroundColor: "#f6f6f6", borderInlineEnd: "none" }}
              items={items}
              defaultSelectedKeys={["/home"]}
              defaultOpenKeys={["/home"]}
              mode="vertical"
              triggerSubMenuAction="hover"
            />
          </Sider>
          <Content
            style={{
              margin: "10px 2px",
              padding: 10,
              minHeight: 280,
              background: colorBgContainer,
              overflowY: "auto",
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
