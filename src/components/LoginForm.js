import React from 'react';

const initialState = {
    username: "",
    password: "",
    usernameError: "",
    passwordError: "",
}

export default class LoginForm extends React.Component {
    state = initialState;

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value});
    };

    validate = () => {
        let nameError = "";
        if (!this.state.username) {
            nameError = "Name cannot be blank";
        }

        let passwordError = "";
        if (!this.state.password) {
            passwordError = "Password cannot be blank";
        }

        if (nameError || passwordError) {
            this.setState({nameError, passwordError});
            return false;
        }

        return true;
    };

    handleSubmit = (event) => {
        event.preventDefault();
        
    }

    render() {

    }
}