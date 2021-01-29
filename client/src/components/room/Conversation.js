import React, { useState, useEffect } from "react";
import shortid from "shortid";
import queryString from "query-string";
import io from "socket.io-client";

import { Divider, Button, Form, Input } from "antd";
import { SendOutlined } from "@ant-design/icons";

import Message from "../room/Message";
import "../../css/Conversation.css";

let socket;

const Conversation = ({ userId, location }) => {
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
  const [id, setId] = useState("");
  const [room, setRoom] = useState("");
  const ENDPOINT = "localhost:5000";

  console.log(messages);

  const sendMessage = () => {
    setMessages([...messages, { userId: userId, text: input }]);
    setInput("");
  };

  useEffect(() => {
    const { id, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setId(id);
    setRoom(room);

    socket.emit("conversation", { id, room }, () => {});

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [ENDPOINT, location.search]);

  return (
    <div className="conversation-pane">
      {/*For testing*/}
      <Divider className="name-displayed">{userId}</Divider>

      <div className="messages-container">
        {messages.map((message, key) => (
          <Message key={shortid.generate()} message={message} userId={userId} />
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
};

export default Conversation;
