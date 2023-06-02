const express = require("express");

const { FlightController } = require("../../controllers");

const { FLightMiddlewares } = require("../../middlewares");

const router = express.Router();

// POST req on /api/v1/flights
router.post("/",
    FLightMiddlewares.validateCreateRequest,
    FlightController.createFlight);

// GET req on /api/v1/flights?trips=MUM-DEL
router.get("/",
    FlightController.getAllFlights);

module.exports = router;


