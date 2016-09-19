import {
  BAR, LINE, RADAR, TEACHERS_STUDENTS, STUDENTS_SCORES, CLASS_AVERAGES
} from '../constants/ActionTypes.js'

function getAverageScores(set){
  var average = _.reduce(set.scores, (store, next) => {
      return store += next
    }
  ) / set.scores.length
  return average
}


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
    case RADAR:
      console.log('REDUCER change option to RADAR')
      return Object.assign({}, state, {
        option: RADAR
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
    case STUDENTS_SCORES:
      console.log('REDUCER change data to STUDENTS_SCORES')
      var students = [];
      var assignmentAverages = [];
      console.log(action.payload)
      _.each(action.payload.students, (set) => {
        var average = _.reduce(set.scores, (store, next) => {
            return store += next
          }
        ) / set.scores.length
        students.push(set.first)
        assignmentAverages.push(average)
      })
      return Object.assign({}, state, {
        labels: students,
        data: assignmentAverages,
      })
      case CLASS_AVERAGES:
        console.log('REDUCER change data to CLASS_AVERAGES')
        var teachers = [];
        var studentAveragesByTeacher = [];
        console.log(action.payload)
        _.each(action.payload.teachers, (set) => {
          var classAverageScore = _.reduce(set.students, (store, next) => {
              return store += getAverageScores(next)
            }
          , 0) / set.students.length
          teachers.push(set.name)
          studentAveragesByTeacher.push(classAverageScore)
        })
        return Object.assign({}, state, {
          labels: teachers,
          data: studentAveragesByTeacher,
        })
    default:
      return state
  }
}