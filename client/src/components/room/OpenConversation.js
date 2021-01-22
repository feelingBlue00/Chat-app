import React, { useState } from "react";

import { Divider, Button, Form, Input } from "antd";
import { SendOutlined } from "@ant-design/icons";

import "../../css/OpenConversation.css";

export default function ConversationInput() {
  const [message, setMessage] = useState("");

  function sendMessage(event) {}

  return (
    <Divider className="conversation">
      <Divider className="messages-container">Hello there!</Divider>
      <Form id="message-input" onFinnish={sendMessage}>
        <Form.Item rules={[{ required: true }]}>
          <Input.TextArea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              height: "20px",
              width: "100%",
              resize: "none",
              radius: "20px",
              display: "inline",
            }}
          />
        </Form.Item>
        <Form.Item name="sendButton">
          <Button
            className="sendButton"
            type="primary"
            htmlType="submit"
            style={{
              size: "middle",
              shape: "circle",
              backgroundColor: "00BFFF",
            }}
            icon={<SendOutlined />}
          />
        </Form.Item>
      </Form>
    </Divider>
  );
}
