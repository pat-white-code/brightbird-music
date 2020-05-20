import { combineReducers } from 'redux';
// import state from './state';

const user = (state = {}, action) => {
  switch(action.type) {
    case 'USER_LOGS_IN':
      return {...state, isLoggedIn: true}
    case 'INITIAL_LOGIN':
      return{...state, isLoggedIn: true, id:action.payload}
    case 'SETS_USER_ID':
      return {...state, id:action.payload}
    case 'INITIAL_ADDRESS':
      return{...state, addressId: action.payload}
    default: return state;
  }
}

const requests = (state =[], action) => {
  switch(action.type) {
    case 'FETCH_SUCCESSFUL':
      return action.payload;
    default: return state;
    case 'FETCH_QUALIFIED_TEACHERS':
      // payload: {requestId, teachers:[teachers]}
      return state.map(request => request.id === action.payload.requestId ? (
        {...request, availableTeachers: action.payload.teachers}
      ) : (
        request
      ))
  }
}

const teacherSchedules = (state = [], action) => {
  switch(action.type) {
    case 'FETCHES_TEACHER_SCHEDULES':
      return action.payload;
    default: return state
  }
}

const requestIsLoaded = (state = false, action) => {
  let newState = {...state}
  switch(action.type) {
    case 'FETCH_SUCCESSFUL':
      return newState.requestIsLoaded = true
    default: return state;
  }
}

export default combineReducers({
  user, requests, 
  teacherSchedules, 
  requestIsLoaded
})