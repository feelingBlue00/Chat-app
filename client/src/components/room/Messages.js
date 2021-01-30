import React from "react";

import ScrollToBottom from "react-scroll-to-bottom";

import Message from "./Message";

const Messages = ({ messages, name }) => {
  return (
    <div className="messages">
      {messages.map((message, index) => (
        <div className="message-container" key={index}>
          <Message message={message} name={name} />
        </div>
      ))}
    </div>
  );
};

export default Messages;
