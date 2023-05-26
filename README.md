## Project Template: Node.js Project

This is a base Node.js project template that anyone can use. It has been prepared with some of the most important code principles and project management recommendations in mind. Feel free to make any changes as needed.

## Folder Structure

### `src`

Inside the `src` folder, you will find all the actual source code related to the project. This folder should not include any tests. If needed, you can create a separate `tests` folder for that purpose.

Now, let's take a closer look inside the `src` folder:

- `config`: This folder contains all the configurations and setups for libraries or modules used in the project. For example, you can set up `dotenv` here to use environment variables in a cleaner fashion. This can be done in the `server_config.js` file. Another example is configuring a logging library to generate meaningful logs. The configuration for this library should also be done here.

- `routes`: In the routes folder, you can register routes along with their corresponding middleware and controllers.

- `middlewares`: Middlewares intercept incoming requests and allow you to write validators, authenticators, and other similar functionalities.

- `controllers`: Controllers act as the last middleware layer. After the controllers receive incoming requests and data, they pass it to the business layer to execute the business logic. Once the business layer returns an output, the controllers structure the API response and send it back.

- `repositories`: This folder contains all the logic for interacting with the database by writing queries. You can include raw queries or ORM queries here.

- `services`: Services handle the business logic and interact with repositories to fetch data from the database.

- `utils`: The `utils` folder contains helper methods, error classes, and other utility functions.
