const CrudRepository = require('./crud_repository');

const { Airplane } = require('../models')


class AirplaneRepository extends CrudRepository {
    constructor() {
        // calling the constructor of the parent class or invoke a superclass's constructor.
        super(Airplane);
    }
}

module.exports = AirplaneRepository;