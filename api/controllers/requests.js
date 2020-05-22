const getClientRequests = require('./modules/requests/getClientRequests');
const postRequest = require('./modules/requests/postRequest');
const mailRequest = require('./modules/requests/mailRequest');
const getRequestInfo = require('./modules/requests/getRequestInfo');
const getScheduleDataByRequest = require('./modules/requests/getScheduleDataByRequest');
const fetchDriveTimes = require('./modules/requests/fetchDriveTimes');
const filterBookendedLessons = require('./modules/requests/filterBookendedLessons');
const calculateTeacherAvailabilities = require('./modules/requests/calculateTeacherAvailabilities');

module.exports = {
  postRequest, 
  getClientRequests,
  mailRequest,
  getRequestInfo,
  getScheduleDataByRequest,
  fetchDriveTimes,
  filterBookendedLessons,
  calculateTeacherAvailabilities
};