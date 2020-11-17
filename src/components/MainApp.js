import React from "react";
import InputBox from "./ChatRoom/InputBox";
import ContactList from "./ChatRoom/ContactList";

import "../css/MainApp.css";
import Messages from "./Message/Messages";

export default class MainApp extends React.Component {
  constructor(props) {
    super();

    this.state = {
      messages: [],
    };

    this.sendMessage = this.sendMessage.bind(this);
  }

  addMessage(message) {
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages });
  }

  sendMessage(message) {
    const messageObj = {
      username: this.props.username,
      message,
    };
    messageObj.fromThisUser = true;
    this.addMessage(messageObj);
  }

  render() {
    return (
      <div className="container">
        {/* <div className="contact-container">
          <ContactList />
        </div> */}
        <Messages messages={this.state.messages} />
        <InputBox onClick={this.sendMessage} />
      </div>
    );
  }
}
