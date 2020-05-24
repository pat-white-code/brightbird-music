const express = require('express');
const router = express.Router();
const controller = require('../controllers/requests');
const availabilitiesController = require('../controllers/availabilities');

router.get('/client/:clientId', controller.getClientRequests);
router.get('/:requestId', controller.getRequestInfo);

router.post('/', 
  controller.postRequest, 
  controller.getScheduleDataByRequest, 
  controller.filterBookendedLessons, 
  controller.fetchDriveTimes,
  controller.calculateTeacherAvailabilities,
  availabilitiesController.createTeacherAvailabilities
  );



module.exports = router;