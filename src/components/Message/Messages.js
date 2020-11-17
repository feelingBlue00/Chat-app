import React from "react";
import Message from "./Message";

export default class Messages extends React.Component {
  render() {
    const messages = this.props.messages.map((message, i) => {
      return (
        <Message
          key={i}
          message={message.message}
          user={message.username}
          fromThisUser={message.fromThisUser}
        />
      );
    });

    return (
      <div
        className="messages"
        style={{
          overflowY: "scroll",
          overflowX: "hidden",
          flexGrow: 1,
          padding: 20,
        }}
        id="chat-messages"
      >
        {messages}
      </div>
    );
  }
}

Messages.defaultProps = {
  messages: [],
};
