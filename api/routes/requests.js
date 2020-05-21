const express = require('express');
const router = express.Router();
const controller = require('../controllers/requests');

router.get('/client/:clientId', controller.getClientRequests);
router.get('/:requestId', controller.getRequestInfo);

router.post('/', controller.postRequest, controller.getScheduleDataByRequest, controller.fetchDriveTimes);



module.exports = router;