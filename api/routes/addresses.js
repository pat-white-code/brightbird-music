const express = require('express');
const router = express.Router();
const controller = require('../controllers/addresses');

router.post('/:userId', controller.createAddress);

router.get('/request/:requestId', controller.getAddressByRequest);

module.exports = router;