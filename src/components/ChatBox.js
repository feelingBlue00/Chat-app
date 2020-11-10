import React from "react";

export default class ChatBox extends React.Component {
  state = {
    fromThisUser: false,
  };

  render() {
    return (
      <div className="chat-box">
        <ul>
          <li className="other">By other user</li>
          <li className="this">By this user, first message</li>
          <li className="this">By this user, second message</li>
          <li className="this">By this user, third message</li>
          <li className="this">By this user, fourth message</li>
        </ul>
      </div>
    );
  }
}
