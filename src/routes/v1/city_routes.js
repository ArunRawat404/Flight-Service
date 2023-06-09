const express = require("express");

const { CityController } = require("../../controllers");

const { CityMiddlewares } = require("../../middlewares");

const router = express.Router();

// POST req on /api/v1/cities
router.post("/",
    CityMiddlewares.validateCreateRequest,
    CityController.createCity);

// DELETE req on /api/v1/cities/:id
router.delete("/:id",
    CityController.destroyCity);

// PATCH req on /api/v1/airplanes/:id
router.patch("/:id",
    CityMiddlewares.validateUpdateRequest,
    CityController.updateCity);

module.exports = router; 