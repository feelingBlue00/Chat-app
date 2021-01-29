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
  const [id, setId] = useState("");
  const [room, setRoom] = useState("");

  const handleSubmit = () => {
    console.log(id);
    setSubmitted((current) => !current);
  };

  useEffect(() => {
    console.log(submitted);
  }, [submitted]);

  if (submitted) {
    return (
      <div>
        <Conversation userId={id} />
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
        Enter your user ID and room
      </h1>
      <br />
      <div className="login-form">
        <Form
          {...layout}
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
        >
          <Form.Item
            label="Id"
            name="userId"
            rules={[{ required: true, message: "Please enter your user id" }]}
          >
            <Input
              value={id}
              placeholder="Enter your user id"
              type="text"
              name="userId"
              autoComplete="off"
              onChange={(event) => setId(event.target.value)}
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
                !id || !room ? event.preventDefault() : null
              }
              to={`/conversation?id=${id}&room=${room}`}
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
