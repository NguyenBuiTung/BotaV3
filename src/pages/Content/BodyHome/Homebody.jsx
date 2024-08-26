import {
  CodepenOutlined,
  CommentOutlined,
  HomeFilled,
  MailOutlined,
  RightOutlined,
  ShoppingCartOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Card, Col, Row } from "antd";
import TableOrderHome from "./TableOrderHome";
import FooterHomeBody from "./FooterHomeBody";
export default function Homebody() {
  const navigate=useNavigate()
  return (
    <>
      <div className="home_body">
        <h2>Trang chủ</h2>
        <span>Quản trị website</span>
      </div>
      <div className="home_bodyheader">
        <HomeFilled />
        <NavLink>Trang chủ</NavLink>
        <RightOutlined />
        <NavLink>Hệ thống quản trị</NavLink>
      </div>
      <div className="detail_product">
        <Row gutter={[16, 16]}>
          <Col xxl={4} xl={4} lg={8} md={8} sm={24} xs={24}>
            <Card
              style={{
                backgroundColor: "#e35b5a",
              }}
            >
              <div className="detail_card">
                <CodepenOutlined />
                <div className="card_in">
                  <h3>1350 </h3>
                  <p>Sản phẩm</p>
                </div>
              </div>
              <Button onClick={()=>navigate('/home/product')}>Xem chi tiết</Button>
            </Card>
          </Col>
          <Col xxl={4} xl={4} lg={8} md={8} sm={24} xs={24}>
            <Card
              style={{
                backgroundColor: "#44b6ae",
              }}
            >
              <div className="detail_card">
                <ShoppingCartOutlined />
                <div className="card_in">
                  <h3>192 </h3>
                  <p>Đơn hàng</p>
                </div>
              </div>

              <Button onClick={()=>navigate('/home/order-management')}>Xem chi tiết</Button>
            </Card>
          </Col>
          <Col xxl={4} xl={4} lg={8} md={8} sm={24} xs={24}>
            <Card
              style={{
                backgroundColor: "#8775a7",
              }}
            >
              <div className="detail_card">
                <MailOutlined />
                <div className="card_in">
                  <h3>0</h3>
                  <p>Liên hệ</p>
                </div>
              </div>
              <Button onClick={()=>navigate('/home/contact-management')}>Xem chi tiết</Button>
            </Card>
          </Col>
          <Col xxl={4} xl={4} lg={8} md={8} sm={24} xs={24}>
            <Card
              style={{
                backgroundColor: "#578ebe",
              }}
            >
              <div className="detail_card">
                <CommentOutlined />
                <div className="card_in">
                  <h3>0</h3>
                  <p>Ý kiến khách hàng</p>
                </div>
              </div>
              <Button onClick={()=>navigate('/home/customer-review')}>Xem chi tiết</Button>
            </Card>
          </Col>
          <Col xxl={4} xl={4} lg={8} md={8} sm={24} xs={24}>
            <Card
              style={{
                backgroundColor: "#578ebe",
              }}
            >
              <div className="detail_card">
                <UsergroupAddOutlined />
                <div className="card_in">
                  <h3>5</h3>
                  <p>Thành viên</p>
                </div>
              </div>
              <Button onClick={()=>navigate('/home/member')} >Xem chi tiết</Button>
            </Card>
          </Col>
        </Row>
      </div>
      <div>
        <TableOrderHome />
      </div>
      <div className="footer_home">
        <FooterHomeBody/>
      </div>
    </>
  );
}
