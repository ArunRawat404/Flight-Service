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

// GET req on /api/v1/flights/:id
router.get("/:id",
    FlightController.getFlight);

// PATCH req on /api/v1/flights/:id/seats    
router.patch("/:id/seats",
    FLightMiddlewares.validateUpdateSeatsRequest,
    FlightController.updateSeats);

module.exports = router;


