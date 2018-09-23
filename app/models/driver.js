// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Driver = sequelize.define(
  "driver",
  {
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    address: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING
  },
  {
    timestamps: false
  }
);

// Syncs with DB
Driver.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Driver;
