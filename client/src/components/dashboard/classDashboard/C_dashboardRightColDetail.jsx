// This component renders the summary info of whatever class was clicked on from the left column
import React from 'react'
// const Modal = require('react-modal');
class DashboardRightColDetail extends React.Component {
  constructor (props) {
    super(props)
  }
  renderDetails (props) {
  // if student has been select render assignment and scores on right hand side.
    if (this.props.currentstudent.data.currentstudent.first) {
      return (
        <div className='studentDetails'>
           {console.log(this.props.currentstudent)}
          <h1> {this.props.currentstudent.data.currentstudent.first} {this.props.currentstudent.data.currentstudent.last} </h1>
             {this.props.currentstudent.data.assignments.map(function (assignment) {
               return <div key={assignment.id} className='dashboardLeftColItem clearfix'><span>
               Assignment: {assignment.name}
                 <br />
               </span> </div>
             })}
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

