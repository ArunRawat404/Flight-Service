const CrudRepository = require("./crud_repository");

const { Flight } = require("../models")


class FlightRepository extends CrudRepository {
    constructor() {
        // calling the constructor of the parent class or invoke a superclass"s constructor.
        super(Flight);
    }
}

module.exports = FlightRepository;