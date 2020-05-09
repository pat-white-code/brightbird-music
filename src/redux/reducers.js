import { combineReducers } from 'redux';

const user = (state = {}, action) => {
  switch(action.type) {
    case 'USER_LOGS_IN':
      return {...state, isLoggedIn: true}
    default: return state;
  }
}

export default combineReducers({
  user
})