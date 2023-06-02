const express = require("express");

const { AirportController } = require("../../controllers");

const { AirportMiddlewares } = require("../../middlewares");

const router = express.Router();

// POST req on /api/v1/airports
router.post("/",
    AirportMiddlewares.validateCreateRequest,
    AirportController.createAirport);

// GET req on /api/v1/airports
router.get("/",
    AirportController.getAirports);

// GET req on /api/v1/airports/:id
router.get("/:id",
    AirportController.getAirport);

// DELETE req on /api/v1/airports/:id
router.delete("/:id",
    AirportController.destroyAirport);

// PATCH req on /api/v1/airports/:id
router.patch("/:id",
    AirportMiddlewares.validateUpdateRequest,
    AirportController.updateAirport);

module.exports = router;


