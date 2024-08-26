import { EyeTwoTone, ShoppingCartOutlined } from "@ant-design/icons";
import React from "react";
import { Button, Table } from "antd";
const columns = [
  {
    title: "STT",
    dataIndex: "stt",
  },
  {
    title: "Mã đơn hàng",
    dataIndex: "madonhang",
  },
  {
    title: "Tên khách hàng",
    dataIndex: "name",
  },
  {
    title: "Điện thoại",
    dataIndex: "phone",
  },
  {
    title: "Thời gian",
    dataIndex: "time",
  },
  {
    title: "Tổng tiền",
    dataIndex: "tongtien",
  },
  {
    title: "Xem",
    dataIndex: "Xem",

    render: (_, record) => (
      <Button type="text">
        <EyeTwoTone />
      </Button>
    ),
  },
];
const data = [
  {
    stt: "1",
    madonhang: "EMP_1688576163",
    name: "Tùng",
    phone: "0382201763",
    time: "10h45",
    tongtien: "100000$",
  },
  {
    stt: "1",
    madonhang: "EMP_1688576163",
    name: "Tùng",
    phone: "0382201763",
    time: "10h45",
    tongtien: "100000$",
  },
  {
    stt: "1",
    madonhang: "EMP_1688576163",
    name: "Tùng",
    phone: "0382201763",
    time: "10h45",
    tongtien: "100000$",
  },
];
export default function TableOrderHome() {
  return (
    <div>
      <div style={{display:'flex',alignItems:'center'}}>
        <ShoppingCartOutlined  style={{fontSize:'30px',marginRight:'5px'}}/>
        <h4 style={{fontSize:'20px'}}>Đơn hàng mới</h4>
      </div>
      <div className="table_order">
        <Table columns={columns} dataSource={data} scroll={{x:400,y:400}} size="small"/>
      </div>
    </div>
  );
}
