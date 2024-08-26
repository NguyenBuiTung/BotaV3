import {
  CarOutlined,
  DeleteOutlined,
  EyeInvisibleFilled,
  EyeOutlined,
  QuestionCircleOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Popconfirm,
  Row,
  Select,
  Space,
  Table,
  Tooltip,
} from "antd";
import React, { useContext, useEffect, useRef, useState } from "react";
const { RangePicker } = DatePicker;
const EditableContext = React.createContext(null);
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);
  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };
  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({
        ...record,
        ...values,
      });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };
  let childNode = children;
  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};
export default function TableOrderManagement() {
  const [dataSource, setDataSource] = useState([
    {
      key: "0",
      madh: "Edward King 0",
      kh: "32",
      status: "London, Park Lane no. 0",
      thanhtoan: "London, Park Lane no. 0",
      total: "London, Park Lane no. 0",
      date: "London, Park Lane no. 0",
      ghichu: "London, Park Lane no. 0",
      ship: "London, Park Lane no. 0",
    },
    {
      key: "1",
      madh: "Edward King 0",
      kh: "32",
      status: "London, Park Lane no. 0",
      thanhtoan: "London, Park Lane no. 0",
      total: "London, Park Lane no. 0",
      date: "London, Park Lane no. 0",
      ghichu: "London, Park Lane no. 0",
      ship: "London, Park Lane no. 0",
    },
  ]);
  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };
  const defaultColumns = [
    {
      title: "Mã đơn hàng",
      dataIndex: "madh",
      //   width: '30%',
      editable: true,
    },
    {
      title: "Khách hàng",
      dataIndex: "kh",
    },
    {
      title: "Trạng thái đơn hàng",
      dataIndex: "status",
    },
    {
      title: "Hình thức thanh toán",
      dataIndex: "thanhtoan",
    },
    {
      title: "Tổng tiền",
      dataIndex: "total",
    },
    {
      title: "Ngày tạo",
      dataIndex: "date",
    },
    {
      title: "Ghi chú",
      dataIndex: "ghichu",
    },
    {
      title: "Gửi vận chuyển",
      dataIndex: "ship",
    },
    {
      title: "Hành động",
      dataIndex: "operation",
      width: "15%",
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Space size={8}>
            <Tooltip title="Xem chi tiết">
              <Button type="primary" icon={<EyeOutlined />}></Button>
            </Tooltip>
            <Tooltip title="Sản phẩm trong đơn">
              <Button icon={<ShoppingCartOutlined />}></Button>
            </Tooltip>
            <Popconfirm
              title="Xóa sản phẩm"
              description="Bạn có chắc chắn muốn xóa sản phẩm?"
              icon={
                <QuestionCircleOutlined
                  style={{
                    color: "red",
                  }}
                />
              }
              onConfirm={() => handleDelete(record.key)}
            >
              <Button type="primary" danger icon={<DeleteOutlined />}></Button>
            </Popconfirm>
          </Space>
        ) : null,
    },
  ];
  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });
  return (
    <div>
      <Row gutter={[16, 16]} justify={"space-between"}>
        <Col xxl={3} xl={4} lg={8} md={8} sm={24} xs={24}>
          <Input
            placeholder="Tìm theo mã đơn hàng"
            style={{ width: "200px" }}
          />
        </Col>
        <Col xxl={2} xl={2} lg={7} md={8} sm={24} xs={24}>
          <Select
            defaultValue="Trạng thái"
            style={{
              width: 120,
            }}
            // onChange={handleChange2}
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
        </Col>
        <Col xxl={3} xl={4} lg={8} md={8} sm={24} xs={24}>
          <Select
            defaultValue="Hình thức thanh toán"
            style={{
              width: 220,
            }}
            // onChange={handleChange}
            options={[
              {
                value: "jack",
                label: "Thanh toán bằng ATM",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
            ]}
          />
        </Col>
        <Col xxl={5} xl={5} lg={8} md={8} sm={24} xs={24}>
          <RangePicker />
        </Col>
        <Col xxl={1} xl={2} lg={8} md={8} sm={24} xs={24}>
          <Input placeholder="Email" style={{ width: "100px" }} />
        </Col>
        <Col xxl={1} xl={2} lg={8} md={8} sm={24} xs={24}>
          <Input placeholder="Phone" style={{ width: "100px" }} />
        </Col>
        <Col xxl={2} xl={1} lg={8} md={8} sm={24} xs={24}>
          <Button type="primary">Tìm</Button>
        </Col>
        <Col xxl={2} xl={2} lg={8} md={8} sm={24} xs={24}>
          <Button type="primary">Xuất excel</Button>
        </Col>
      </Row>
      <div style={{ marginTop: "16px" }}>
        <Table
          components={components}
          rowClassName={() => "editable-row"}
          bordered
          dataSource={dataSource}
          columns={columns}
          pagination={false}
        />
      </div>
    </div>
  );
}
