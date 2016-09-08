import { combineReducers } from 'redux';

// Reducers
import AuthReducer from './auth_reducer.js';


const rootReducer = combineReducers({
    auth: AuthReducer,
});

export default rootReducer;