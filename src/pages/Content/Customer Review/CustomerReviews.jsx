import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  HomeFilled,
  MenuFoldOutlined,
  ReloadOutlined,
  RightOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Input,
  Popconfirm,
  Row,
  Select,
  Space,
  Table,
  Tabs,
} from "antd";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const columns = [
  {
    title: "Hình Ảnh",
    dataIndex: "img",
  },
  {
    title: "Tên sản phẩm",
    dataIndex: "namesp",
  },
  {
    title: "Mã sản phẩm",
    dataIndex: "masp",
  },
  {
    title: "Giá sản phẩm",
    dataIndex: "giasp",
  },
  {
    title: "Sắp xếp",
    dataIndex: "sapxep",
  },
  {
    title: "Trạng thái",
    dataIndex: "masp",
  },
  {
    title: "Hành Động",
    dataIndex: "action",
    render: (_, record) => (
      <>
        <Space size={8}>
          <Button type="primary" icon={<EyeOutlined />}></Button>
          <Button icon={<ReloadOutlined />}></Button>
          <Button icon={<EditOutlined />}></Button>
          {true ? (
            <Popconfirm title="Sure to delete?">
              <Button type="primary" danger icon={<DeleteOutlined />}></Button>
            </Popconfirm>
          ) : null}
        </Space>
      </>
    ),
  },
];
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    img: `Edward King ${i}`,
    namesp: 32,
    giasp: `London, Park Lane no. ${i}`,
    sapxep: `London, Park Lane no. ${i}`,
    masp: "tung",
  });
}
export default function CustomerReviews() {
  const onChange = (key) => {
    console.log(key);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const handleChange2 = (value) => {
    console.log(`selected ${value}`);
  };
  const handleDelete = (key) => {
    const newData = data.filter((item) => item.key !== key);
    // setDataSource(newData);
  };
  const onChangeDate = (date, dateString) => {
    console.log(date, dateString);
  };
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  const items = [
    {
      key: "1",
      label: `Tiếng Việt`,
      children: (
        <div>
          <Row gutter={[16, 16]}>
            <Col xl={3} lg={7} md={8} sm={12}>
              <DatePicker
                placeholder="Tìm theo ngày tháng"
                onChange={onChangeDate}
              />
            </Col>
            <Col xl={4} lg={7} md={8} sm={12}>
              <Input placeholder="Tìm theo tên" style={{ width: "200px" }} />
            </Col>
            <Col xl={4} lg={7} md={8} sm={12}>
              <Input
                placeholder="Tìm theo điện thoại"
                style={{ width: "200px" }}
              />
            </Col>
            <Col xl={4} lg={7} md={8} sm={12}>
              <Input
                placeholder="Tìm theo điện Email"
                style={{ width: "200px" }}
              />
            </Col>
            <Col xl={3} lg={7} md={8} sm={12}>
              <Select
                defaultValue="Trạng thái"
                style={{
                  width: 120,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "jack",
                    label: "Trạng thái",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "Yiminghe",
                    label: "yiminghe",
                  },
                ]}
              />
            </Col>
            <Col xl={2} lg={7} md={8} sm={12}>
              <Button type="primary" icon={<SearchOutlined />}>
                Tìm
              </Button>
            </Col>
            <Col xl={1} lg={7} md={8} sm={12}>
              <Button
                type="primary"
                danger
                icon={<DeleteOutlined />}
                onClick={start}
                disabled={!hasSelected}
                loading={loading}
              >
                Xóa
              </Button>
            </Col>
          </Row>

          <div
            style={{
              marginBottom: 16,
            }}
          >
            <span
              style={{
                marginLeft: 8,
              }}
            >
              {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
            </span>
          </div>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
          />
        </div>
      ),
    },
    {
      key: "2",
      label: `Tiếng Anh`,
      children: `Hiện không có dữ liệu nào`,
    },
  ];
  return (
    <div>
      <div className="home_body">
        <h2>Ý kiến khách hàng</h2>
        <span>ý kiến khách hàng</span>
      </div>
      <div className="home_bodyheader">
        <HomeFilled />
        <NavLink>Trang chủ</NavLink>
        <RightOutlined />
        <NavLink>Ý kiến khách hàng</NavLink>
        <RightOutlined />
        <NavLink>Quản lý ý kiến khách hàng</NavLink>
      </div>
      <div className="product">
        <MenuFoldOutlined />
        <span style={{ fontSize: "18px" }}>Quản lý ý kiến khách hàng</span>
      </div>
      <Divider />
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
}
