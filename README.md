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

## Project Setup

To set up the project, follow these steps:

1. Download this template from GitHub and open it in your favorite text editor.
2. Navigate to the project's folder path in the command line and execute the following command:

   ```
   npm install
   ```

3. In the root directory, create a `.env` file and add the required environment variables. For example:

   ```
   PORT=<port number of your choice>
   ```

- E.g

  ```
  PORT=3000
  ```

4. Go inside the `src` folder and execute the following command:

   ```
   npx sequelize init
   ```

By executing the above command you will generate `migrations` and `seeders` folders, along with a `config.json` file inside the `config` folder.

5. If you're setting up your development environment, write the username and password of your database in the `config.json` file. Also, specify the dialect of your database (e.g., mysql, mariadb).

6. If you're setting up the test or production environment, make sure to replace the host with the URL of the hosted database.

7. To run the server, execute the following command:

   ```
   npm run dev
   ```

Feel free to modify the project according to your specific requirements.
