// Controllers interact with the service and structure the output response

/*
method: POST request 
URL: /airplanes
data: req.body: {modelNumber: 'airbus320', capacity:200}
*/

const { StatusCodes } = require("http-status-codes");

const { AirplaneService } = require('../services');

const { SuccessResponse, ErrorResponse } = require('../utils/common');

async function createAirplane(req, res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        SuccessResponse.data = airplane;
        return res.status(StatusCodes.CREATED)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode)
            .json(ErrorResponse);
    }
}

/*
method: GET request 
URL: /airplanes/
data: req.body: {}
*/

async function getAirplanes(req, res) {
    try {
        const airplanes = await AirplaneService.getAirplanes();
        SuccessResponse.data = airplanes;
        return res.status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode)
            .json(ErrorResponse);
    }
}

/*
method: GET request 
URL: /airplanes/:id
data: req.body: {}
*/

async function getAirplane(req, res) {
    try {
        // The req.params property is an object containing properties mapped to the named route “parameters”. For example, if you have the route /airplanes/:id, then the “id” property is available as req.params.id. 
        const airplanes = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data = airplanes;
        return res.status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode)
            .json(ErrorResponse);
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane
}