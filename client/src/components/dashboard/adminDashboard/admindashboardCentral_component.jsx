//React
import React, { Component, PropTypes, ContextTypes } from 'react';
import { browserHistory } from 'react-router'

// Redux
import { connect } from 'react-redux';

// Components
import Header from '../../headers/authorized_header.jsx';
import DashboardSummary from './M_dashboardSummary.jsx';
import DashboardLeftCol from './M_dashboardLeftCol.jsx';
import DashboardRightCol from './M_dashboardRightCol.jsx';


class AdminDashboard extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            // getting access to isAuthenticated through the
            // mapStateToProps method at the bottom of doc
            isAuthenticated: this.props.isAuthenticated,
            isAdmin: this.props.isAdmin,
            classes: [],
            students: [],
            first: '',
            last: ' ',
            numberClasses: 0,
            numberStudents: 0,
            daysLeft: 0
        }
    }

     componentWillMount() {
        let that = this;
         // userid being saved in storage upon successfull signup or login
        var id = localStorage.getItem('userid');
         // api request using userid saved in localStorage
         // will get back the user's info, their classes, and their students
        this.serverRequest = $.ajax({
            method: "GET",
            url: `/api/report/users/${id}`,
            contentType: 'application/json',
            data: {},
            success: function(data){
                // Calculate number of calendar days left
                var start = new Date();
                var end = new Date(data.details.schoolEndDate);
                var difference = end.getTime() - start.getTime();
                var milliseconds = new Date(difference)
                var seconds = milliseconds / 1000;
                var minutes = seconds / 60;
                var days = Math.ceil(minutes / 1440);
                // update the state
                that.setState({
                    classes: data.classes,
                    students: data.students,
                    first: data.details.first || 'Welcome!',
                    last: data.details.last,
                    numberClasses: data.classes.length,
                    numberStudents: data.students.length,
                    daysLeft: `${days}`
                })
            }
        })
    }

    componentWillUnmount () {
        //kill all server requests if there are
        //any still going once component is being unmounted
        this.serverRequest.abort();
    }

    render() {
        console.log("STATE", this.state)
            if(this.state.isAuthenticated){
                return (
                    <div>
                        <Header />
                        <main>
                            <div className="dashboardWrapper">
                                <DashboardSummary
                                    first={this.state.first}
                                    last={this.state.last}
                                    numberClasses={this.state.numberClasses}
                                    numberStudents={this.state.numberStudents}
                                    daysLeft={this.state.daysLeft}
                                />
                                <div className="dashboardCols clearfix">
                                    <div>
                                        <h3><a href="/classform"><i className="fa fa-plus" aria-hidden="true"></i></a> Classes </h3>
                                        <DashboardLeftCol classes={this.state.classes} />
                                    </div>
                                    <div>
                                        <h3>Students</h3>
                                        <DashboardRightCol students={this.state.students} />
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>

                );
            }else{
                return(
                    <div>
                        {browserHistory.push('/signin')}
                    </div>
                )
            }


    }
};

// state argument is coming from reducers/index.js, which is pulling from
// the auth reducer, reducers/auth_reducer.js
function mapStateToProps(state) {
    console.log("REDUX STATE", state);
    return {
        isAuthenticated: state.auth.isAuthenticated,
        token: state.auth.token,
        isAdmin: state.auth.isAdmin
    }
}

export default connect(mapStateToProps)(AdminDashboard);