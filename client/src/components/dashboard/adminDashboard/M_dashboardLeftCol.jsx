// Individual class
//React
import React from 'react';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
// import {  } from '../../actions/chooseGraphDisplay.js';
import { chooseGraphDisplay, chooseData } from '../../../actions/chooseGraphDisplay.js';


class AdminDashboardLeftCol extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            currentOption: this.props.graph
        }
    }

    getClass(id){
        //store class id in local storage so that it can be used
        //in the class dashboard to make api call to get class details
        localStorage.setItem('classId', id);
        //redirect user to that particular classes dashboard
        browserHistory.push('/class');
    }



    render(){
        return (

            <div>

            <button className="dashboardLeftColItem clearfix"
                    onClick={() => this.props.chooseGraphDisplay('BAR')}>

                Bar Graph
            </button>
            <button className="dashboardLeftColItem clearfix"
                    onClick={() => this.props.chooseGraphDisplay('LINE')}>
                Line Graph
            </button>
            <button className="dashboardLeftColItem clearfix"
                    onClick={() => this.props.chooseGraphDisplay('RADAR')}>
                Radar Graph
            </button>
                <div>
                    <button className="dashboardLeftColItem clearfix"
                            onClick={
                                () => this.props.chooseData('TEACHERS_STUDENTS')}>
                        Teachers to Students
                    </button>
                    <button className="dashboardLeftColItem clearfix"
                            onClick={
                                () => this.props.chooseData('STUDENTS_SCORES')}>
                        Student Assignment Averages
                    </button>
                    <button className="dashboardLeftColItem clearfix"
                            onClick={
                                () => this.props.chooseData('CLASS_AVERAGES')}>
                        Class Averages
                    </button>

                </div>
            </div>

        );
    }
};


function mapStateToProps(state) {
    console.log("REDUX STATE", state);
    return {

    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ chooseGraphDisplay, chooseData }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboardLeftCol);