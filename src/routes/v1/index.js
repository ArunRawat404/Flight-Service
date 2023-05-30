const express = require("express");

const { InfoController } = require("../../controllers");

const airplaneRoutes = require("./airplane_routes");
const cityRoutes = require("./city_routes");

const router = express.Router();

router.use("/airplanes", airplaneRoutes);

router.use("/cities", cityRoutes);

// /api/v1/info
router.get("/info", InfoController.info);

module.exports = router;
