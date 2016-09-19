// Dashboard summary is the component above the two columns in the dashboard
//React
import React from 'react';


const DashboardSummary = ({ first, last, totalClasses, totalStudents, totalTeachers , daysLeft }) => {

    return (
        <div className="clearfix dashboardSummary">
            <div className="dashboardSummaryProf">
                <img src='https://static.pexels.com/photos/90333/pexels-photo-90333.jpeg' alt=""/>
                <h3>{first} {last}</h3>
            </div>
            <div className="dashboardSummaryStats clearfix">
                <div>
                    <p>{totalTeachers}</p>
                    <h5>Total Number of Teachers</h5>


                </div>
                <div>
                    <p>{totalStudents}</p>
                    <h5>Total Number of Students</h5>
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