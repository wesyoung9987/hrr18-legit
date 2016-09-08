import { ADD_STUDENT, EDIT_STUDENT, DELETE_STUDENT } from '../constants/ActionTypes';

const initialState = [];

export default function students(state = initialState, action) {
    switch (action.type) {
        case ADD_STUDENT:
            return [
                {

                },
                ...state
            ]

        case EDIT_STUDENT:
            return [
                {

                },
                ...state
            ]

        case DELETE_STUDENT:
            return [
                {

                },
                ...state
            ]
    }
};