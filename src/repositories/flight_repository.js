const { Sequelize } = require("sequelize")

const CrudRepository = require("./crud_repository");

const { Flight, Airplane, Airport } = require("../models");

class FlightRepository extends CrudRepository {
    constructor() {
        // calling the constructor of the parent class or invoke a superclass"s constructor.
        super(Flight);
    }

    async getAllFlights(filter, sort) {
        const response = await Flight.findAll({
            where: filter,
            order: sort,
            // to get Airplane, Departure Airport and Arrival Airport data in same query(using join internally)
            include: [{
                model: Airplane,
                required: true,
                as: "airplaneDetails",
            },
            {
                model: Airport,
                required: true,
                as: "departureAirport",
                on: {
                    col1: Sequelize.where(Sequelize.col("Flight.departureAirportId"), "=", Sequelize.col("departureAirport.code"))
                }
            },
            {
                model: Airport,
                required: true,
                as: "arrivalAirport",
                on: {
                    col1: Sequelize.where(Sequelize.col("Flight.arrivalAirportId"), "=", Sequelize.col("arrivalAirport.code"))
                }
            }
            ]
        });
        return response
    };
}

module.exports = FlightRepository;