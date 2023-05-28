const express = require('express');

const { AirplaneController } = require('../../controllers');

const { AirplaneMiddlewares } = require('../../middlewares');

const router = express.Router();

// POST req on /api/v1/airplanes, will first validate the request using AirplaneMiddlewares.validateCreateRequest and then create airplane using AirplaneController.createAirplane
router.post('/',
    AirplaneMiddlewares.validateCreateRequest,
    AirplaneController.createAirplane)

module.exports = router; 