// Controllers interact with the service and structure the output response

/*
method: POST request 
URL: /airplanes
data: req.body: {modelNumber: 'airbus320', capacity:200}
*/

const { StatusCodes } = require("http-status-codes");

const { AirplaneService } = require('../services');

async function createAirplane(req, res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        return res.status(StatusCodes.OK)
            .json({
                success: true,
                message: "Successfully created an airplane",
                data: airplane,
                error: {}
            })

    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                success: true,
                message: 'Something went wrong while creating airplane',
                data: {},
                error: error
            })
    }
}

module.exports = {
    createAirplane
}