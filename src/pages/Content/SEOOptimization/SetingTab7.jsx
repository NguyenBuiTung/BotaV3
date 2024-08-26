import {
  DeleteOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Button, Col, Divider, Popconfirm, Row, Space, Table } from "antd";
import React, { useState } from "react";
const columns = [
  {
    title: "Tên tags",
    dataIndex: "name",
  },
  {
    title: "Tiêu đề",
    dataIndex: "title",
  },
  {
    title: "Mô tả tags",
    dataIndex: "describe",
  },

  {
    title: "Hành Động",
    dataIndex: "action",
    render: (_, record) => (
      <>
        <Space size={8}>
          {true ? (
            <Popconfirm title="Sure to delete?" color="#fff">
              <Button type="primary" danger icon={<DeleteOutlined />}></Button>
            </Popconfirm>
          ) : null}
        </Space>
      </>
    ),
  },
];
const data = [];
for (let i = 0; i < 5; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    title: 32,
    describe: `London, Park Lane no. ${i}`,
  });
}
export default function SetingTab7() {
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
  return (
    <div>
      <div>
        <Row  justify={"start"} align={"middle"}>
          <MenuFoldOutlined />
          <span style={{ fontSize: "18px",marginRight:'10px' }}>Danh sách Tags</span>
          <Col xl={18} lg={18} md={8} sm={12} xs={24}>
            <Button
              type="primary"
              onClick={start}
              disabled={!hasSelected}
              loading={loading}
              icon={<DeleteOutlined />}
              danger
            >
              Xóa
            </Button>
          </Col>
        </Row>
      </div>
      <Divider/>
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
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
}
