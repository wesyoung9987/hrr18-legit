import {
  BAR, LINE, RADAR, TEACHERS_STUDENTS, STUDENTS_SCORES, CLASS_AVERAGES
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
function displayRadar(){
  return {
    type: RADAR
  }
}
export function chooseGraphDisplay(selection) {
  return function(dispatch) {
    if(selection === BAR){
  console.log("Select BAR")
      dispatch(displayBar())
    } else if(selection === LINE){
  console.log("Select Line")

      dispatch(displayLine())
    } else if (selection === RADAR){
      dispatch(displayRadar())
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
function displayClassAverages(chartData){
  return {
    type: CLASS_AVERAGES,
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
      console.log('students_scores action creator running')
      // call to server here
      var sampleStudentScores = {
        students:[
          {first:'dave', last:'wer', scores:[50,60,30]},
          {first:'asd', last:'fds', scores:[30,100,20]},
          {first:'dasde', last:'gert', scores:[43,65,67]},
          {first:'gfds', last:'dfgd', scores:[45,63,56]}
        ]
      }
      dispatch(displayStudentScores(sampleStudentScores))
    } else if (selection === CLASS_AVERAGES){
      console.log('students_scores action creator running')
      // call to server here
      var sampleClassScores = {

           teachers:[
             {
              name: 'dave',
              students: [
                  {
                  first:'hello',
                  last: 'world',
                  scores: [15, 60, 100]
                  },
                  {
                  first:'foo',
                  last: 'bar',
                  scores: [11, 61, 99]
                  }

               ]

             },
             {
              name: 'another person',
              students: [
                  {
                  first:'hello',
                  last: 'world',
                  scores: [100, 60, 100]
                  },
                  {
                  first:'foo',
                  last: 'bar',
                  scores: [100, 100, 99]
                  }

               ]
             }

           ]

      }
      dispatch(displayClassAverages(sampleClassScores))
    }
  }

}