/* {
    "Feedback": {
      "id": "UUID",
      "patientId": "UUID (Ref to Patient)",
      "doctorId": "UUID (Ref to Doctor)",
      "appointmentId": "UUID (Ref to Appointment)",
      "rating": "1-5",
      "comment": "string",
      "reviewDate": "timestamp",
      "status": "Published | Pending | Hidden",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
 */

  var sequelize = require("../db/init.sequelize.js");
  var { Sequelize, DataTypes } = require('sequelize');

const Feedback = sequelize.define("feedback", {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  patientId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: "patients",
      key: "id",
    },
  },
  doctorId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: "doctors",
      key: "id",
    },
  },
  appointmentId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: "appointments",
      key: "id",
    },
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  reviewDate: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("Published", "Pending", "Hidden"),
    defaultValue: "Pending",
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
});

module.exports = Feedback;

  