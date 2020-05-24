const express = require('express');
const router = express.Router()
const controller = require('./../controllers/availabilities');

router.get('/client/:clientId', controller.getAvailabilitiesByClient);

router.post('/post', controller.createTeacherAvailabilities);

module.exports = router;