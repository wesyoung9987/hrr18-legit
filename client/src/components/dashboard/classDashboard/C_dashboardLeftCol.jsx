// Left column is going to hold the list of classes, students, or assignments
import React from 'react'
// Components
import DashboardLeftColItem from './C_dashboardLeftColItem.jsx'
class DashboardLeftCol extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    const that = this
    return (
      <div className='dashboardLeftCol'>
        <ul>
    {this.props.data.students.map(function (data) {
      return <DashboardLeftColItem key={data.id} data={data} func={that.props.func} />
    })}
        </ul>
      </div>
    )
  }
}
export default DashboardLeftCol
