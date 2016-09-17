// Holds list of students
//React
import React from 'react';
import d3 from 'd3'
var BarChart = require("react-chartjs").Bar;

//Components
import DashboardRightColItem from './M_dashboardRightColItem.jsx';
var data = {};

const DashboardRightCol = (props) => {
    return (

        <BarChart data={props.chartData}/>

    );
};

export default DashboardRightCol;


