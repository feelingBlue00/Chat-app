import React from "react";
import InputBox from "../Message/InputBox.js";
import Messages from "../Message/Messages.js";

export default class ChatWindow extends React.Component {
  state = {
    fromThisUser: false,
  };

  render() {
    return (
      <div className="chat-window">
        <Messages messages={this.props.messages} />
        <InputBox />
      </div>
    );
  }
}
