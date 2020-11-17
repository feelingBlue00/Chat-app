import React from "react";
import "../../css/InputBox.css";

export default class InputBox extends React.Component {
  state = {
    textInput: "",
    isTyping: false,
  };

  messageChangedHandler = (event) => {
    this.setState({ textInput: event.target.value, isTyping: true });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.setState({ textInput: "", isTyping: false });
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
            value={this.state.textInput}
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
