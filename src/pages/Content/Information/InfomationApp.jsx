import { HomeFilled, MenuOutlined, RightOutlined } from "@ant-design/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Checkbox, Col, Form, Row, Space, Divider } from "antd";
export default function InfomationApp() {
  const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
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
      </div>
      <div>
        <MenuOutlined style={{ fontSize: "18px", marginRight: "5px" }} />
        <span>Cài đặt modules</span>
        <Divider />
      </div>
      <div style={{ background: "#f2cf87", padding: "15px 30px 15px 15px" }}>
        <span>
          Thiết lập những modules sẽ được phép hiển thị trong quản trị
        </span>
        <div>
          <span
            style={{
              backgroundColor: "#d84a38",
              padding: "1px 5px",
              color: "#fff",
              marginLeft: "3px",
            }}
          >
            Lưu ý:
          </span>
          <span>Hãy cân nhắc thật kĩ lưỡng trước khi sử dụng tùy chọn này</span>
        </div>
    
      </div>
      <Divider/>
      <div style={{ boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)" }}>
        <MenuOutlined style={{color:'#e26a6a',fontSize:'18px',verticalAlign:'bottom'}} />
        <span style={{textTransform:'uppercase',color:'#e26a6a',fontWeight:700}}>Cài đặt modules</span>
        <Divider />
        <Form
          name="validate_other"
          {...formItemLayout}
          onFinish={onFinish}
          initialValues={{
            "checkbox-group": ["A", "B","C"],
          }}
          style={{
            maxWidth: 1600,
            padding: "20px",
          }}
        >
          <Form.Item name="checkbox-group">
            <Checkbox.Group>
              <Row gutter={[16,16]}>
                <Col xl={6} lg={8} sm={12} md={12}>
                  <Checkbox
                    value="A"
                    style={{
                      lineHeight: "32px",
                    }}
                    disabled
                  >
                    Cấu hình
                  </Checkbox>
                </Col>
                <Col xl={6} lg={8} sm={12} md={12}>
                  <Checkbox
                    value="B"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Sản phẩm
                  </Checkbox>
                </Col>
                <Col xl={6} lg={8} sm={12} md={12}>
                  <Checkbox
                    value="C"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Hỏi đáp
                  </Checkbox>
                </Col>
                <Col xl={6} lg={8} sm={12} md={12}>
                  <Checkbox
                    value="D"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Album
                  </Checkbox>
                </Col>
                <Col xl={6} lg={8} sm={12} md={12}>
                  <Checkbox
                    value="E"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Tin tức
                  </Checkbox>
                </Col>
                <Col xl={6} lg={8} sm={12} md={12}>
                  <Checkbox
                    value="F"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Trang chuyên mục
                  </Checkbox>
                </Col>
                <Col xl={6} lg={8} sm={12} md={12}>
                  <Checkbox
                    value="F"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Tuyển dụng
                  </Checkbox>
                </Col>
                <Col xl={6} lg={8} sm={12} md={12}>
                  <Checkbox
                    value="F"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Giới thiệu
                  </Checkbox>
                </Col>
                <Col xl={6} lg={8} sm={12} md={12}>
                  <Checkbox
                    value="F"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Video
                  </Checkbox>
                </Col>
                <Col xl={6} lg={8} sm={12} md={12}>
                  <Checkbox
                    value="F"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Ý kiến khách hàng
                  </Checkbox>
                </Col>
                <Col xl={6} lg={8} sm={12} md={12}>
                  <Checkbox
                    value="F"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Liên hệ
                  </Checkbox>
                </Col>
                <Col xl={6} lg={8} sm={12} md={12}>
                  <Checkbox
                    value="F"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Menu
                  </Checkbox>
                </Col>
                <Col xl={6} lg={8} sm={12} md={12}>
                  <Checkbox
                    value="F"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Doccument
                  </Checkbox>
                </Col>
                <Col xl={6} lg={8} sm={12} md={12}>
                  <Checkbox
                    value="F"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Giao diện
                  </Checkbox>
                </Col>
                <Col xl={6} lg={8} sm={12} md={12}>
                  <Checkbox
                    value="F"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Marketing Tool
                  </Checkbox>
                </Col>
                <Col xl={6} lg={8} sm={12} md={12}>
                  <Checkbox
                    value="F"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Quảng cáo
                  </Checkbox>
                </Col>
                <Col xl={6} lg={8} sm={12} md={12}>
                  <Checkbox
                    value="F"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Báo cáo
                  </Checkbox>
                </Col>
                <Col xl={6} lg={8} sm={12} md={12}>
                  <Checkbox
                    value="F"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Cài đặt bản đồ
                  </Checkbox>
                </Col>
              
                <Col xl={6} lg={8} sm={12} md={12}>
                  <Checkbox
                    value="F"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Thông báo
                  </Checkbox>
                </Col>
                <Col xl={6} lg={8} sm={12} md={12}>
                  <Checkbox
                    value="F"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Kết nối Nhanh.vn
                  </Checkbox>
                </Col>
                <Col xl={6} lg={8} sm={12} md={12}>
                  <Checkbox
                    value="F"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Quản lí tập tin
                  </Checkbox>
                </Col>
                <Col xl={6} lg={8} sm={12} md={12}>
                  <Checkbox
                    value="F"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Phân quyền
                  </Checkbox>
                </Col>
                <Col xl={6} lg={8} sm={12} md={12}>
                  <Checkbox
                    value="F"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Danh sách đăng kí nhận tin
                  </Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              span: 6,
              offset: 6,
            }}
          >
            <Space>
              <Button type="primary" htmlType="submit">
                Lưu
              </Button>
              <Button htmlType="reset">Hủy</Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
