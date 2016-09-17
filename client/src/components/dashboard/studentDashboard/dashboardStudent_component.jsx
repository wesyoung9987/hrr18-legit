//Did not get to linking up this dashboard
//React
import React, { Component, PropTypes, ContextTypes } from 'react';
import { browserHistory } from 'react-router'

// Redux
import { connect } from 'react-redux';

// Components
import Header from '../../headers/authorized_header.jsx';
import DashboardSummary from './S_dashboardSummary.jsx';
import DashboardLeftCol from './S_dashboardLeftCol.jsx';
import DashboardRightCol from './S_dashboardRightCol.jsx';


class Dashboard extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isAuthenticated: this.props.isAuthenticated,
            classes: [],
            assignments: [],
            first: '',
            last: ''
        }
    }

     componentDidMount() {
        let that = this;
        var id = localStorage.getItem('studentId');
        this.serverRequest = $.ajax({
            method: "GET",
            url: `/api/report/students/${id}`,
            contentType: 'application/json',
            data: {},
            success: function(data){
                console.log(data);
                that.setState({
                    classes: data.classes,
                    assignments: data.assignments,
                    first: data.details.first,
                    last: data.details.last
                })
            }
        })
    }

    componentWillUnmount () {
        this.serverRequest.abort();
    }

    render() {
        console.log("Student State", this.state);

                return (
                    <div>
                        <Header />
                        <main>
                            <div className="dashboardWrapper">
                                <DashboardSummary first={this.state.first} last={this.state.last} />
                                <div className="dashboardCols clearfix">
                                    <div>
                                        <DashboardLeftCol classes={this.state.classes} />
                                    </div>
                                    <div>
                                        <h3>Students</h3>
                                        <DashboardRightCol assignments={this.state.assignments} />
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>

                );


    }
};


function mapStateToProps(state) {
    // console.log("STATE", state);
    return {
        isAuthenticated: state.auth.isAuthenticated,
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(Dashboard);