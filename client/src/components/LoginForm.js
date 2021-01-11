import React from "react";
import ChatWindow from "./ChatWindow";

import { Form, Input, Button, Checkbox } from "antd";

const initialState = {
  username: "",
  userId: "",
  userNameError: "",
};

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  validate() {
    let nameError = "";
    let idError = "";

    if (!this.state.username) {
      nameError = "Name cannot be blank";
    }

    if (!this.state.userId) {
      idError = "Id cannot be blank";
    }

    if (nameError || idError) {
      this.setState({ nameError: nameError, idError: idError });
      return false;
    }

    return true;
  }

  handleSubmit(event) {
    event.preventDefault();
    const isValid = this.validate();

    if (isValid) {
      this.setState({ initialState, submitted: true });
    }
  }

  render() {
    const layout = {
      labelCol: {
        span: 8,
      },

      wrapperCol: {
        span: 16,
      },
    };

    const tailLayout = {
      wrapperCol: {
        offset: 8,
        span: 16,
      },
    };

    if (this.state.submitted) {
      return (
        <div>
          <ChatWindow
            className="chat-window"
            username={this.state.username}
            userId={this.state.userId}
          />
        </div>
      );
    }

    return (
      <div>
        <h1
          style={{
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "center",
            display: "block",
          }}
        >
          Enter your user name and user id
        </h1>
        <br />
        <div className="login-form">
          <Form {...layout} initialValues={{ remember: true }}>
            <Form.Item
              label="userId"
              name="userId"
              rules={[{ required: true, message: "Please enter your user id" }]}
            >
              <Input
                placeholder="Enter your user id"
                onChange={this.handleChange}
                autoComplete="off"
              />
            </Form.Item>

            <Form.Item
              label="password"
              name="password"
              rules={[
                { required: true, message: "Please enter your password" },
              ]}
            >
              <Input.Password
                placeholder="Enter your password"
                onChange={this.handleChange}
                autoComplete="off"
              />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button
                type="primary"
                htmlType="submit"
                onSubmit={this.handleSubmit}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
