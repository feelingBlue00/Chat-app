import React from "react";
import InputBox from "./ChatRoom/InputBox";
import Messages from "./Message/Messages";
import "../css/MainApp.css";
import { io } from "socket.io/client-dist/socket.io";

export default class MainApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      date: new Date().toLocaleString(),
    };

    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(message) {
    const messages = this.state.messages;
    const messageObj = {
      username: this.props.username,
      message: message,
    };
    messageObj.fromThisUser = true;

    messages.push(messageObj);
    this.setState({ messages: messages });
    // this.addMessage(messageObj);
  }

  // addMessage(message) {
  //   const messages = this.state.messages;
  //   messages.push(message);
  //   this.setState({ messages: messages });
  // }

  render() {
    return (
      <div>
        <div
          className="room-name"
          style={{
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
            height: "30px",
          }}
        >
          {this.props.username}
        </div>
        <hr />
        <div className="chat-container">
          <Messages
            messages={this.state.messages}
            username={this.props.username}
          />
          <InputBox sendMessage={this.sendMessage} />
        </div>
      </div>
    );
  }
}
