// Controllers interact with the service and structure the output response

const { StatusCodes } = require("http-status-codes");

const { AirplaneService } = require('../services');

const { SuccessResponse, ErrorResponse } = require('../utils/common');

/*
method: POST request 
URL: /airplanes
data: req.body: {modelNumber: 'airbus320', capacity: 200}
*/

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
        const response = await AirplaneService.getAirplanes();
        SuccessResponse.data = response;
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
        const response = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode)
            .json(ErrorResponse);
    }
}

/*
method: DELETE request 
URL: /airplanes/:id
data: req.body: {}
*/

async function destroyAirplane(req, res) {
    try {
        const response = await AirplaneService.destroyAirplane(req.params.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode)
            .json(ErrorResponse);
    }
}

/*
method: PATCH request 
URL: /airplanes/:id
data: req.body: {data}
*/

async function updateAirplane(req, res) {
    try {
        const response = await AirplaneService.updateAirplane(req.body, req.params.id);
        SuccessResponse.data = response;
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
    getAirplane,
    destroyAirplane,
    updateAirplane
}