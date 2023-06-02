const CrudRepository = require("./crud_repository");

const { Airport } = require("../models")


class AirportRepository extends CrudRepository {
    constructor() {
        // calling the constructor of the parent class or invoke a superclass"s constructor.
        super(Airport);
    }
}

module.exports = AirportRepository;