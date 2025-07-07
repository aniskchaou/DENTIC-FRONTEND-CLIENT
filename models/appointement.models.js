var sequelize = require("../db/init.sequelize.js");
var { Sequelize, DataTypes } = require('sequelize');

var Appointment = sequelize.define("appointment", {
  patientId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  doctorId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  clinicLocationId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  appointmentDate: {
    type: DataTypes.STRING, // Store as string (YYYY-MM-DD)
    allowNull: false,
  },
  startTime: {
    type: DataTypes.STRING, // Store as string (HH:mm)
    allowNull: false,
  },
  endTime: {
    type: DataTypes.STRING, // Store as string (HH:mm)
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING, // Store as string
    allowNull: false,
    defaultValue: "Scheduled",
  },
  appointmentType: {
    type: DataTypes.STRING, // Store as string
    allowNull: false,
  },
  reasonForVisit: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  notes: {
    type: DataTypes.STRING, // Store as string
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: () => new Date().toISOString(),
  },
  updatedAt: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: () => new Date().toISOString(),
  },
});

/**
 * Insert a real Appointment record with all fields as strings.
 */
async function insertRealAppointment() {
  const realData = {
    patientId: "p1234567-89ab-cdef-0123-456789abcdef",
    doctorId: "d1234567-89ab-cdef-0123-456789abcdef",
    clinicLocationId: "c1234567-89ab-cdef-0123-456789abcdef",
    appointmentDate: "2025-06-01",
    startTime: "09:00",
    endTime: "09:30",
    status: "Scheduled",
    appointmentType: "In-Person",
    reasonForVisit: "Routine dental checkup",
    notes: "Patient prefers morning appointments.",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  return await Appointment.create(realData);
}

module.exports = { Appointment, insertRealAppointment };
