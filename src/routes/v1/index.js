const express = require("express");

const { InfoController } = require("../../controllers");

const airplaneRoutes = require("./airplane_routes");
const cityRoutes = require("./city_routes");
const airportRoutes = require("./airport_routes");

const router = express.Router();

router.use("/airplanes", airplaneRoutes);

router.use("/cities", cityRoutes);

router.use("/airports", airportRoutes);

// /api/v1/info
router.get("/info", InfoController.info);

module.exports = router;
