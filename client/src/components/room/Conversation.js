import React, { useState } from "react";

import { Divider, Button, Form, Input } from "antd";
import { SendOutlined } from "@ant-design/icons";

import Message from "../room/Message";
import "../../css/Conversation.css";

export default function Conversation({ userId }) {
  const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };

  const buttonItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  console.log(messages);

  const sendMessage = () => {
    setMessages([...messages, { userId: userId, text: input }]);
    setInput("");
  };

  return (
    <div className="conversation-pane">
      {/*For testing*/}
      <Divider className="name-displayed">{userId}</Divider>

      <div className="messages-container">
        {messages.map((message, index) => (
          <Message message={message} userId={userId} />
        ))}
      </div>

      <Form id="message-input" onFinish={sendMessage} layout="inline">
        <Form.Item rules={[{ required: true }]} {...formItemLayout}>
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
        <Form.Item name="sendButton" {...buttonItemLayout}>
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
    </div>
  );
}
