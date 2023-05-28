const express = require('express');

const { AirplaneController } = require('../../controllers');

const router = express.Router();

// POST req on /api/v1/airplanes 
router.post('/', AirplaneController.createAirplane)

module.exports = router;