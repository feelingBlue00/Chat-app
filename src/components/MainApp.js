import React from "react";
// import ChatWindow from "./ChatRoom/ChatWindow";
// import InputBox from "./Message/InputBox";

export default class MainApp extends React.Component {
  state = {
    messages: [],
  };

  sendMessage = (message) => {};

  addMessage = (message) => {
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages });
  };

  sendMessage = (message) => {
    const messageObj = {
      username: this.props.username,
      message,
    };

    this.addMessage(messageObj);
  };

  render() {
    return (
      <div className="the-app">
        <div className="container">
          Test
          {/* <ChatWindow />
          <InputBox /> */}
        </div>
      </div>
    );
  }
}
