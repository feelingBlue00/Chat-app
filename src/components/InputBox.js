import React from 'react';

export default class InputBox extends React.Component {

    state = {
        message: null,
        isTyping: false
    }

    handleInput = (event) => {

    }

    messageChangedHandler = (event) => {
        this.setState({message: event.target.value});
    }

    handleSendHandler = (event) => {
        
    }

    render() {
        <input type="text" placeholder="Type a message..." onChange={}/>
    }

}