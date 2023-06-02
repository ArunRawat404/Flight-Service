// Controllers pass the request to the service. Services use repositories to interact with the database.

const { StatusCodes } = require("http-status-codes");

const { FlightRepository } = require("../repositories");

const AppError = require("../utils/errors/app_error");


const flightRepository = new FlightRepository();

async function createFlight(data) {
    try {
        const flight = await flightRepository.create(data);
        return flight;
    } catch (error) {
        if (error.name == "SequelizeValidationError") {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST)
        }
        throw new AppError("Cannot create a new flight object", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


module.exports = {
    createFlight,
}