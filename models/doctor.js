/* {
    "Doctor": {
      "id": "UUID",
      "userId": "UUID (Ref to User)",
      "licenseNumber": "string",
      "specialization": ["General Dentist", "Orthodontist", "Periodontist", "Endodontist", "Prosthodontist"],
      "experienceYears": "integer",
      "consultationFee": "decimal",
      "availableDays": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "availableTimeSlots": [
        {
          "startTime": "HH:mm",
          "endTime": "HH:mm"
        }
      ],
      "rating": "float (1-5)",
      "reviews": [
        {
          "patientId": "UUID (Ref to Patient)",
          "rating": "integer",
          "comment": "string",
          "reviewDate": "timestamp"
        }
      ],
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  } */
    
var sequelize = require("../db/init.sequelize.js");
var { Sequelize, DataTypes } = require('sequelize');
    
    var Doctor = sequelize.define("doctor", {

      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        // references: {
        //   model: "users", // Assuming the doctor is linked to a user account
        //   key: "id",
        // },
      },
      licenseNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true, // Ensures license numbers are unique
      },
      specialization: {
        type: Sequelize.ENUM(
          "General Dentist",
          "Orthodontist",
          "Periodontist",
          "Endodontist",
          "Prosthodontist"
        ),
        allowNull: false,
      },
      experienceYears: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      consultationFee: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      availableDays: {
        type: Sequelize.ARRAY(Sequelize.STRING), // Stores an array of available days
        allowNull: false,
      },
      availableTimeSlots: {
        type: Sequelize.JSONB, // Stores an array of objects with startTime and endTime
        allowNull: false,
      },
      rating: {
        type: Sequelize.FLOAT,
        validate: { min: 1, max: 5 }, // Ensures rating is between 1-5
        defaultValue: 0, // Default rating is 0 until reviews are added
      },
      reviews: {
        type: Sequelize.JSONB, // Stores an array of review objects
        allowNull: true,
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
    
    module.exports = Doctor;
    