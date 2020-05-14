import { combineReducers } from 'redux';

const user = (state = {}, action) => {
  switch(action.type) {
    case 'USER_LOGS_IN':
      return {...state, isLoggedIn: true}
    case 'INITIAL_LOGIN':
      return{...state, isLoggedIn: true, id:action.payload}
    case 'INITIAL_ADDRESS':
      return{...state, addressId: action.payload}
    default: return state;
  }
}

const requests = (state =[], action) => {
  switch(action.type) {
    case 'FETCH_SUCCESSFUL':
      return [action.payload];
    default: return state;
    case 'FETCH_QUALIFIED_TEACHERS':
      // payload: [request.id [teacher1, teacher2]]
      return state.map(request => request.id === action.payload[0] ? (
        {...request, availableTeachers: action.payload[1]}
      ) : (
        request
      )) 
  }
}

export default combineReducers({
  user, requests
})