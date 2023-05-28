// Controllers don't directly talk to models. Services have business logic, so they don't directly talk to models. Repository talks to models.

const { Logger } = require('../config/')

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    // Insert queries
    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            Logger.error("Something went wrong in CRUD Repo: create");
            throw error;
        }
    }

    // Delete queries
    async destroy(data) {
        try {
            const response = await this.model.destroy({
                where: {
                    id: data
                }
            });
            return response;
        } catch (error) {
            Logger.error("Something went wrong in CRUD Repo: destroy");
            throw error;
        }
    }

    // Find query based on Primary Key
    async get(data) {
        try {
            const response = await this.model.findByPk(data);
            return response;
        } catch (error) {
            Logger.error("Something went wrong in CRUD Repo: destroy");
            throw error;
        }
    }

    // Find all queries 
    async getAll() {
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            Logger.error("Something went wrong in CRUD Repo: destroy");
            throw error;
        }
    }

    // Update queries, data -> {col: val, ....}
    async update(id, data) {
        try {
            const response = await this.model.update(data, {
                where: {
                    id: id
                }
            });
            return response;
        } catch (error) {
            Logger.error("Something went wrong in CRUD Repo: destroy");
            throw error;
        }
    }
}

module.exports = CrudRepository;