import React from 'react';
import InputBox from './InputBox.js';

export default class MainApp extends React.Component {
    state = {
        messages = []
    }

    sendMessage = message => {

    }

    addMessage = message => {
        const messages = this.state.messages;
        messages.push(message);
        this.setState({ messages });
    }

    render() {
        return (
            <div className="the-app">
                Test
            </div>
        )
    }
}