import React from "react";

export default class Message extends React.Component {
  render() {
    const fromThisUser = this.props.fromThisUser ? "fromThisUser" : "";

    return (
      <div className={`message ${fromThisUser}`}>
        <div className="message">{this.props.message}</div>
      </div>
    );
  }
}

Message.defaultProps = {
  message: "",
  username: "",
  fromThisUser: false,
};
