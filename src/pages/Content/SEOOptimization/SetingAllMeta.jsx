import {
  HomeFilled,
  MenuOutlined,
  RightOutlined,
  SaveOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Button, Collapse, Divider, Form, Space, Tabs } from "antd";

import React from "react";
import { NavLink } from "react-router-dom";
import MetaFaceBook from "./SetingMeta/MetaFaceBook";
import MetaHome from "./SetingMeta/MetaHome";
import MetaNew from "./SetingMeta/MetaNew";
import MetaVideo from "./SetingMeta/MetaVideo";
import MetaAlbum from "./SetingMeta/MetaAlbum";

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};
export default function SetingAllMeta() {
  const onChange = (key) => {
    // console.log(key);
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const items = [
    {
      key: "1",
      label: `Tiếng Việt`,
      children: (
        <>
          <Form
            name="validate_other"
            {...formItemLayout}
            onFinish={onFinish}
            initialValues={{
              metatitle: "Bota.vn - Giao diện web00514",
              metakey: "Bota.vn - Giao diện web00514",
              metadesp: "Bota.vn - Giao diện web00514",
              select: "hide",
            }}
            style={{
              maxWidth: 1200,
              padding: 10,
            }}
          >
            <Space
              direction="vertical"
              size="middle"
              style={{
                display: "flex",
              }}
            >
              <Collapse
                defaultActiveKey={["1"]}
                expandIconPosition="end"
                items={[
                  {
                    key: "1",
                    label: (
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
                          Cài đặt admin facebook
                        </span>
                      </div>
                    ),
                    children: <MetaFaceBook />,
                  },
                ]}
                onChange={onChange}
              />
              <Collapse
                expandIconPosition="end"
                items={[
                  {
                    key: "2",
                    label: (
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
                          Meta tại trang chủ
                        </span>
                      </div>
                    ),
                    children: <MetaHome />,
                  },
                ]}
                defaultActiveKey={["2"]}
                onChange={onChange}
              />
              <Collapse
                expandIconPosition="end"
                items={[
                  {
                    key: "3",
                    label: (
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
                          Meta tại trang tin tức
                        </span>
                      </div>
                    ),
                    children: <MetaNew />,
                  },
                ]}
                defaultActiveKey={["3"]}
                onChange={onChange}
              />
              <Collapse
                expandIconPosition="end"
                items={[
                  {
                    key: "4",
                    label: (
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
                          Meta tại trang video
                        </span>
                      </div>
                    ),
                    children: <MetaVideo />,
                  },
                ]}
                defaultActiveKey={["4"]}
                onChange={onChange}
              />
              <Collapse
                expandIconPosition="end"
                items={[
                  {
                    key: "5",
                    label: (
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
                          Meta tại trang album
                        </span>
                      </div>
                    ),
                    children: <MetaAlbum />,
                  },
                ]}
                defaultActiveKey={["5"]}
                onChange={onChange}
              />
            </Space>

            <Form.Item>
              <Button
                style={{ marginTop: "10px" }}
                type="primary"
                htmlType="submit"
                icon={<SaveOutlined />}
              >
                Lưu
              </Button>
            </Form.Item>
          </Form>
        </>
      ),
    },
    {
      key: "2",
      label: `Tiếng Anh`,
      children: <div style={{ padding: "20px 0 " }}></div>,
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
      </div>
      <Divider />
      <div>
        <MenuOutlined style={{ fontSize: "18px", marginRight: "5px" }} />
        <span style={{ fontSize: "18px" }}>Quản lý meta toàn trang</span>
        <Divider />
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          type="line"
        />
      </div>
    </div>
  );
}
