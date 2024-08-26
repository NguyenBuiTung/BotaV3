import { Button, Input, Select } from "antd";

const items = [
    {
      key: "1",
      label: `Tiếng Việt`,
      children: (
        <div style={{display:'flex',justifyContent:'flex-start'}}>
          <Input placeholder="Tìm theo tiêu đề" style={{width:'200px'}}/>
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
            // onChange={handleChange}
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
          <Button type="primary">Tìm</Button>
        </div>
      ),
    },
    {
      key: "2",
      label: `Tiếng Anh`,
      children: `Content of Tab Pane 2`,
    },
  ];