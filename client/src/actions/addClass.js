//Axios is essentially JQuery's AJAX simplified
//https://www.npmjs.com/package/axios
import axios from 'axios';

// Allows you to re-route the user
import { browserHistory } from 'react-router'

// Action types are held separately for modularity purposes
import * as types from '../constants/ActionTypes';

// Called before api request, info sent to reducers.
// Reducer waiting for this action type is in reducers/classes_reducer.js
function requestAddClass(classInfo) {
  return {
    type: types.ADDCLASS_REQUEST,

    isFetching: true,
    payload: classInfo
  }
};

// Called upon successfull api request, info sent to reducers.
// Reducer waiting for this action type is in reducers/classes_reducer.js
function addedClass(newClass) {
  return {
    type: types.ADDCLASS_SUCCESS,
    isFetching: false,
    payload: newClass
  }
};

// Called if error signing in, info sent to reducers.
// Reducer waiting for this action type is in reducers/classes_reducer.js
function classAddError(message) {
  return {
    type: types.ADDCLASS_FAILURE,
    isFetching: false,
    payload: message,
  }
};

export function addClass(classInfo) {
  // console.log("ADDCLASS", classInfo)
  return function(dispatch) {
    dispatch(requestAddClass(classInfo));
      return axios.post('/api/add/classes', { "name": classInfo.name, "grade": classInfo.grade, "subject": classInfo.subject, "UserId": classInfo.UserId })
        .then(function(response){
            // call addedClass so user data gets sent to reducers to create new state
            dispatch(addedClass(response.data));
            // redircet user to the main dashboard
            browserHistory.push('/home')
        })
        .catch(function(response){
            dispatch(classAddError(response));
        });
  };
};