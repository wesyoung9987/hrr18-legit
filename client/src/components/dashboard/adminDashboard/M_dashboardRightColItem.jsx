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

    render(){
        return (
            <circle cx={1} cy={1} r="1.8"/>
        );
    }
};

export default DashboardRightColItem;