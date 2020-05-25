const axios = require('axios');

const getTeachersForRequest = (req, res, next) => {
  const {requestId, instrumentId, studentAge} = req.body;
  const getTeachers = async () => {
    let zipRes = await axios.get(`http://127.0.0.1:3000/api/addresses/request/${requestId}`);
    let zipCode = zipRes.data[0].zip_code;
    let response = await axios.get(`http://127.0.0.1:3000/api/teachers/?instId=${instrumentId}&zipCode=${zipCode}&studentAge=${studentAge}`);
    return response
  }


  getTeachers()
    .then(response => {
      // console.log(response.data)
      req.body.availableTeachers = response.data
      console.log(req.body);
      // res.status(200).send('teachers found');
      next();
    })
}

module.exports = getTeachersForRequest;