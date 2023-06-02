const express = require("express");

const { FlightController } = require("../../controllers");

const { FLightMiddlewares } = require("../../middlewares");

const router = express.Router();

// POST req on /api/v1/flights
router.post("/",
    FLightMiddlewares.validateCreateRequest,
    FlightController.createFlight);

module.exports = router;


