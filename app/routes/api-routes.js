// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Driver = require("../models/driver.js");

// Routes
// =============================================================
module.exports = function(app) {
  //Get all chirps
  app.get("/api/drivers", function(req, res) {
    // Finding all Chirps, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    Driver.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });
  });

  //Add a chirp
  app.post("/api/driver", function(req, res) {
    console.log("Driver info:");
    console.log(req.body);

    Driver.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      address: req.body.address,
      email: req.body.email,
      password: req.body.password
    }).then(function(results) {
      // `results` here would be the newly created chirp
      res.end();
    });
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    Driver.update(req.body, {
      where: {
        id: req.body.first_name
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};

// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Rider = require("../models/rider.js");

// Routes
// =============================================================
module.exports = function(app) {
  //Get all chirps
  app.get("/api/riders", function(req, res) {
    // Finding all Chirps, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    Rider.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });
  });

  //Add a chirp
  app.post("/api/rider", function(req, res) {
    console.log("Rider info:");
    console.log(req.body);

    Rider.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      address: req.body.address,
      email: req.body.email,
      password: req.body.password
    }).then(function(results) {
      // `results` here would be the newly created chirp
      res.end();
    });
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    Rider.update(req.body, {
      where: {
        id: req.body.first_name
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};
