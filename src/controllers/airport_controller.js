// Controllers interact with the service and structure the output response

const { StatusCodes } = require("http-status-codes");

const { AirportService } = require("../services");

const { SuccessResponse, ErrorResponse } = require("../utils/common");

/*
method: POST request 
URL: /airports
data: req.body: {name: "IGI", cityId: 5, code: "DEL"}
*/

async function createAirport(req, res) {
    try {
        const airport = await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId
        });
        SuccessResponse.data = airport;
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
URL: /airports
data: req.body: {}
*/

async function getAirports(req, res) {
    try {
        const response = await AirportService.getAirports();
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
URL: /airports/:id
data: req.body: {}
*/

async function getAirport(req, res) {
    try {
        const response = await AirportService.getAirport(req.params.id);
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
URL: /airports/:id
data: req.body: {}
*/

async function destroyAirport(req, res) {
    try {
        const response = await AirportService.destroyAirport(req.params.id);
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
URL: /airports/:id
data: req.body: {data}
*/

async function updateAirport(req, res) {
    try {
        const response = await AirportService.updateAirport(req.body, req.params.id);
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
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}