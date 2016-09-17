// made form a controlled field --> value of input set by state, not other way around

//React
import React from 'react';

//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Action
import { loginUser } from '../../../actions/index.js';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    onEmailChange(event){
        //As user types in email input, update the state
        //Once state updates the input value is updated to match the state
        this.setState({ email: event.target.value })
    }

    onPasswordChange(event){
        //As user types in password input, update the state
        //Once state updates the input value is updated to match the state
        this.setState({ password: event.target.value })
    }

    onFormSubmit(event){
        //Need to preventDefault, because without it, once the user hits
        //enter or submit it would send an http request. This being a single
        //page app, that's not needed and handled in the front-end
        event.preventDefault();
        // Call our action, loginUser, which will send a POST request to the api
        // see actions/index.js
        this.props.loginUser(this.state);
        //Reset our form fields to empty
        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit.bind(this)}>
                <input
                    type="text"
                    placeholder="Username..."
                    value={this.state.email}
                    onChange={this.onEmailChange.bind(this)}
                />
                <input
                    type="password"
                    placeholder="Password..."
                    value={this.state.password}
                    onChange={this.onPasswordChange.bind(this)}
                />
                <button type="submit">
                    Log In
                </button>
            </form>
        );
    }

};

//Gives us access to our action, loginUser, as this.props.loginUser within container
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ loginUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginForm);