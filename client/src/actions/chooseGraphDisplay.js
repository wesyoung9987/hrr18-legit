import {
  BAR, LINE, TEACHERS_STUDENTS, STUDENTS_SCORES
} from '../constants/ActionTypes.js'
import axios from 'axios';


function displayBar(){
    return {
        type: BAR
    }
}
function displayLine(){

    return {
        type: LINE
    }
}

export function chooseGraphDisplay(selection) {
  return function(dispatch) {
    if(selection === BAR){
  console.log("Select BAR")
      dispatch(displayBar())
    } else {
  console.log("Select Line")

      dispatch(displayLine())
    }

  };
};

function displayTeacherAndStudents(chartData){
  return {
    type: TEACHERS_STUDENTS,
    payload: chartData
  }
}
function displayStudentScores(chartData){
  return {
    type: STUDENTS_SCORES,
    payload: chartData
  }
}

export function chooseData(selection){
  return function(dispatch){
    if(selection === TEACHERS_STUDENTS){
        // axios.get('/api/add/classes', { "name": classInfo.name, "grade": classInfo.grade, "subject": classInfo.subject, "UserId": classInfo.UserId })
        //   .then(function(response){
        //       // call addedClass so user data gets sent to reducers to create new state
        //       dispatch(addedClass(response.data));
        //       // redircet user to the main dashboard
        //       browserHistory.push('/home')
        //   })
        //   .catch(function(response){
        //       dispatch(classAddError(response));
        //   });
        var sampleTeacherStudentData = {
          teachers:[
            {
              name:'jones',
              students:['george', 'john', 'jack']
            },
             {
              name:'dave',
              students:['george', 'john', 'jack','jill']
            },
             {
              name:'robo',
              students:['george', 'john']
            },

          ]
        }
      dispatch(displayTeacherAndStudents(sampleTeacherStudentData))
    } else if (selection === STUDENTS_SCORES){
      // call to server here
      var sampleSampleStudentScores = {
        students:[
          {first:'dave', last:'wer', scores:[50,60,30]},
          {first:'asd', last:'fds', scores:[30,100,20]},
          {first:'dasde', last:'gert', scores:[43,65,67]},
          {first:'gfds', last:'dfgd', scores:[45,63,56]}
        ]
      }
      dispatch(sampleSampleStudentScores)
    }
  }

}