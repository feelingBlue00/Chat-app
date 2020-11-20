import React from "react";

import InputBox from "./ChatRoom/InputBox";
import Messages from "./Message/Messages";

import "../css/MainApp.css";

export default class MainApp extends React.Component {
  state = {
    messages: [],
  };

  sendMessage = (message) => {
    const messages = this.state.messages;
    const messageObj = {
      username: this.props.username,
      message: message,
      fromThisUser: true,
    };
    //   messageObj.fromThisUser = true;
    messages.push(messageObj);
    this.setState({ messages: messages });
    //  console.log(messages);
  };

  render() {
    return (
      <div className="container">
        {/* <div className="contact-container">
          <ContactList />
        </div> */}
        <Messages messages={this.state.messages} />
        <InputBox sendMessage={this.sendMessage} />
      </div>
    );
  }
}
