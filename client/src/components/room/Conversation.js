import React, { useState } from "react";

import { Divider, Button, Form, Input } from "antd";
import { SendOutlined } from "@ant-design/icons";

import Message from "../room/Message";
import "../../css/Conversation.css";

export default function Conversation({ userId }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  console.log(messages);

  const sendMessage = () => {
    setMessages([...messages, { userId: userId, text: input }]);
    setInput("");
  };

  return (
    <Divider className="conversation-pane">
      {/*For testing*/}
      <Divider className="messages-container">
        {userId}
        {messages.map((message, index) => (
          <Message message={message} userId={userId} />
        ))}
      </Divider>

      <Form id="message-input" onFinish={sendMessage}>
        <Form.Item rules={[{ required: true }]}>
          <Input.TextArea
            placeholder="Enter a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
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
            disabled={!input}
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
