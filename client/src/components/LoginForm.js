import React from "react";
import shortid from "shortid";
import "../css/LoginForm.css";
import ContactList from "./ChatRoom/ContactList";
import MainApp from "./MainApp";

const initialState = {
  username: "",
  usernameError: "",
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

    if (nameError) {
      this.setState({ nameError });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.setState({
        initialState,
        submitted: true,
        id: shortid.generate(),
      });
    }
  };

  render() {
    if (this.state.submitted) {
      return (
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <ContactList style={{ float: "left", width: "20%" }} />
          <MainApp
            username={this.state.username}
            style={{
              marginLeft: "20&",
            }}
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
          Sad chat room
        </h1>
        <br />
        <div className="login">
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                name="username"
                type="text"
                placeholder="Username"
                autoComplete="off"
                value={this.state.username}
                onChange={(event) => this.handleChange(event)}
                required
              />
              <div style={{ color: "red", fontSize: 11 }}>
                {this.state.usernameError}
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
