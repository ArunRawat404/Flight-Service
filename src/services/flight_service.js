// Controllers pass the request to the service. Services use repositories to interact with the database.

const { StatusCodes } = require("http-status-codes");
const { Op } = require("sequelize");

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

async function getAllFlights(query) {
    let customFilter = {};
    // trips=MUM-DEL
    if (query.trips) {
        [departureAirportId, arrivalAirportId] = query.trips.split("-");
        customFilter.departureAirportId = departureAirportId;
        customFilter.arrivalAirportId = arrivalAirportId;
    }
    if (query.price) {
        [minPrice, maxPrice] = query.price.split("-");
        console.log(minPrice, maxPrice)
        customFilter.price = {
            // if only minPrice is provided give maxPrice same as minPrice
            [Op.between]: [minPrice, (maxPrice == undefined) ? minPrice : maxPrice]
        }
    }
    try {
        const flights = await flightRepository.getAllFlights(customFilter);
        return flights;
    } catch (error) {
        throw new AppError("Cannot fetch data of all the flights", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


module.exports = {
    createFlight,
    getAllFlights
}