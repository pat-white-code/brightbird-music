import axios from 'axios';

export const initialLogin = (userId) => {
  return {type: 'INITIAL_LOGIN', payload: userId}
}
export const setUserId = (userId) => {
  return {type: 'SETS_USER_ID', payload: userId}
}

export const initialAddress = (addressId) => {
  return {type: 'INITIAL_ADDRESS', payload: addressId}
}

const isLoggedIn = () => {
  return {type: 'USER_LOGS_IN'}
}

export const userLogin = (user) => {
  return (dispatch) => {
    console.log('USER', user);
      axios.post('api/users/auth/login', user)
          .then(json => {
            console.log(json)
            let userId = json.data.id
            // document.cookie = "loggedIn=true;max-age=60*1000"
            dispatch(isLoggedIn())
            dispatch(setUserId(userId))
            dispatch(fetchClientRequests(userId))})
  }
}

export const fetchClientRequests = (userId) => {
  return (dispatch) => {
    axios.get(`/api/requests/client/${userId}`)
      .then(res => {
        console.log(res)
        let requests = res.data
        dispatch({type:'FETCH_SUCCESSFUL', payload:requests})
      })
  }
}

export const fetchQualifiedTeachers = (request) => {
  return (dispatch) => {
  const [ id, student_age, instrument_id, zip_code ] = request
  axios.get(`api/teachers/?instId=${instrument_id}&zipCode=${zip_code}&studentAge=${student_age}`)
    .then(res => {
      console.log(res)
      let teachers = res.data
      dispatch({type:'FETCH_QUALIFIED_TEACHERS', payload: {requestId:id, teachers}})
    })
  }
}

// export const getUserBusinesses = userId => {
//   return (dispatch) => {
//     axios.get(`/businesses/${userId}`)
//       .then(res => {
//         console.log(res)
//         let businesses = res.data
//         dispatch(getsUserBusinesses(businesses))
//       })
//   }
// }