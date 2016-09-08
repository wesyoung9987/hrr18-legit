// React
import React from 'react';
import ReactDOM from 'react-dom';

// React Router
import {Router, Route, IndexRoute } from 'react-router';

// Components
import App from './components/App.jsx';
import Welcome from './components/auth/welcome/welcome_component.jsx';
import Login from './components/auth/login/login_component.jsx';
import Signup from './components/auth/signup/signup_component.jsx';
import Dashboard from './components/dashboard/mainDashboard/dashboardCentral_component.jsx';
import DashboardClass from './components/dashboard/classDashboard/dashboardClass_component.jsx';
import DashboardStudent from './components/dashboard/studentDashboard/dashboardStudent_component.jsx';
import DashboardAssignment from './components/dashboard/assignmentDashboard/dashboardAssignment_component.jsx';
import Forms from './components/forms/form_component.jsx';
import ClassForm from './components/forms/classForm_component.jsx';
import StudentForm from './components/forms/studentForm_component.jsx';

export default (
    <Router path="/" component={App} >
        <IndexRoute component={Welcome} />
        <Route path="welcome" component={Welcome} />
        <Route path="signin" component={Login} />
        <Route path="signup" component={Signup} />
        <Route path="home" component={Dashboard} />
        <Route path="class" component={DashboardClass} />
        <Route path="student" component={DashboardStudent} />
        <Route path="assignment" component={DashboardAssignment} />
        <Route component={Forms} >
            <Route path="classform" component={ClassForm} />
            <Route path="studentform" component={StudentForm} />
        </Route>
    </Router>
);

// NOTE: The way we've defined our routes, Login, Signup, Dashboard, etc. are all children of App. In order to get child components
// to render within App, you need to add 'this.props.children' within the render method of App where you want these child components to show up


// INDEXROUTE = what will be rendered when the user just goes to '/'