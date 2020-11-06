import React from 'react';
import InputBox from './InputBox';

export default class Ribbon extends React.Component {

    render() {
        return (
            <div className="ribbon">
                <Button style={{color: 'blue', font: 'bold'}} onClick={this.props.messageSentHandler()}>Send</Button>
            </div>
        )
    }
}