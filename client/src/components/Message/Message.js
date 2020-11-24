import React from "react";

export default class Message extends React.Component {
  render() {
    const fromThisUser = this.props.fromThisUser ? "from-this-user" : "";

    return (
      <div className={`message ${fromThisUser}`}>
        <div className="username">{this.props.username}</div>
        <div className="message-content">{this.props.message}</div>
      </div>
    );
  }
}

Message.defaultProps = {
  message: "",
  username: "",
  fromThisUser: false,
};
