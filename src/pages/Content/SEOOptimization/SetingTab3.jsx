import { CheckOutlined } from '@ant-design/icons'
import { Button, Form, Input, Space } from 'antd'
import React from 'react'
const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
  };
export default function SetingTab3() {
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
      };
  return (
    <div>
         <div
            style={{ background: "#f2cf87", padding: "20px", margin: "20px 0" }}
          >
            <p>
              - Google Authorship là liên kết giữa nội dung bạn viết trên trang
              web của bạn và tiểu sử trên Google+ của bạn. Mục đích chính là để
              xác định thứ hạng tác giả của bạn.
            </p>
            <p>
              <b>Bước 1:</b> Tạo tài khoản Google + và nhớ cập nhật hình đại
              diện cho trang cá nhân Google + của bạn. Sau đó vào đây để thêm
              thông tin về website của bạn tại mục Cộng tác viên.
            </p>
            <p>
              <b>Bước 2:</b> Nhập ID (hoặc tên rút gọn) Google + và nhấn kích
              hoạt ngay tại form phía dưới.
            </p>
            <p>
              <b>Bước 3:</b> Xem trước thiết lập của bạn tại đây.(Khi thiết lập
              thành công, sẽ có hình đại diện Google + của bạn trước link
              website)
            </p>
            <p>
              <b>Lưu ý:</b> Google search chỉ nhận diện khi bạn để avatar Google
              Plus là hình khuôn mặt người.
            </p>
            
          </div>
          <div style={{border:'1px solid red'}}>
              <Form
                name="validate_other"
                {...formItemLayout}
                onFinish={onFinish}
                requiredMark={"optional"}
                style={{
                  maxWidth: 700,
                  padding:10
                }}
              >
                <Form.Item
                  name="id"
                  label="ID(hoặc tên rút gọn) G+"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập ID hoặc tên rút gọn",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="name"
                  label="Tên tác giả"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập tên tác giả",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    span: 12,
                    offset: 6,
                  }}
                >
                  <Space>
                    <Button
                      type="primary"
                      htmlType="submit"
                      icon={<CheckOutlined />}
                    >
                      Kích hoạt
                    </Button>
                    <Button
                      htmlType="reset"
                      //   icon={<RestOutlined />}
                      danger
                      type="primary"
                    >
                      Hủy
                    </Button>
                  </Space>
                </Form.Item>
              </Form>
            </div>
    </div>
  )
}
