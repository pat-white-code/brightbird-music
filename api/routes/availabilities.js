const express = require('express');
const router = express.Router()
const controller = require('./../controllers/availabilities');

router.get('/client/:clientId', controller.getAvailabilitiesByClient);
router.get('/:clientId', controller.getAvailabilities);

router.post('/post', controller.createTeacherAvailabilities);

module.exports = router;