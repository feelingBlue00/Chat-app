import React from "react";
import PropTypes from "prop-types";

import InputBox from "./ChatRoom/InputBox";
import ContactList from "./ChatRoom/ContactList";
import Messages from "./Message/Messages";

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
    const updated_messages = [message, ...this.state.messages];
    this.setState({ messages: updated_messages });
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
