// made form a controlled field --> value of input set by state, not other way around

//React
import React from 'react';

//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
        this.setState({ email: event.target.value })
    }

    onPasswordChange(event){
        this.setState({ password: event.target.value })
    }

    onFormSubmit(event){
        event.preventDefault();
        // need to send request to API
        console.log(this.state);
        this.props.loginUser(this.state);
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

// gives us access to this.props.loginUser within component
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ loginUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginForm);