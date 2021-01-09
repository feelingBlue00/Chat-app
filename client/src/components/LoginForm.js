import React from "react";
import MainApp from "./MainApp";

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
    if (this.state.submitted) {
      return (
        <div>
          <MainApp
            className="main-app"
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
          <form onSubmit={this.handleSubmit}>
            <div id="username-field">
              <input
                name="username"
                type="text"
                placeholder="Username"
                autoComplete="off"
                value={this.state.username}
                onChange={(event) => this.handleChange(event)}
                required
              />
            </div>
            <br />
            <div id="id-field">
              <input
                name="user id"
                type="text"
                placeholder="UserId"
                autoComplete="off"
                value={this.state.userId}
                onChange={(event) => this.handleChange(event)}
                required
              />
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

export default LoginForm;
