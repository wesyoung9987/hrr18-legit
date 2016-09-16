// Dashboard summary is the component above the two columns in the dashboard
//React
import React from 'react';


const DashboardSummary = ({ first, last, numberClasses, numberStudents, daysLeft }) => {

    return (
        <div className="clearfix dashboardSummary">
            <div className="dashboardSummaryProf">
                <img src="http://www.globaldetroit.com/wp-content/uploads/2014/10/Gracie-Headshot-square.png" alt=""/>
                <h3>{first} {last}</h3>
            </div>
            <div className="dashboardSummaryStats clearfix">
                <div>
                    <p>{numberClasses}</p>
                    <h5>Number of Classes</h5>
                    <h5>THIS WAS CHANGED SDDASD</h5>

                </div>
                <div>
                    <p>{numberStudents}</p>
                    <h5>Number of Students</h5>
                </div>
                <div>
                    <p>{daysLeft}</p>
                    <h5># of Calendar Days Left</h5>
                </div>
            </div>
        </div>
    );
};

export default DashboardSummary;