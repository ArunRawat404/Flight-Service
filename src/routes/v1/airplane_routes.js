const express = require("express");

const { AirplaneController } = require("../../controllers");

const { AirplaneMiddlewares } = require("../../middlewares");

const router = express.Router();

// POST req on /api/v1/airplanes, will first validate the request using AirplaneMiddlewares.validateCreateRequest and then create airplane using AirplaneController.createAirplane
router.post("/",
    AirplaneMiddlewares.validateCreateRequest,
    AirplaneController.createAirplane);

// GET req on /api/v1/airplanes
router.get("/",
    AirplaneController.getAirplanes);

// GET req on /api/v1/airplanes/:id
router.get("/:id",
    AirplaneController.getAirplane);

// DELETE req on /api/v1/airplanes/:id
router.delete("/:id",
    AirplaneController.destroyAirplane);

// PATCH req on /api/v1/airplanes/:id
router.patch("/:id",
    AirplaneMiddlewares.validateUpdateRequest,
    AirplaneController.updateAirplane);

module.exports = router; 