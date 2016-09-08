// Dashboard summary is the component above the two columns in the dashboard
import React from 'react';

const DashboardSummary = () => {
    return (
        <div className="clearfix dashboardSummary">
            <div className="dashboardSummaryProf">
                <img src="http://www.globaldetroit.com/wp-content/uploads/2014/10/Gracie-Headshot-square.png" alt=""/>
                <h3>@yctercero</h3>
            </div>
            <div className="dashboardSummaryStats clearfix">
                <div>
                    <p>04</p>
                    <h5>Number of Classes</h5>
                </div>
                <div>
                    <p>24</p>
                    <h5>Average Class Size</h5>
                </div>
                <div>
                    <p>134</p>
                    <h5># of School Days Left</h5>
                </div>
            </div>
        </div>
    );
};

export default DashboardSummary;