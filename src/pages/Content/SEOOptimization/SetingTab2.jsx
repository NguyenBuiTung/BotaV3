import { Popconfirm, Radio, Space, message } from "antd";
import React, { useState } from "react";

export default function SetingTab2() {
  const [value, setValue] = useState(1);
  const confirm = (e) => {
    console.log(value);
    message.success(`Click on ${value}`);
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };
  const onChangeTag2 = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div style={{ background: "#f2cf87", padding: "20px", margin: "20px 0" }}>
        <p>
          Để tối ưu cho SEO website của quý khách hàng hệ thống BOTA đã thiết
          lập chức đăng cài đặt kiểu tên miền hoạt động duy nhất một định dạng
          để tránh tình trạng trùng lặp nội dung của website (double content -
          Thuật ngữ SEO và tiêu chí đánh giá của google trong quá trình làm
          SEO). BOTA sẽ tạo một tên miền (domain) duy nhất có kiểu www hoặc
          không có www " điều này rất quan trọng cho hoạt động SEO website. Hiện
          tại hệ thống BOTA đã đặt mặc định kiểu tên miền là không có www. trước
          tên miền ( Tenmiencuaban.com ).
        </p>
        <p>
          <b>BOTA khuyên quý khách hàng</b>: Nếu quý khách hàng mới sử dụng
          website chưa tiến hành SEO website thì quý khách nếu muốn có thể đổi
          sang dạng đường dẫn tên miền ( www.Tenmiencuaban.com ). Nhưng khi đã
          SEO website và đặt Back Link với đường dẫn Tenmiencuaban.com thì không
          nên đổi sang dang link www.Tenmiencuaban.com nữa và ngược lại .
        </p>
        <p>
          <b>Quý khách hàng chú ý</b>: Khi chạy kiểu dạng đường dẫn tên miền (
          Tenmiencuaban.com ) hay ( www.Tenmiencuaban.com ) Thì tác dụng hoàn
          toàn giống nhau , quan trọng nhất là phải xác định rõ từ đầu chọn duy
          nhất một trong hai kiểu đường dẫn tên miền. BOTA chân thành cảm ơn
          !!!!
        </p>
      </div>
      <div
        style={{
          boxShadow: "-10px -9px 0px -3px rgba(0,0,0,0.1)",
          padding: "20px",
          borderRadius: "10px",
          letterSpacing: "2px",
        }}
      >
        <Radio.Group onChange={onChangeTag2} value={value}>
          <Space direction="vertical">
            <Popconfirm
              color="#fff"
              placement="top"
              title="Cài đặt dạng tên miền"
              description="Cảnh báo:Bạn có chắc chắn muốn chọn cài đặt tên miền dạng này ?"
              onConfirm={confirm}
              onCancel={cancel}
              okText="Đồng ý"
              cancelText="Hủy"
            >
              <Radio value={1}>Kiểu 1:http://Tenmiencuaban.com</Radio>
            </Popconfirm>
            <Popconfirm
              color="#fff"
              title="Cài đặt dạng tên miền"
              description="Cảnh báo:Bạn có chắc chắn muốn chọn cài đặt tên miền dạng này ?"
              onConfirm={confirm}
              onCancel={cancel}
              okText="Đồng ý"
              cancelText="Hủy"
            >
              <Radio value={2}>Kiểu 2:http://www.Tenmiencuaban.com</Radio>
            </Popconfirm>
          </Space>
        </Radio.Group>
      </div>
    </>
  );
}
