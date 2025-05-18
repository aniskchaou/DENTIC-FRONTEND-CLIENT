/* {
    "VRTreatmentSimulation": {
      "id": "UUID",
      "patientId": "UUID (Ref to Patient)",
      "procedureType": "Root Canal | Teeth Whitening | Implant Surgery",
      "vrSessionId": "UUID (Unique ID for VR Session)",
      "duration": "integer (minutes)",
      "patientFeedback": {
        "comfortLevel": "Low | Medium | High",
        "anxietyReductionScore": "integer (1-10)"
      },
      "assignedDoctorId": "UUID (Ref to Doctor)",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  } */


    var sequelize = require("../db/init.sequelize.js");
    var { Sequelize, DataTypes } = require('sequelize');

var VRTreatmentSimulation = sequelize.define("vrtreatment_simulation", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  patientId: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      model: "users", // Assuming the patient is stored in the User table
      key: "id",
    },
  },
  procedureType: {
    type: Sequelize.ENUM("Root Canal", "Teeth Whitening", "Implant Surgery"),
    allowNull: false,
  },
  vrSessionId: {
    type: Sequelize.UUID,
    allowNull: false,
    unique: true,
  },
  duration: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 1, // Ensuring duration is at least 1 minute
    },
  },
  comfortLevel: {
    type: Sequelize.ENUM("Low", "Medium", "High"),
    allowNull: true,
  },
  anxietyReductionScore: {
    type: Sequelize.INTEGER,
    allowNull: true,
    validate: {
      min: 1,
      max: 10,
    },
  },
  assignedDoctorId: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      model: "users", // Assuming doctors are also in the User table
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

module.exports = VRTreatmentSimulation;

const { v4: uuidv4 } = require("uuid");
const { Op } = require("sequelize");
const VRTreatmentSimulation = require("./models/VRTreatmentSimulation");
const User = require("./models/User"); // Assuming 'User' model represents patients & doctors

async function addRealData() {
  try {
    // Fetch real patients and doctors
    const patients = await User.findAll({
      where: { role: "patient" }, // Adjust according to your role system
      attributes: ["id"],
    });

    const doctors = await User.findAll({
      where: { role: "doctor" }, // Adjust according to your role system
      attributes: ["id"],
    });

    if (patients.length === 0 || doctors.length === 0) {
      console.log("No patients or doctors found in the database.");
      return;
    }

    const data = [];

    for (let i = 0; i < 20; i++) {
      data.push({
        id: uuidv4(),
        patientId: getRandomItem(patients).id, // Assign random real patient
        procedureType: getRandomProcedure(),
        vrSessionId: uuidv4(),
        duration: getRandomInt(10, 90), // Random duration between 10-90 minutes
        comfortLevel: getRandomComfortLevel(),
        anxietyReductionScore: getRandomInt(1, 10),
        assignedDoctorId: getRandomItem(doctors).id, // Assign random real doctor
      });
    }

    await VRTreatmentSimulation.bulkCreate(data);
    console.log("20 real records inserted successfully.");
  } catch (error) {
    console.error("Error inserting real data:", error);
  }
}

// Helper functions
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomProcedure() {
  const procedures = ["Root Canal", "Teeth Whitening", "Implant Surgery"];
  return procedures[Math.floor(Math.random() * procedures.length)];
}

function getRandomComfortLevel() {
  const levels = ["Low", "Medium", "High"];
  return levels[Math.floor(Math.random() * levels.length)];
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Run function
addRealData();


  