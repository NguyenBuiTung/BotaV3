import React from "react";
import { BellTwoTone, HomeFilled } from "@ant-design/icons";
import { Badge, Button, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import logo_bota from "../../assets/img/logo_bota.png"
const items = [
  {
    key: "1",
    label: "Thông tin cá nhân",
  },
  {
    key: "2",
    label: " Thoát",
  },
  {
    key: "3",
    label: "Thoát tất cả",
  },
];
export default function HeaderBota() {
  return (
    <>
      <div className="header_left">
        <img src={logo_bota} alt="logo" />
      </div>
      <div className="header_right">
        {/* <Button  type="text" >
          <Badge size="small" count={3}>
            <BellTwoTone style={{fontSize:'17px'}} />
          </Badge>
        </Button>
        <Dropdown 
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              bota@gmail.com
              <DownOutlined style={{fontSize:'10px',color:'black'}} />
            </Space>
          </a>
        </Dropdown>
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Website:tungvippro
              <DownOutlined style={{fontSize:'10px',color:'black'}} />
            </Space>
          </a>
        </Dropdown>
        <Button type="text" >
        <HomeFilled style={{fontSize:'17px',cursor:'pointer'}} />
        </Button> */}
       
      </div>
    </>
  );
}
