const { Sequelize } = require("sequelize");
const db = require("../models");
const { addRowLockOnFlights } = require("./queries");

const CrudRepository = require("./crud_repository");

const { Flight, Airplane, Airport, City } = require("../models");

class FlightRepository extends CrudRepository {
    constructor() {
        // calling the constructor of the parent class or invoke a superclass"s constructor.
        super(Flight);
    }

    async getAllFlights(filter, sort) {
        const response = await Flight.findAll({
            where: filter,
            order: sort,
            // to get Airplane, City, Departure Airport and Arrival Airport data in same query(using join internally)
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
                },
                include: {
                    model: City,
                    required: true,
                }
            },
            {
                model: Airport,
                required: true,
                as: "arrivalAirport",
                on: {
                    col1: Sequelize.where(Sequelize.col("Flight.arrivalAirportId"), "=", Sequelize.col("arrivalAirport.code"))
                },
                include: {
                    model: City,
                    required: true,
                }
            }
            ]
        });
        return response
    };

    async updateRemainingSeats(flightId, seats, dec = 1) {
        // putting row-lock for any kind of update we want to do
        await db.sequelize.query(addRowLockOnFlights(flightId));
        const flight = await Flight.findByPk(flightId);
        if (parseInt(dec)) {
            await flight.decrement("totalSeats", { by: seats });
        } else {
            await flight.increment("totalSeats", { by: seats });
        }
        return flight;
    }
}

module.exports = FlightRepository;