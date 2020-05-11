const express = require('express');
const router = express.Router();
const controller = require('../controllers/addresses');

router.post('/:userId', controller.createAddress);

module.exports = router;