// See actions/index.js to see where/how/when the action types are being dispatched

//Action Types
import {
  LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILURE, LOGOUT_SUCCESS, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGOUT_REQUEST, ADMIN_LOGIN_SUCCESS
} from '../constants/ActionTypes.js'

// The starting state sets authentication based on a token being in local storage.
// This should mean the user does not have to sign back in every single time the page refreshes or if they come
// back to the page after already loggin in.
// Ideally, we would also want a util to check if the token is expired.
export default function authReducer(state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('token') ? true : false,
    token: null
  }, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      console.log("LOGIN REQUESTED")
      return Object.assign({}, state, {
          isFetching: true,
          isAuthenticated: false,
          userInfo: action.payload
      })
    case LOGIN_SUCCESS:
      console.log("LOGIN SUCCEEDED");
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        token: action.payload
      })
    case ADMIN_LOGIN_SUCCESS:
      console.log("ADMIN LOGIN SUCCEEDED");
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        token: action.payload,
        isAdmin: true
      })
    case LOGIN_FAILURE:
      console.log("LOGIN FAILED");
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        token: null
      })
    case SIGNUP_REQUEST:
      console.log("SIGNUP REQUESTED");
      return Object.assign({}, state, {
          isFetching: true,
          isAuthenticated: false,
          token: action.payload
      })
    case SIGNUP_SUCCESS:
      console.log("SIGNUP SUCCEEDED");
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        token: action.payload
      })
    case SIGNUP_FAILURE:
      console.log("SIGNUP FAILED");
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        token: action.message
      })
    case LOGOUT_REQUEST:
        console.log("LOGOUT REQUESTED")
        return Object.assign({}, state, {
            isFetching: true,
            isAuthenticated: false,
        })
    case LOGOUT_SUCCESS:
      console.log("LOGOUT SUCCEEDED");
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        token: null
      })

    default:
      return state
  }
};