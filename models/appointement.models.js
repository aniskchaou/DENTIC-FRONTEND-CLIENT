

var sequelize = require("../db/init.sequelize.js");
var { Sequelize, DataTypes } = require('sequelize');

/* var Appointement = sequelize.define('appointement', {
    birthdate: Sequelize.STRING,
    message: Sequelize.STRING,
    patient: Sequelize.STRING,
    telephone: Sequelize.STRING,
    datee: Sequelize.STRING,
    email: Sequelize.STRING
});

{
    "Appointment": {
      "id": "UUID",
      "patientId": "UUID (Ref to Patient)",
      "doctorId": "UUID (Ref to Doctor)",
      "clinicLocationId": "UUID (Ref to Clinic)",
      "appointmentDate": "date",
      "startTime": "HH:mm",
      "endTime": "HH:mm",
      "status": "Scheduled | Completed | Canceled | Rescheduled | No-Show",
      "appointmentType": "In-Person | Virtual",
      "reasonForVisit": "string",
      "notes": "string",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  
module.exports = Appointement; */

// var sequelize = require("../db/init.sequelize.js");
// var Sequelize = require("sequelize");

var Appointment = sequelize.define("appointment", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  patientId: {
    type: Sequelize.UUID,
    allowNull: false,
    /* references: {
      model: "patients", // Assuming patients are stored in a table
      key: "id",
    }, */
  },
  doctorId: {
    type: Sequelize.UUID,
    allowNull: false,
   /*  references: {
      model: "users", // Assuming doctors are in the User table
      key: "id",
    }, */
  },
  clinicLocationId: {
    type: Sequelize.UUID,
    allowNull: false,
    /* references: {
      model: "clinics", // Assuming clinics are in a table
      key: "id",
    }, */
  },
  appointmentDate: {
    type: Sequelize.DATEONLY, // Only stores date (YYYY-MM-DD)
    allowNull: false,
  },
  startTime: {
    type: Sequelize.TIME, // Stores time in HH:mm format
    allowNull: false,
  },
  endTime: {
    type: Sequelize.TIME,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM("Scheduled", "Completed", "Canceled", "Rescheduled", "No-Show"),
    allowNull: false,
    defaultValue: "Scheduled",
  },
  appointmentType: {
    type: Sequelize.ENUM("In-Person", "Virtual"),
    allowNull: false,
  },
  reasonForVisit: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  notes: {
    type: Sequelize.TEXT, // Additional details or patient history
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

module.exports = Appointment;
