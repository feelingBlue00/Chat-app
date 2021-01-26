import React, { useState, useEffect } from "react";
import { Form, Input, Button, Divider } from "antd";
import shortid from "shortid";

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

  const handleSubmit = () => {
    console.log(id);
    setSubmitted((current) => !current);
  };

  useEffect(() => {
    console.log(submitted);
  }, [submitted]);

  function createNewId() {
    setId(() => {
      shortid.generate();
    });
  }

  if (submitted) {
    return (
      <Divider>
        <Conversation userId={id} />
      </Divider>
    );
  }

  return (
    <div className="login-container">
      <h1
        style={{
          fontWeight: "bold",
          fontSize: 18,
          textAlign: "center",
          display: "block",
        }}
      >
        Enter your user ID
      </h1>
      <br />
      <Divider className="login-form">
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

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
            <Button
              type="secondary"
              onClick={createNewId}
              className="new-id-btn"
            >
              Create new Id
            </Button>
          </Form.Item>
        </Form>
      </Divider>
    </div>
  );
};

export default LoginForm;
