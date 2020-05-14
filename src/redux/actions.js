import axios from 'axios';

export const initialLogin = (userId) => {
  return {type: 'INITIAL_LOGIN', payload: userId}
}

export const initialAddress = (addressId) => {
  return {type: 'INITIAL_ADDRESS', payload: addressId}
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
  const [ id, student_age, instrument_id ] = request
  axios.get(`api/teachers/?instId=${instrument_id}&zipCode=78746&studentAge=${student_age}`)
    .then(res => {
      console.log(res)
      let teachers = res.data
      dispatch({type:'FETCH_QUALIFIED_TEACHERS', payload: [id, [teachers]]})
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