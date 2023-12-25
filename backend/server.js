const express = require("express");
const { Sequelize } = require("sequelize");
const app = express();
const bookRoutes = require("./routes/bookRoutes");
const cors = require("cors");

// Replace with your actual config details
const config = {
  username: "postgres",
  password: "321456987s",
  database: "book_tracker",
  host: "127.0.0.1",
  dialect: "postgres",
  port: 5432, // Default PostgreSQL port, change if your setup is different
};

// Initializing Sequelize with the database configuration
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    port: config.port,
  }
);
app.use(cors());
app.use("/api", bookRoutes);

// Import models after initializing Sequelize
const User = require("./models/user")(sequelize, Sequelize.DataTypes);
const Book = require("./models/book")(sequelize, Sequelize.DataTypes);

// Testing the connection and syncing models
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");

    // Sync models with the database
    return sequelize.sync({ alter: true }); // This will check the current state of the table in the database and perform the necessary changes to make it match the model.
  })
  .then(() => {
    console.log("Models synced with the database.");

    // Start the Express server
    app.listen(3001, () => {
      console.log("Server running on http://localhost:3001");
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
