// Individual class
//React
import React from 'react';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router'

class DashboardLeftColItem extends React.Component {
    constructor(props){
        super(props)
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
            <a onClick={this.getClass.bind(this, this.props.classDetails.id)}>
                <div className="dashboardLeftColItem clearfix">
                    <div>
                        <h6>Title</h6>
                        <p>{this.props.classDetails.name}</p>
                    </div>
                    <div>
                        <h6>Grade</h6>
                        <p>{this.props.classDetails.grade}</p>
                    </div>
                    <div>
                        <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
                    </div>
                </div>
            </a>
        );
    }
};

export default DashboardLeftColItem;