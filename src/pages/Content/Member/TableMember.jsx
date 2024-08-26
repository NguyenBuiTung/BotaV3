import {
  DeleteOutlined,
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
export default function TableMember() {
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
      title: "Tên đăng nhập",
      dataIndex: "madh",
      //   width: '30%',
      editable: true,
    },
    {
      title: "Tên đầy đủ",
      dataIndex: "kh",
    },
    {
      title: "Email",
      dataIndex: "status",
    },
    {
      title: "Điện thoại",
      dataIndex: "thanhtoan",
    },
    {
      title: "Point",
      dataIndex: "total",
    },
    {
      title: "Trạng thái",
      dataIndex: "date",
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
        <Col xl={4} lg={8} md={8} sm={24} xs={24}>
          <Input placeholder="Tìm theo tài khoản" style={{ width: "200px" }} />
        </Col>

        <Col xl={4} lg={8} md={8} sm={24} xs={24}>
          <Input placeholder="Theo email" style={{ width: "100px" }} />
        </Col>
        <Col xl={6} lg={8} md={8} sm={24} xs={24}>
          <Input placeholder="Theo tên thật" style={{ width: "200px" }} />
        </Col>
        <Col xl={4} lg={7} md={8} sm={24} xs={24}>
          <Select
            defaultValue="Giới tính"
            style={{
              width: 120,
            }}
            // onChange={handleChange2}
            options={[
              {
                value: "jack",
                label: "Nam",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
            ]}
          />
        </Col>

        <Col xl={2} lg={8} md={8} sm={24} xs={24}>
          <Button type="primary">Tìm</Button>
        </Col>
        <Col xl={2} lg={8} md={8} sm={24} xs={24}>
          <Button type="primary" danger icon={<DeleteOutlined />}>
            Xóa
          </Button>
        </Col>
      </Row>
      <div style={{ marginTop: "16px" }}>
        <Table
          components={components}
          rowClassName={() => "editable-row"}
          bordered
          dataSource={dataSource}
          columns={columns}
          pagination={true}
        />
      </div>
    </div>
  );
}
