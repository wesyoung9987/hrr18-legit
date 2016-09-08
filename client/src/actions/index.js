<<<<<<< HEAD
//AJAX
import axios from 'axios';

import * as types from '../constants/ActionTypes';

=======
import * as types from '../constants/ActionTypes';
>>>>>>> 1a6afcbf1e597987ebf76590063ac46ce08668e5
//////////////////////////////////////
/////////////// LOGIN ////////////////

function requestLogin(creds) {
  return {
    type: types.LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

function receiveLogin(user) {
  return {
    type: types.LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token
  }
}

function loginError(message) {
  return {
    type: types.LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function loginUser(creds) {
<<<<<<< HEAD
  console.log("CREDS", creds);
  let config = axios.create({
    method: 'post',
    url: '/signin',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(`email=${creds.email}&password=${creds.password}`)
  });

  const request = axios.post(config).then(function(response){
      console.log(response);
    }).catch(function(error){
      console.log(error);
    });

    return {
      type: types.LOGIN_REQUEST,
      payload: request
    };

  // return dispatch => {
  //   // Dispatch sends call to the API passing in creds
  //   dispatch(requestLogin(creds))

  //   return fetch('/signin', config)
  //     .then(response =>
  //       response.json().then(user => ({ user, response }))
  //           ).then(({ user, response }) =>  {
  //       if (!response.ok) {
  //         // If error loging in, call loginError
  //         dispatch(loginError(user.message))
  //         return Promise.reject(user)
  //       } else {
  //         // If login was successful, save user's token in local storage
  //         localStorage.setItem('id_token', user.id_token)
  //         console.log(user, user.id_token)
  //         // call receiveLogin that lets app know user is authenticated and passes through token
  //         dispatch(receiveLogin(user))
  //       }
  //     }).catch(err => console.log("Login Error: ", err))
  // }
=======

  let config = {
    method: 'POST',
    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
    body: `email=${creds.email}&password=${creds.password}`
  }

  return dispatch => {
    // Dispatch sends call to the API passing in creds
    dispatch(requestLogin(creds))

    return fetch('/signin', config)
      .then(response =>
        response.json().then(user => ({ user, response }))
            ).then(({ user, response }) =>  {
        if (!response.ok) {
          // If error loging in, call loginError
          dispatch(loginError(user.message))
          return Promise.reject(user)
        } else {
          // If login was successful, save user's token in local storage
          localStorage.setItem('id_token', user.id_token)
          // call receiveLogin that lets app know user is authenticated and passes through token
          dispatch(receiveLogin(user))
        }
      }).catch(err => console.log("Login Error: ", err))
  }
>>>>>>> 1a6afcbf1e597987ebf76590063ac46ce08668e5
}


//////////////////////////////////////
/////////////// SIGNUP ////////////////

function requestSignup(info) {
  return {
    type: types.SIGNUP_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    info
  }
}

function receiveSignup(user) {
  return {
    type: types.SIGNUP_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token
  }
}

function signupError(message) {
  return {
    type: types.SIGNUP_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function signupUser(info) {

  let config = {
    method: 'POST',
    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
    body: `email=${info.email}&password=${info.password}`
  }

  return dispatch => {
    dispatch(requestSignup(info))

    return fetch('/signup', config)
      .then(response =>
        response.json().then(user => ({ user, response }))
            ).then(({ user, response }) =>  {
        if (!response.ok) {
          // If error loging in, call loginError
          dispatch(signupError(user.message))
          return Promise.reject(user)
        } else {
          // If login was successful, save user's token in local storage
          localStorage.setItem('id_token', user.id_token)
          // call receiveLogin that lets app know user is authenticated and passes through token
          dispatch(receiveSignup(user))
        }
      }).catch(err => console.log("Login Error: ", err))
  }
}



// addStudent
// addClass
// addAssignment
// addUser
// signIn
// editStudent
// editClass
// editAssignment
// getUserInfo
// getClassList
// getClassInfo
// getStudentList
// getStudentInfo
// getAssignmentList
// getAssignmentInfo