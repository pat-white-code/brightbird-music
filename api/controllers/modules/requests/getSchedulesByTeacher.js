// THIS Will return schedules on a teacher's calendar, given a teacher id. this function is expecting a reqbody with availableTeachers as an array

const axios = require('axios');

// const getSchedulesByTeacher = (res, req, next) => {
//   console.log('REQUEST BODY GET SCHEDULES', req.body);
//   let availableTeachers = req.body.availableTeachers
//   const fetchTeacherSchedules = async () => {

//     let updatedTeachers = await Promise.all(availableTeachers.map(async teacher => {
//       let axiosRes = await axios.get(`http://127.0.0.1:3000/api/schedules/${teacher.teacher_id}`);
//       teacher.schedule = axiosRes.data
//       return teacher
//     }))
//     return updatedTeachers
//   }

//   fetchTeacherSchedules().then(response => {
//     console.log(response.data);
//     req.body.availableTeachers = response.data
//     return res.status(200).send('schedules found.')
//   })
//   .catch(err => res.status(500).send(err))
// }

const getSchedulesByTeacher = (req, res, next) => {
  const availableTeachers = req.body.availableTeachers;
  const updateTeachers = async () => {
    let updatedTeachers = await Promise.all(availableTeachers.map(async teacher => {
      let response = await axios.get(`http://127.0.0.1:3000/api/schedules/${teacher.teacher_id}`);
      teacher.schedules = response.data
      console.log(teacher.schedules);
      return teacher
    }))
    return updatedTeachers;
  }

  updateTeachers()
    .then(response => {
      req.body.availableTeachers = response;
      console.log('REQ BODY GET SCHEDULES', req.body)
      res.status(200).send('teachers updated')
    })
}


module.exports = getSchedulesByTeacher;