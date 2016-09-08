// Dashboard summary is the component above the two columns in the dashboard
import React, { Component, PropTypes } from 'react';

// Redux
import { connect } from 'react-redux';
import { signupUser } from '../actions/index.js'

// Components
import Dashboard from './dashboard/mainDashboard/dashboardCentral_component.jsx';
import DashboardClass from './dashboard/classDashboard/dashboardClass_component.jsx';
import DashboardStudent from './dashboard/studentDashboard/dashboardStudent_component.jsx';
import DashboardAssignment from './dashboard/assignmentDashboard/dashboardAssignment_component.jsx';
import Header from './headers/authorized_header.jsx';
import UnauthHeader from './headers/unauthorized_header.jsx';
import Welcome from './auth/welcome/welcome_component.jsx';
import Forms from './forms/form_component.jsx';

class App extends React.Component {
    
    render(){
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
    
};

App.PropTypes = {
    dispatch: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
    return {
<<<<<<< HEAD
        //isAuthenticated: isAuthenticated
=======
        isAuthenticated: isAuthenticated
>>>>>>> 1a6afcbf1e597987ebf76590063ac46ce08668e5
    }
}

export default connect(mapStateToProps)(App);