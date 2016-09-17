// This component renders the summary info of whatever class was clicked on from the left column
import React from 'react'

import { browserHistory } from 'react-router'
// const Modal = require('react-modal');
class DashboardRightColDetail extends React.Component {
  constructor (props) {
    super(props)
  }

  scoreAssignment (assignmentId, assignmentName) {
    localStorage.setItem('assignmentId', assignmentId)
    localStorage.setItem('assignmentName', assignmentName)
    browserHistory.push('/studentscoreform');
  }

  renderDetails (props) {
  // if student has been select render assignment and scores on right hand side.
    if (this.props.currentstudent.data.currentstudent.first) {
      return (
        <div className='studentDetails'>
           {console.log(this.props.currentstudent)}
          <h1> {this.props.currentstudent.data.currentstudent.first} {this.props.currentstudent.data.currentstudent.last} </h1>
            {this.props.currentstudent.data.assignments.map(function (assignment) {
              console.log('assignmentId', assignment.id)
              return <div onClick={function(){this.scoreAssignment(assignment.id, assignment.name);}.bind(this)} key={assignment.id} className='dashboardLeftColItem clearfix'><span>
                Assignment: {assignment.name}
                <br />
                Score:
                <br />
                <span>Click To Set Student Score...</span>
              </span> </div>
            }, this)}
        </div>
   ) } }
  render () {
    return (
      <div>
      {this.renderDetails() }
      </div>
    )
  }
};

export default DashboardRightColDetail

