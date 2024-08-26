import { CloudSyncOutlined, RestOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Form, Input, Row, Space } from "antd";
import React from "react";
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};
export default function SetingTab1() {
  const onChangeCheckBox = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div>
      <div style={{ background: "#f2cf87", padding: "20px", margin: "20px 0" }}>
        <div>Bật SEO URL cho Website</div>
      </div>
      <Checkbox onChange={onChangeCheckBox}>Bật SEO URL</Checkbox>
      <Form
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
        requiredMark={"optional"}
        initialValues={{
          sanpham: "Emily Pro",
          tintuc: "nhulon",
          album: "0382201763",
          video: "87 Lĩnh nam",
          tuyendung: "nguyenbuitung4@gmail.com",
          hoidap: "Emily Pro",
          lienhe: "Tung",
          bando: "Tung",
          gioithieu: "Tung",
        }}
        style={{
          maxWidth: 900,
          marginTop: 10,
        }}
      >
        <Row gutter={[16, 16]}>
          <Col xl={18} lg={12} md={24} sm={24}>
            <Form.Item
              name="sanpham"
              label="Sản phẩm"
              rules={[
                {
                  required: true,
                  message: "Please input your name",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="tintuc"
              label="Tin tức"
              rules={[
                {
                  required: true,
                  message: "Please input your name",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="album"
              label="Album"
              rules={[
                {
                  required: true,
                  message: "Please input your name",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="video"
              label="Video"
              rules={[
                {
                  required: true,
                  message: "Please input your name",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="tuyendung"
              label="Tuyển dụng"
              rules={[
                {
                  required: true,
                  message: "Please input your name",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="hoidap"
              label="Hỏi đáp"
              rules={[
                {
                  required: true,
                  message: "Please input your name",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="lienhe"
              label="Liên hệ"
              rules={[
                {
                  required: true,
                  message: "Please input your name",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="bando"
              label="Bản đồ"
              rules={[
                {
                  required: true,
                  message: "Please input your name",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="gioithieu"
              label="Giới thiệu"
              rules={[
                {
                  required: true,
                  message: "Please input your name",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xl={6} lg={12} md={24} sm={24}></Col>
        </Row>

        <Form.Item
          wrapperCol={{
            span: 12,
            offset: 6,
          }}
        >
          <Space>
            <Button
              type="primary"
              htmlType="submit"
              icon={<CloudSyncOutlined />}
            >
              Cập Nhật Nội Dung
            </Button>
            <Button
              htmlType="reset"
              icon={<RestOutlined />}
              danger
              type="primary"
            >
              Hủy
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
}
