const express = require('express');

const { InfoController } = require('../../controllers')

const airplaneRoutes = require('./airplane_routes')

const router = express.Router();

router.use('/airplanes', airplaneRoutes);

// /api/v1/info
router.get('/info', InfoController.info);

module.exports = router;
