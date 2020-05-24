const express = require('express');
const router = express.Router()
const controller = require('./../controllers/availabilities');

router.post('/post', controller.createTeacherAvailabilities);

module.exports = router;