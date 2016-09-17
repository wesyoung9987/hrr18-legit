//Individual students
//Had to cut back on functionality due to time - plan was to have the user be able to 
//click on a student and go to a dashboard with all that students information

//React
import React from 'react';

//Router
import { browserHistory } from 'react-router';

class DashboardRightColItem extends React.Component {
    constructor(props){
        super(props)
    }

    getStudent(id){
        //store student id in local storage so that it can be used
        //in the students dashboard to make api call to get student details
        localStorage.setItem('studentId', id);
        //redirect user to that particular students dashboard
        browserHistory.push('/student');
    }
    
    render(){
        return (
            <div className="dashboardRightColItem clearfix">
                <div>
                    <h6>Name</h6>
                    <p>{this.props.student.first} {this.props.student.last}</p>
                </div>
                <div>
                    <h6></h6>
                    <p></p>
                </div>
                <div>
                </div>
            </div>
        );
    }
};

export default DashboardRightColItem;