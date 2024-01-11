const express = require("express");
const cors = require("cors");
const app = express();

const dotenv = require("dotenv");

dotenv.config();

// Swagger dependencies
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

var corsOptions = {
  origin: process.env.CORS_ORIGIN || "http://localhost:8081",
};
app.use(cors(corsOptions));

//connect mysql
const db = require("./app/models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to nodejs application." });
});
require("./app/routes/tutorial.routes.js")(app);

// Swagger setup
const swaggerOptions = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "NodeJS Swagger API",
        version: "1.0.0",
        description: "API documentation for your NodeJS application",
      },
    },
    apis: ["./app/routes/*.js"], // Specify the path to your route files
  };
  
  const swaggerSpec = swaggerJSDoc(swaggerOptions);
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});