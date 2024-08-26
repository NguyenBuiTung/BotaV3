import {
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  HomeFilled,
  MenuFoldOutlined,
  PlusCircleOutlined,
  ReloadOutlined,
  RightOutlined,
  UndoOutlined,
} from "@ant-design/icons";
import {
  Button,
  Col,
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
export default function Product() {
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
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <Input placeholder="Tìm theo tiêu đề" style={{ width: "200px" }} />
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={[
                {
                  value: "1",
                  label: "Not Identified",
                },
                {
                  value: "2",
                  label: "Closed",
                },
              ]}
            />
            <Select
              showSearch
              style={{
                width: 200,
              }}
              placeholder="Tìm theo danh mục"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={[
                {
                  value: "1",
                  label: "Not Identified",
                },
                {
                  value: "2",
                  label: "Closed",
                },
              ]}
            />
            <Select
              defaultValue="Kiểu sản phẩm"
              style={{
                width: 120,
              }}
              onChange={handleChange}
              options={[
                {
                  value: "jack",
                  label: "Kiểu sản phẩm",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
              ]}
            />
            <Select
              defaultValue="Trạng thái"
              style={{
                width: 120,
              }}
              onChange={handleChange2}
              options={[
                {
                  value: "jack",
                  label: "Trạng thái",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
              ]}
            />
            <Button type="primary">Tìm</Button>
          </div>

          <div>
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
    <>
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
        <NavLink>Danh sách sản phẩm</NavLink>
      </div>
      <div className="product">
        <Row gutter={[8, 8]}>
          <Col xxl={6} xl={6} lg={6} md={24} sm={24} xs={24}>
            <div className="product_left">
              <MenuFoldOutlined />
              <span>Danh sách sản phẩm</span>
            </div>
          </Col>
          <Col xxl={18} xl={18} lg={18} md={24} sm={24} xs={24}>
            <div className="product_right">
              <Row gutter={[8, 8]} justify={"space-between"}>
                <Col xxl={3} xl={4} lg={8} md={8} sm={12} xs={24}>
                  <Button type="primary" icon={<PlusCircleOutlined />}>
                    Thêm mới
                  </Button>
                </Col>
                <Col xxl={5} xl={6} lg={8} md={8} sm={12} xs={24}>
                  <Button
                    type="primary"
                    onClick={start}
                    disabled={!hasSelected}
                    loading={loading}
                    icon={<CopyOutlined />}
                  >
                    Tạo dữ liệu đồng bộ
                  </Button>
                </Col>
                <Col xxl={5} xl={5} lg={8} md={8} sm={12} xs={24}>
                  <Button
                    type="primary"
                    onClick={start}
                    disabled={!hasSelected}
                    loading={loading}
                    icon={<CopyOutlined />}
                  >
                    Sao chép ngôn ngữ
                  </Button>
                </Col>
                <Col xxl={4} xl={4} lg={8} md={8} sm={12} xs={24}>
                  <Button
                    type="primary"
                    onClick={start}
                    disabled={!hasSelected}
                    loading={loading}
                    icon={<CopyOutlined />}
                  >
                    Sao chép
                  </Button>
                </Col>
                <Col xxl={4} xl={3} lg={8} md={8} sm={12} xs={24}>
                  <Button
                    type="primary"
                    onClick={start}
                    disabled={!hasSelected}
                    loading={loading}
                    icon={<UndoOutlined />}
                  >
                    Làm mới
                  </Button>
                </Col>
                <Col xxl={3} xl={2} lg={8} md={8} sm={12} xs={24}>
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
            </div>
          </Col>
        </Row>
      </div>
      <Divider />
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  );
}
