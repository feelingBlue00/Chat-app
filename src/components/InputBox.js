import React from "react";
import "../css/InputBox.css";

export default class InputBox extends React.Component {
  state = {
    message: "",
    isTyping: false,
  };

  messageChangedHandler = (event) => {
    this.setState({ message: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.setState({ message: "" });
    this.props.sendMessage(this.state.message);
  };

  render() {
    return (
      <div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Type a message..."
            onChange={(event) => this.messageChangedHandler(event)}
            required
          />
          <button
            type="button"
            className="send-button"
            onClick={(event) => this.submitHandler(event)}
          >
            Send
          </button>
        </div>
      </div>
    );
  }
}
