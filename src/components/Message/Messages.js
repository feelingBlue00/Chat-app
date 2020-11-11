import React from "react";
import shortid from "shortid";
import Message from "./Message";

export default class Messages extends React.Component {
  render() {
    const messages = this.props.messages.map((message, id) => {
      return (
        <Message
          key={id}
          message={message.message}
          user={message.username}
          fromThisUser={message.fromThisUser}
        />
      );
    });
  }
}
