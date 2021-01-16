import React from "react";
import { Form, Input, Button, Divider } from "antd";
import shortid from "shortid";

const layout = {
  labelCol: {
    span: 8,
  },

  wrapperCol: {
    span: 16,
  },
};

export default function LoginForm({ onIdSubmit }) {
  function handleSubmit(id) {
    onIdSubmit(id.userId);
  }

  function createNewId() {
    onIdSubmit(shortid.generate());
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
        Enter your user name and id
      </h1>
      <br />
      <Divider className="login-form">
        <Form
          {...layout}
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
        >
          <Form.Item
            label="Enter your Id"
            name="userId"
            rules={[{ required: true, message: "Please enter your user id" }]}
          >
            <Input
              placeholder="Enter your user id"
              type="text"
              name="userId"
              autoComplete="off"
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
    </Divider>
  );
}
