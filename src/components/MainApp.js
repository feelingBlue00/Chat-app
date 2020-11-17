import React from "react";
import ChatWindow from "./ChatRoom/ChatWindow";
import InputBox from "./ChatRoom/InputBox";
import ContactList from "./ChatRoom/ContactList";

import "../css/MainApp.css";

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
    this.addMessage(messageObj);
  }

  render() {
    return (
      <div className="the-app">
        {/* <div className="contact-container">
          <ContactList />
        </div> */}
        <div className="chat-container">
          <div className="chat-window">
            <ChatWindow />
          </div>

          <div className="input-box">
            <InputBox onClick={this.sendMessage} />
          </div>
        </div>
      </div>
    );
  }
}
