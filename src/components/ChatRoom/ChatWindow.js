import React from "react";
import InputBox from "../Message/InputBox.js";

export default class ChatWindow extends React.Component {
  state = {
    fromThisUser: false,
  };

  render() {
    return <div className="chat-box"></div>;
  }
}
