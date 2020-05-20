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
export const promiseClientRequests = async (userId) => {
  return (dispatch) => {
    return new Promise ((resolve, reject) => {
      dispatch({ type: 'SET_LOADING', loading: true});
      axios.get(`/api/requests/client/${userId}`)
        .then(res => {
          console.log(res);
          let requests = res.data
          dispatch({type: 'FETCH_SUCCESSFUL',payload:requests});
          dispatch({type: 'SET_LOADING', loading: false});
          resolve(requests);
        }).catch(err => {console.log('ERR',err); reject(err)})
    })
  }
}

export const getSchedulesByRequest = (request) => {
  return (dispatch) => {
    axios.get(`/api/schedules/request/${request.id}?instrumentId=${request.instrument_id}&zipCode=${request.zip_code}&studentAge=${request.student_age}`)
      .then(schedules => dispatch({type: 'FETCHES_TEACHER_SCHEDULES', payload:schedules}))
  }
}

export const setRequests = (requests) => {
  return {type: 'SET_REQUESTS', payload:requests}
}

// export const fetchTeacherAvailability = (userId) => {
//   return (dispatch) => {
//     axios.get(`/api/requests/client/${userId}`)
//       .then(res => {
//         console.log('FETCH REQUESTS:', res)
//         let requests = res.data
//         requests.forEach(request => {
//           const { id, student_age, instrument_id, zip_code } = request
//           axios.get(`api/teachers/?instId=${instrument_id}&zipCode=${zip_code}&studentAge=${student_age}`)
//             .then(res => {
//               console.log(res, 'REQUEST ID:', id)
//               request.availableTeachers = res.data
//               console.log(request);
//               dispatch({type: 'FETCHES_TEACHER_AVAILABILITY', payload:request})
//             })
//             // .then(dispatch({type:'FETCHES_TEACHER_AVAILABILITY', payload:requests}))
//         })
//       })
//   }
// }

export const fetchQualifiedTeachers = (request) => {
  return (dispatch) => {
  // const { id, student_age, instrument_id, zip_code } = request
  axios.get(`api/teachers/?instId=${request.instrument_id}&zipCode=${request.zip_code}&studentAge=${request.student_age}`)
    .then(res => {
      console.log('FETCH QUALIFIED TEACHERS: ',res)
      let teachers = res.data
      dispatch({type:'FETCH_QUALIFIED_TEACHERS', payload: {requestId:request.id, teachers}})
    })
  }
}

export const fetchTeacherSchedule = request => {
  return (dispatch) => {
    request.availableTeachers.forEach(teacher => dispatch({type:'FETCHES_TEACHER_SCHEDULE', payload:{teacherId: teacher.teacher_id, schedule: [1, 2, 3]}}))
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