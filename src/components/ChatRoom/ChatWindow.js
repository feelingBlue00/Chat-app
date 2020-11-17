import React from "react";
import Messages from "../Message/Messages.js";
import "../../css/MainApp.css";
import "../../css/ChatWindow.css";

export default class ChatWindow extends React.Component {
  state = {
    fromThisUser: false,
  };

  render() {
    return (
      <div>
        <div className="chat-window">
          <Messages />
        </div>
      </div>
    );
  }
}
