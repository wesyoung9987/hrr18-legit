// Holds list of students
//React
import React from 'react';

var BarChart = require("react-chartjs").Bar;
var LineChart = require("react-chartjs").Line;
var RadarChart = require("react-chartjs").Radar;

//Components
import DashboardRightColItem from './M_dashboardRightColItem.jsx';



const DashboardRightCol = (props) => {
    var options = {
      // animationSteps : 50,
      //  tooltipYPadding : 16,
      //  tooltipCornerRadius : 0,
      //  tooltipTitleFontStyle : 'normal',
      //  tooltipFillColor : 'rgba(0,160,0,0.8)',
      //  // animationEasing : 'easeOut',
      //  scaleLineColor : 'black',
      //  scaleFontSize : 16,
      //  responsive: true,
      //  pointDotRadius: 10,
      //  bezierCurve: false,
      //  scaleShowVerticalLines: false,
      //  scaleGridLineColor: 'black'
    }
    var chart;
    if(props.chartOption === "LINE"){
      console.log('change to line chart')
      chart = <LineChart data={props.chartData} options={options}width="600" height="400"/>
    } else if (props.chartOption === "BAR"){
      console.log('change to bar chart')
      chart = <BarChart data={props.chartData} width="600" height="400"/>
    } else if (props.chartOption === "RADAR"){
      chart = <RadarChart data={props.chartData} width="600" height="400"/>

    }

    return (

        chart

    );
};




export default DashboardRightCol;


