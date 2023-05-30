const { StatusCodes } = require("http-status-codes");

const { CityService } = require("../services");

const { SuccessResponse, ErrorResponse } = require("../utils/common");


/*
method: POST request 
URL: /cities
data: req.body: {name: "Delhi"}
*/

async function createCity(req, res) {
    try {
        const city = await CityService.createCity({
            name: req.body.name
        });
        SuccessResponse.data = city;
        return res.status(StatusCodes.CREATED)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode)
            .json(ErrorResponse);
    }
}

/*
method: DELETE request 
URL: /cities/:id
data: req.body: {}
*/

async function destroyCity(req, res) {
    try {
        const response = await CityService.destroyCity(req.params.id);
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

async function updateCity(req, res) {
    try {
        const response = await CityService.updateCity(req.body, req.params.id);
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
    createCity,
    destroyCity,
    updateCity
}