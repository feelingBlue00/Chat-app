import React from "react";
import "../../css/InputBox.css";

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
  };

  render() {
    return (
      <div>
        <form
          className="input-box"
          id="input-box"
          onSubmit={this.submitHandler}
        >
          <input
            type="text"
            onChange={this.messageChangedHandler}
            value={this.state.message}
            placeholder="Type a message..."
            required
          />
        </form>
        <button
          type="submit"
          className="send-button"
          value="Send"
          form="input-box"
          onClick={(event) => this.submitHandler(event)}
        >
          Send
        </button>
      </div>
    );
  }
}
