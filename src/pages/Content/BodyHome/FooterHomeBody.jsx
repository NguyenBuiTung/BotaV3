import {
  BellOutlined,
  CheckCircleTwoTone,
  PhoneOutlined,
  SkypeOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button, Col, Collapse, Divider, Row } from "antd";
import React from "react";
export default function FooterHomeBody() {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
          <div className="footer_homeleft">
            <BellOutlined />
            <span style={{ fontSize: "18px", fontWeight: 400 }}>
              Thông báo hệ thống
            </span>
            <Divider />
            <div className="box_left">
              <div className="card">
                <div className="col">
                  <CheckCircleTwoTone />
                  <p>BOTA ANALYTICS - chi tiết và trực quan hơn</p>
                </div>
                <Button type="primary">Chi tiết</Button>
              </div>
              <div className="card">
                <div className="col">
                  <CheckCircleTwoTone />
                  <p>BOTA ANALYTICS - chi tiết và trực quan hơn</p>
                </div>
                <Button type="primary">Chi tiết</Button>
              </div>
              <div className="card">
                <div className="col">
                  <CheckCircleTwoTone />
                  <p>BOTA ANALYTICS - chi tiết và trực quan hơn</p>
                </div>
                <Button type="primary">Chi tiết</Button>
              </div>
            </div>
          </div>
        </Col>
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
          <div className="footer_homeright">
            <Collapse
              expandIconPosition={"end"}
              collapsible="icon"
              defaultActiveKey={["1"]}
              items={[
                {
                  key: "1",
                  label: (
                    <>
                      <PhoneOutlined style={{ fontSize: "18px" }} />
                      <span style={{ fontSize: "18px", fontWeight: 400 }}>
                        Chăm sóc khách hàng
                      </span>
                    </>
                  ),
                  children: (
                    <>
                      <div className="card_top ">
                        <img src="./img/143542930350.jpg" alt="" />
                        <div className="info">
                          <h6>Tổng đài tư vấn</h6>
                          <p>24/7</p>
                          <span className="phone">
                            <PhoneOutlined />
                            19002008
                          </span>
                          <div className="icon">
                            <SkypeOutlined />
                            <MailOutlined />
                          </div>
                        </div>
                      </div>
                      <Divider />
                      <div className="card_bot">
                        <PhoneOutlined />
                        <span>Hotline hỗ trợ</span>
                        <div className="bot">
                          <div className="hn">
                            <p>Hà Nội</p>
                            <span>19002008</span>
                          </div>
                          <div className="hcm">
                            <p>TP.Hồ Chí Minh</p>
                            <span>0981673358</span>
                          </div>
                        </div>
                      </div>
                    </>
                  ),
                },
              ]}
            />
          </div>
        </Col>
      </Row>
    </>
  );
}
