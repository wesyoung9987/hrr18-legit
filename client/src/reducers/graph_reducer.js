import {
  BAR, LINE, TEACHERS_STUDENTS, STUDENTS_SCORES
} from '../constants/ActionTypes.js'

export default function graphReducer(state = {
  option: BAR, chartData: {}
}, action){
  switch(action.type){
    case BAR:
      console.log('REDUCER change option to BAR')
      return Object.assign({}, state, {
        option: BAR
      })
    case LINE:
      console.log('REDUCER change option to LINE')
      return Object.assign({}, state, {
        option: LINE
      })
    case TEACHERS_STUDENTS:
      console.log('REDUCER change data to teacher_STUDENTS')
      var teacherLabels = [];
      var studentData = [];
      console.log(action.payload)
      _.each(action.payload.teachers, (set) => {
        teacherLabels.push(set.name)
        studentData.push(set.students.length)
      })
      return Object.assign({}, state, {
        labels: teacherLabels,
        data: studentData,
      })
    default:
      return state
  }
}