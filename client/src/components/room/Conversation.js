import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import { Divider, Button, Form, Input } from "antd";
import { SendOutlined } from "@ant-design/icons";

import Messages from "../room/Messages";
import Status from "../room/Status";
import UploadFile from "./UploadFile";
import "../../css/Conversation.css";

let socket;

const Conversation = ({ userName, location }) => {
  const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };

  const buttonItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const ENDPOINT = "localhost:5000";

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  useEffect(() => {
    socket = io.connect(ENDPOINT);
    const { name, room } = queryString.parse(location.search);

    setName(name);
    setRoom(room);

    socket.emit("login", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  return (
    <div className="conversation-pane">
      <Divider className="status">
        <Status room={room} />
      </Divider>
      <div className="messages">
        <Messages messages={messages} name={name} />
      </div>
      <div className="input-field">
        <Form
          id="message-input"
          onFinish={sendMessage}
          layout="inline"
          style={{ alignItems: "center" }}
        >
          <Form.Item>
            <UploadFile />
          </Form.Item>
          <Form.Item rules={[{ required: true }]} {...formItemLayout}>
            <Input.TextArea
              placeholder="Enter a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onPressEnter={(e) => sendMessage(e)}
              style={{
                height: "20px",
                width: "100%",
                resize: "none",
                radius: "20px",
              }}
            />
          </Form.Item>
          <Form.Item name="sendButton" {...buttonItemLayout}>
            <Button
              className="sendButton"
              type="primary"
              disabled={!message}
              onClick={(e) => sendMessage(e)}
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
    </div>
  );
};

export default Conversation;
