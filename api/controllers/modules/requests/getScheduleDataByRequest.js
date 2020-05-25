// const fetch = require('node-fetch');
const axios = require('axios')

const getScheduleDataByRequest = (req, res, next) => {
  // req.body: {requestId: 1}
  const {requestId, instrumentId, studentAge} = req.body;
  const fetchLessonData = async () => {
    // instrumentId, studentAge
    let zipRes = await axios.get(`http://127.0.0.1:3000/api/addresses/request/${requestId}`);
    let zipCode = zipRes.data[0].zip_code;
    console.log('ZIP CODE:    ', zipCode);
    let response = await axios.get(`http://127.0.0.1:3000/api/schedules/request/${requestId}?instrumentId=${instrumentId}&zipCode=${zipCode}&studentAge=${studentAge}`);
    // let json = await response.json();
    // console.log('json', json)
    // console.log(response)
    return response;
  }

  fetchLessonData()
    .then(response =>{
      // console.log('RES',response.data)
      req.body.lessonData = response.data;
      // console.log('REQUEST BODY Lesson Data', req.body.lessonData)
      next();
      // res.status(200).send("Data Found")
    })
    .catch(console.error);
}

module.exports = getScheduleDataByRequest;