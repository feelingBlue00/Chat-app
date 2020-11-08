import React from "react";
import "../css/LoginForm.css";

const initialState = {
  username: "",
  password: "",
  usernameError: "",
  passwordError: "",
};

export default class LoginForm extends React.Component {
  state = initialState;

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  validate = () => {
    let nameError = "";
    if (!this.state.username) {
      nameError = "Name cannot be blank";
    }

    let passwordError = "";
    if (!this.state.password) {
      passwordError = "Password cannot be blank";
    }

    if (nameError || passwordError) {
      this.setState({ nameError, passwordError });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.setState(initialState);
    }
  };

  render() {
    return (
      <div>
        <div style={{ fontWeight: "bold", fontSize: 18, textAlign: "center" }}>
          Sad chat room
        </div>
        <br />
        <div className="login">
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                name="userName"
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={(event) => this.handleChange(event)}
              />
              <div style={{ color: "red", fontSize: 11 }}>
                {this.state.usernameError}
              </div>
            </div>
            <br />
            <div>
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={(event) => this.handleChange(event)}
              />
              <div style={{ color: "red", fontSize: 11 }}>
                {this.state.passwordError}
              </div>
            </div>
            <br />
            <div>
              <button type="submit" target="_blank">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
