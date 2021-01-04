import React from 'react';

const initialState = {
    username: "",
    userNameError: ""
}

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;

        this.handleChange = this.handleChange.bind(this);
        this.validate = this.validate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value;
        })
    }

    render() { 
        return (  );
    }
}
 
export default LoginForm;