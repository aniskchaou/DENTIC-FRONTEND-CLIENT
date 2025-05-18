/* {
    "Clinic": {
      "id": "UUID",
      "name": "string",
      "location": {
        "address": "string",
        "city": "string",
        "state": "string",
        "zipCode": "string",
        "country": "string"
      },
      "contactNumber": "string",
      "email": "string",
      "workingHours": {
        "Monday": {"open": "HH:mm", "close": "HH:mm"},
        "Tuesday": {"open": "HH:mm", "close": "HH:mm"},
        "Wednesday": {"open": "HH:mm", "close": "HH:mm"},
        "Thursday": {"open": "HH:mm", "close": "HH:mm"},
        "Friday": {"open": "HH:mm", "close": "HH:mm"},
        "Saturday": {"open": "HH:mm", "close": "HH:mm"},
        "Sunday": "Closed"
      },
      "doctorsAvailable": ["UUID (Ref to Doctor)"],
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
   */
  var sequelize = require("../db/init.sequelize.js");
  var Sequelize = require("sequelize");
  
  var Clinic = sequelize.define("clinic", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    state: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    zipCode: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    country: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    contactNumber: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    workingHours: {
      type: Sequelize.JSONB, // Storing working hours as a JSON object
      allowNull: false,
    },
    doctorsAvailable: {
      type: Sequelize.ARRAY(Sequelize.UUID), // Storing an array of doctor IDs
      allowNull: true,
      references: {
        model: "users", // Assuming doctors are in the User table
        key: "id",
      },
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  });
  
  module.exports = Clinic;
  