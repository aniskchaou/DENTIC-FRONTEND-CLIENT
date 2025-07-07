
var sequelize = require("../db/init.sequelize.js");
var { Sequelize, DataTypes } = require('sequelize');

const Procedure = sequelize.define("procedure", {

  treatmentPlanId: {
    type: DataTypes.UUID,
    allowNull: true,
    comment: "Reference to the associated treatment plan, if applicable",
  },
  appointmentId: {
    type: DataTypes.UUID,
    allowNull: true,
    comment: "Reference to the associated appointment, if applicable",
  },
  procedureName: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "Name of the procedure (e.g., Root Canal, Dental Implant)",
  },
  procedureDate: {
    type: DataTypes.DATE,
    allowNull: false,
    comment: "Date when the procedure was performed",
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: "Estimated duration in minutes",
  },
  anesthesiaType: {
    type: DataTypes.ENUM("Local", "General", "None"),
    allowNull: true,
    comment: "Type of anesthesia used",
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: "Additional details about the procedure",
  },
  status: {
    type: DataTypes.ENUM("Scheduled", "Completed", "Canceled"),
    defaultValue: "Scheduled",
    comment: "Status of the procedure",
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

module.exports = Procedure;
