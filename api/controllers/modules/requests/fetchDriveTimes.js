const axios = require('axios');

const fetchDriveTimes = (req, res, next) => {
  const lessonData = req.body.lessonData;
  const updateLessons = async () => {
    let updatedLessons = await Promise.all(lessonData.map(async lesson => {
      let origin = lesson.address.replace(/\d+ /, "");
      origin = origin.replace(/ /g, "+");
      let destination = lesson.request_address.replace(/\d+ /, "");
      destination = destination.replace(/ /g, "+");
      let response = await axios.get(`http://127.0.0.1:3000/api/driveTimes?origin=${origin}&destination=${destination}`)
      if(response.data[0]){
        let driveTimeSeconds = response.data[0].drive_time_seconds;
        lesson.driveTime = Math.ceil(driveTimeSeconds / 60);
      } else { lesson.driveTime = 0 }
      // console.log('RESPONSE', response.data);
      return lesson
    }))
    return updatedLessons;
  }

  updateLessons()
    .then(updatedLessons => {
      req.body.lessonData = updatedLessons
      console.log('REQUEST BODY', req.body)
      next();
      res.status(200).send("DriveTimes Updated")})
    .catch(console.error);
  }

  module.exports = fetchDriveTimes;