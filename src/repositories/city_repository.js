const CrudRepository = require('./crud_repository');

const { City } = require('../models')


class CityRepository extends CrudRepository {
    constructor() {
        // calling the constructor of the parent class or invoke a superclass's constructor.
        super(City);
    }
}

module.exports = CityRepository;