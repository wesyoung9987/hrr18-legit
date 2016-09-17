//Axios is essentially JQuery's AJAX simplified
//https://www.npmjs.com/package/axios
import axios from 'axios';

// Allows you to re-route the user
import { browserHistory } from 'react-router'

// Action types are held separately for modularity purposes
import * as types from '../constants/ActionTypes';

// Called before api request, info sent to reducers.
// Reducer waiting for this action type is in reducers/students_reducer.js
function requestAddStudent(studentInfo) {
  return {
    type: types.ADDSCORE_REQUEST,
    isFetching: true,
    payload: studentInfo
  }
};

// Called upon successfull api request, info sent to reducers.
// Reducer waiting for this action type is in reducers/students_reducer.js
function addedStudent(newStudent) {
  return {
    type: types.ADDSCORE_SUCCESS,
    isFetching: false,
    payload: newStudent
  }
};

// Called if error signing in, info sent to reducers.
// Reducer waiting for this action type is in reducers/students_reducer.js
function studentAddError(message) {
  return {
    type: types.ADDSCORE_FAILURE,
    isFetching: false,
    payload: message
  }
};

export function addStudent(studentInfo) {
  // console.log("ADDSTUDENT", studentInfo)
  return function(dispatch) {
    dispatch(requestAddStudent(studentInfo));
      return axios.post('/api/add/students', { "first": studentInfo.first, "last": studentInfo.last })
        .then(function(response){
            // call addedStudent so user data gets sent to reducers to create new state
            dispatch(addedStudent(response.data));
            // enrol student in the class - can only do that once student is added to database and id is assigned to him/her
            axios.put('/api/enrol', { "students": [response.data.id], "classes": [Number(studentInfo.classId)] })
              .then(function(response){
                  // redirect user to the main dashboard
                   browserHistory.push('/class')
              })
              .catch(function(response){
                  console.error(response);
              });
        })
        .catch(function(response){
            dispatch(studentAddError(response));
        });
  };
};