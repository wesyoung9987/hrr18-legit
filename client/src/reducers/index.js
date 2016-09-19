// Redux
import { combineReducers } from 'redux';

// Reducers
import AuthReducer from './auth_reducer.js';
import ClassesReducer from './classes_reducer.js';
import StudentsReducer from './students_reducer.js';
import AssignmentReducer from './assignment_reducer.js';
import GraphReducer from './graph_reducer.js';

const rootReducer = combineReducers({
    auth: AuthReducer,
    classes: ClassesReducer,
    students: StudentsReducer,
    assignment: AssignmentReducer,
    graph: GraphReducer
});

export default rootReducer;