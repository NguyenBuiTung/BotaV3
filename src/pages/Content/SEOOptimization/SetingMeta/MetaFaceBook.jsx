import { InfoCircleTwoTone } from "@ant-design/icons";
import { Divider, Form, Input, Select } from "antd";
import React from "react";
const { Option } = Select;
export default function MetaFaceBook() {
  return (
    <div>
      <InfoCircleTwoTone />
      <span style={{ color: "#31708f" }}>
        Thông tin sử dụng để quản lý bình luận facebook
      </span>

      <Form.Item
        name="id"
        label="Admin Facebook ID"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập ID hoặc tên rút gọn",
          },
        ]}
      >
        <Input type="number" min={0} />
      </Form.Item>
      <Form.Item
        name="name"
        label="App Facebook ID"
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
        name="name"
        label="Version App Facebook"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập tên tác giả",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="select" label="Setup analytics" hasFeedback>
        <Select>
          <Option value="hide"></Option>
          <Option value="show">Show</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="name"
        label="Link Facebook Chat"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập tên tác giả",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="google" label="Google Re-marketing">
        <div
          style={{
            border: "1px solid #e1e1e1",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <h3
            style={{
              fontSize: "23px",
              margin: 0,
              fontWeight: 500,
            }}
          >
            Đoạn mã Google Re-marketing mẫu:
          </h3>
          <p>
            Copy phần chữ được đánh dấu màu đỏ tương ứng với đoạn mã Google
            Re-marketing của bạn và dán vào ô phía dưới
          </p>
          <Divider />
          <Input placeholder="ID Google Re-marketing" />
          <code>
            <p>&lt;script type="text/javascript"&gt;</p>
            <p>/ &lt;![CDATA[ /</p>
            <p>
              var google_conversion_id ={" "}
              <b style={{ color: "red" }}>988990967</b>;
            </p>
            <p>var google_custom_params = window.google_tag_params;</p>
            <p>var google_remarketing_only = true;</p>
            <p>/ ]]&gt; /</p>
            <p>&lt;/script&gt;</p>
            <p>
              &lt;script type="text/javascript"
              src="//www.googleadservices.com/pagead/conversion.js"&gt;&lt;/script&gt;
            </p>
            <p>&lt;noscript&gt;</p>
            <p>&lt;div style="display:inline;"&gt;</p>
            <p>
              &lt;img height="1" width="1" style="border-style:none;" alt=""
              src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/
              <b style={{ color: "red" }}>988990967</b>
              /?value=0&amp;guid=ON&amp;script=0"/&gt;
            </p>
            <p>&lt;/div&gt;</p>
            <p>&lt;/noscript&gt;</p>
          </code>
        </div>
      </Form.Item>
      <Form.Item name="facebook" label="Facebook Retarget">
        <div
          style={{
            border: "1px solid #e1e1e1",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <h3
            style={{
              fontSize: "23px",
              margin: 0,
              fontWeight: 500,
            }}
          >
            Đoạn mã Facebook Retarget mẫu:
          </h3>
          <p>
            Copy phần chữ được đánh dấu màu đỏ tương ứng với đoạn mã Facebook
            Retarget của bạn và dán vào ô phía dưới
          </p>
          <Divider />
          <Input placeholder="ID Facebook Re-target" />
          <code>
            <p>&lt;script type="text/javascript"&gt;</p>

            <p>
              fbq('init', '<b style={{ color: "red" }}>FB_PIXEL_ID</b>);
            </p>
            <p>fbq('track', 'PageView');</p>
            <p>&lt;/script&gt;</p>
            <p>&lt;noscript&gt;</p>
            <p>
              &lt;img height="1" width="1" style="display:none"
              src="https://www.facebook.com/tr?id=
              <b style={{ color: "red" }}>FB_PIXEL_ID</b>
              &amp;ev=PageView&amp;noscript=1" /&gt;
            </p>
            <p>&lt;/noscript&gt;</p>
          </code>
        </div>
      </Form.Item>
    </div>
  );
}
