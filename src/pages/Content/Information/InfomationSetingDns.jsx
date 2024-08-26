import {
  HomeFilled,
  MenuOutlined,
  RightOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Divider  } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import FormInfomation from "./Form/FormInfomation";

export default function InfomationSetingDns() {

  return (
    <div>
      <div className="home_body">
        <h2>Thông tin cơ bản</h2>
        <span>Thông tin cơ bản</span>
      </div>
      <div className="home_bodyheader">
        <HomeFilled />
        <NavLink>Trang chủ</NavLink>
        <RightOutlined />
        <NavLink>Thông tin cơ bản</NavLink>
        <RightOutlined />
        <NavLink>Cài đặt tên miền</NavLink>
      </div>
      <div>
        <MenuOutlined style={{ fontSize: "18px", marginRight: "5px" }} />
        <span style={{ fontSize: "18px" }}>Cài đặt tên miền</span>
        <Divider style={{ margin: "10px 0" }} />
        <div
          style={{
            background: "#f2cf87",
            padding: "15px 30px 15px 15px",
            marginBottom: "20px",
          }}
        >
          <b>Địa chỉ IP của bạn:</b>
          <span style={{ color: "red", fontWeight: "bold" }}>
            118.70.175.200
          </span>
          <p>
            Để cài đặt tên miền riêng cho website của bạn trên hệ thống BOTA chỉ
            cần <span style={{ fontWeight: "bold", color: "red" }}>2 bước</span>{" "}
            rất đơn giản và{" "}
            <span style={{ fontWeight: "bold", color: "red" }}>mất 30s</span>.
            Sau khi cài đặt hoàn thành, website của bạn sẽ hoạt động hoàn toàn
            bằng tên miền riêng, tức không còn một đường dẫn nào liên quan đến
            BOTA. Website của bạn sẽ đảm bảo giữ 100% thương hiệu của doanh
            nghiệp. Lúc này website bạn có thể SEO trên các bộ máy tìm kiếm và
            được nhận diện hoàn toàn bằng đường dẫn theo tên miền riêng của bạn.
          </p>
          <p>
            <span style={{ fontSize: "20px", fontWeight: 700 }}>1.</span> Bạn
            vào trang quản lý tên miền của bạn đổi Name Servers (NS) sang máy
            chủ DNS của hệ thống BOTA: <NavLink>NS1.WEBBNC.VN</NavLink>
            và <NavLink>NS2.WEBBNC.VN</NavLink>
          </p>
          <p>
            <span style={{ fontSize: "20px", fontWeight: 700 }}>2.</span> Bạn
            điền tên miền của bạn vào phần ô điền tên miền sau đó nhấn nút lưu
            vậy là đã hoàn tất cài đặt tên miền riêng cho website của bạn . Hệ
            thống cho phép bạn cài đặt nhiều tên miền cho một website của bạn
            nên nếu bạn muốn cài đặt thêm tên miền riêng chỉ cần nháy vào nút
            thêm tên miền, sau đó thực hiện các bước như cài đặt tên miền đầu
            tiên bạn đã cài đặt.
          </p>
          <p>
            Mọi thắc mắc bạn có thể liên hệ phần chăm sóc của BOTA để được tư
            vấn hoàn toàn miễn phí. Xin chân thành cảm ơn quý khách đã sử dụng
            dịch vụ của BOTA !!!
          </p>
        </div>
      </div>
      <div style={{ border: "1px solid #e1e1e1", padding: "20px" }}>
        <div>
          <UnorderedListOutlined
            rotate={-90}
            style={{ color: "#e26a6a", fontSize: "16px" }}
          />
          <span
            style={{
              textTransform: "uppercase",
              color: "#e26a6a",
              fontWeight: 700,
            }}
          >
            Cài đặt tên miền riêng cho website của bạn
          </span>
        </div>
        <Divider />
        <FormInfomation/>
      </div>
    </div>
  );
}
