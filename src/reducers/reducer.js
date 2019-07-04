import { combineReducers } from "redux";

// state to manage all the records
const recordList = (state = [], action = {}) => {
    switch (action.type) {
        case "FETCH_RECORD_LIST":
            return action.data

        case "EDIT_RECORD":
            const index = state.findIndex((record) => record.id === action.data.id);
            state.splice(index, 1, action.data);
            var newState = [...state];
            return newState

        default:
            return state;
    }
}

// state to manage edit table
const edit = (state = false, action = {}) => {
    switch (action.type) {
        case "EDIT_CLICKED":
            return true
        case "HIDE_EDIT":
            return false;
        default:
            return state;
    }
}

// state to manage search table
const searchResult = (state = false, action = {}) => {
    switch (action.type) {
        case "SHOW_SEARCH_RESULT":
            return true
        default:
            return state;
    }
}

// state to manage search result
const searchList = (state = {}, action = {}) => {
    switch (action.type) {
        case "SET_SEARCH_RESULT":
            return action.data
        default:
            return state;
    }
}

const reducer = combineReducers({ recordList, edit, searchResult, searchList });
export default reducer;
