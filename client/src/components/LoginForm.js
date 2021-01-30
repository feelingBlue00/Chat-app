import React, { useState, useEffect } from "react";
import { Form, Input, Button, Divider } from "antd";
import { Link } from "react-router-dom";

import Conversation from "../components/room/Conversation";

const layout = {
  labelCol: {
    span: 8,
  },

  wrapperCol: {
    span: 16,
  },
};

const LoginForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const handleSubmit = () => {
    console.log(name);
    setSubmitted((current) => !current);
  };

  useEffect(() => {
    console.log(submitted);
  }, [submitted]);

  if (submitted) {
    return (
      <div>
        <Conversation userName={name} />
      </div>
    );
  }

  return (
    <Divider className="login-container">
      <h1
        style={{
          fontWeight: "bold",
          fontSize: 18,
          textAlign: "center",
          display: "block",
        }}
      >
        Enter your username and room
      </h1>
      <br />
      <div className="login-form">
        <Form
          {...layout}
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
        >
          <Form.Item
            label="name"
            name="userName"
            rules={[{ required: true, message: "Please enter your user id" }]}
          >
            <Input
              value={name}
              placeholder="Enter your username"
              type="text"
              name="userName"
              autoComplete="off"
              onChange={(event) => setName(event.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="room"
            name="room"
            rules={[{ required: true, message: "Please enter room id" }]}
          >
            <Input
              value={room}
              placeholder="Enter room id"
              type="text"
              name="room"
              autoComplete="off"
              onChange={(event) => setRoom(event.target.value)}
            />
          </Form.Item>

          <Form.Item>
            <Link
              onClick={(event) =>
                !name || !room ? event.preventDefault() : null
              }
              to={`/conversation?name=${name}&room=${room}`}
            >
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Link>
          </Form.Item>
        </Form>
      </div>
    </Divider>
  );
};

export default LoginForm;
