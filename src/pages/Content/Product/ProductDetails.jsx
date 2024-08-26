import {
  EditOutlined,
  HomeFilled,
  MenuFoldOutlined,
  PrinterOutlined,
  RightOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Col, Collapse, Divider, Row, Table } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
const columns = [
  {
    title: "STT",
    dataIndex: "key",
  },
  {
    title: "Hình Ảnh",
    dataIndex: "img",
  },
  {
    title: "Tên sản phẩm",
    dataIndex: "name",
  },

  {
    title: "Mã sản phẩm",
    dataIndex: "masp",
  },
  {
    title: "Đơn vị",
    dataIndex: "donvi",
  },
  {
    title: "Số lượng",
    dataIndex: "num",
  },
  {
    title: "Giá tiền",
    dataIndex: "money",
  },
  {
    title: "Tổng tiền",
    dataIndex: "total",
  },
];
const data = [
  {
    key: "1",
    img: "John Brown",
    name: 32,
    masp: "New York No. 1 Lake Park",
    donvi: ["nice", "developer"],
    num: ["nice", "developer"],
    money: ["nice", "developer"],
    total: ["nice", "developer"],
  },
  {
    key: "2",
    img: "John Brown",
    name: 32,
    masp: "New York No. 1 Lake Park",
    donvi: ["nice", "developer"],
    num: ["nice", "developer"],
    money: ["nice", "developer"],
    total: ["nice", "developer"],
  },
];
const item1 = [
  {
    key: "1",
    label: (
      <>
        <UserAddOutlined style={{fontSize:'18px'}} />
        <span style={{fontSize:'20px',color:'blue',fontWeight:'bolder'}}>Người mua hàng</span>
      </>
    ),
    children: (
      <>
        <ul>
          <li>
            <span>Họ Tên :</span>
            <p>Nguyễn Bùi Tùng</p>
          </li>
          <li>
            <span>Tỉnh/Thành phố:</span>
            <p>Hà Nội</p>
          </li>
          <li>
            <span>Quận/Huyện:</span>
            <p>Bắc Từ Liêm</p>
          </li>
          <li>
            <span>Địa chỉ:</span>
            <p>335 Xuân Đỉnh</p>
          </li>
          <li>
            <span>Điện thoại:</span>
            <p>092022022</p>
          </li>
          <li>
            <span>Email:</span>
            <p>nguyenbuitung4@gmail.com</p>
          </li>
          <li>Ghi chú</li>
        </ul>
      </>
    ),
  },
];
const item2 = [
  {
    key: "2",
    label: (
      <>
        <UserOutlined style={{fontSize:'18px'}} />
        <span style={{fontSize:'20px',color:'blue',fontWeight:'bolder'}}>Người nhận hàng</span>
      </>
    ),
    children:(
        <>
        <ul>
          <li>
            <span>Họ Tên :</span>
            <p>Nguyễn Bùi Tùng</p>
          </li>
          <li>
            <span>Tỉnh/Thành phố:</span>
            <p>Hà Nội</p>
          </li>
          <li>
            <span>Quận/Huyện:</span>
            <p>Bắc Từ Liêm</p>
          </li>
          <li>
            <span>Địa chỉ:</span>
            <p>335 Xuân Đỉnh</p>
          </li>
          <li>
            <span>Điện thoại:</span>
            <p>092022022</p>
          </li>
          <li>
            <span>Email:</span>
            <p>nguyenbuitung4@gmail.com</p>
          </li>
          <li>Ghi chú</li>
        </ul>
      </>
    ),
  },
];
const item3 = [
  {
    key: "1",
    label: (
      <>
        <ShoppingCartOutlined style={{fontSize:'18px'}}/>
        <span style={{fontSize:'20px',color:'blue',fontWeight:'bolder'}}>Phương thưc thanh toán</span>
      </>
    ),
    children: (
        <>
        <ul>
          <li>
            <span>Thanh toán :</span>
            <p>Thanh toán tại nhà</p>
          </li>
          <li>
            <span>Thời gian thanh toán:</span>
            <p>10h:30</p>
          </li>
          <li>
            <span>Tổng tiền:</span>
            <p>10000000đ</p>
          </li>
          <li>
            <span>Phí vận chuyển:</span>
            <p>0đ</p>
          </li>
          <li>
            <span>Khuyến mại:</span>
            <p>0đ</p>
          </li>
          <Divider />
          <li>
            <span>Tổng:</span>
            <p>10000000000đ</p>
          </li>
         
        </ul>
      </>
    ),
  },
];
const item4 = [
  {
    key: "1",
    label: (
      <>
        <PrinterOutlined style={{fontSize:'18px'}}/>
        <span style={{fontSize:'20px',color:'blue',fontWeight:'bolder'}}>Thông tin hóa đơn</span>
      </>
    ),
    children: (
        <>
        <ul>
          <li>
            <span>Tên công ty :</span>
            <p>Nguyễn Bùi Tùng</p>
          </li>
          <li>
            <span>Mã số thuế:</span>
            <p>Hà Nội</p>
          </li>
          <li>
            <span>Địa chỉ:</span>
            <p>Bắc Từ Liêm</p>
          </li>
          <li>
            <span>Người đại diện:</span>
            <p>335 Xuân Đỉnh</p>
          </li>
          <li>
            <span>Hình thức thanh toán:</span>
            <p>092022022</p>
          </li>
        </ul>
      </>
    ),
  },
];
export default function ProductDetails() {
  return (
    <div>
      <div className="home_body">
        <h2>Sản Phẩm</h2>
        <span>Sản phẩm</span>
      </div>
      <div className="home_bodyheader">
        <HomeFilled />
        <NavLink>Trang chủ</NavLink>
        <RightOutlined />
        <NavLink>Sản phẩm</NavLink>
        <RightOutlined />
        <NavLink>Thông tin chi tiết đơn hàng</NavLink>
      </div>
      <div>
        <EditOutlined style={{ fontSize: "18px", marginRight: "5px" }} />
        <span>Thông tin chi tiết đơn hàng</span>
        <Divider />
      </div>
      <div className="product">
        <Row gutter={[8, 8]} justify={"space-between"}>
          <Col xl={12} lg={12} md={12} sm={24} xs={24}>
            <div className="product_left">
              <MenuFoldOutlined />
              <span>Danh sách sản phẩm</span>
            </div>
          </Col>
          <Col xl={12} lg={12} md={12} sm={24} xs={24}>
            <div className="product_right">
              <Button type="primary" icon={<PrinterOutlined />}>
                In hóa đơn
              </Button>
            </div>
          </Col>
        </Row>
        <Divider />
        <Table columns={columns} dataSource={data} />
      </div>
      <div className="product-detail-infoorder">
        <Row gutter={[24, 24]}>
          <Col xl={12} lg={12} md={24} sm={24}>
            <Collapse
            
              defaultActiveKey={["1"]}
              items={item1}
              expandIconPosition="end"
            />
          </Col>
          <Col xl={12} lg={12} md={24} sm={24}>
            <Collapse
              defaultActiveKey={["1"]}
              items={item2}
              expandIconPosition="end"
            />
          </Col>
          <Col xl={12} lg={12} md={24} sm={24}>
            <Collapse
              defaultActiveKey={["1"]}
              items={item3}
              expandIconPosition="end"
            />
          </Col>
          <Col xl={12} lg={12} md={24} sm={24}>
            <Collapse
              defaultActiveKey={["1"]}
              items={item4}
              expandIconPosition="end"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
