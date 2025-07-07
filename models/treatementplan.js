
var sequelize = require("../db/init.sequelize.js");
var { Sequelize, DataTypes } = require('sequelize');

const TreatmentPlan = sequelize.define("treatment_plan", {

  patientId: {
    type: DataTypes.UUID,
    allowNull: false,
    comment: "Reference to the patient",
  },
  doctorId: {
    type: DataTypes.UUID,
    allowNull: false,
    comment: "Reference to the doctor",
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    comment: "General description of the treatment plan",
  },
  estimatedDuration: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: "Estimated duration in days for the treatment",
  },
  status: {
    type: DataTypes.ENUM("Planned", "In Progress", "Completed", "Canceled"),
    defaultValue: "Planned",
    comment: "Status of the treatment plan",
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

module.exports = TreatmentPlan;

const { v4: uuidv4 } = require("uuid");
//const VRTreatmentSimulation = require("./models/VRTreatmentSimulation");

async function insertManualData() {
  try {
    const data = [
      {
        id: uuidv4(),
        patientId: "PATIENT_UUID_1",
        procedureType: "Root Canal",
        vrSessionId: uuidv4(),
        duration: 45,
        comfortLevel: "Medium",
        anxietyReductionScore: 7,
        assignedDoctorId: "DOCTOR_UUID_1",
      },
      {
        id: uuidv4(),
        patientId: "PATIENT_UUID_2",
        procedureType: "Teeth Whitening",
        vrSessionId: uuidv4(),
        duration: 30,
        comfortLevel: "High",
        anxietyReductionScore: 9,
        assignedDoctorId: "DOCTOR_UUID_2",
      },
      {
        id: uuidv4(),
        patientId: "PATIENT_UUID_3",
        procedureType: "Implant Surgery",
        vrSessionId: uuidv4(),
        duration: 60,
        comfortLevel: "Low",
        anxietyReductionScore: 5,
        assignedDoctorId: "DOCTOR_UUID_3",
      },
      {
        id: uuidv4(),
        patientId: "PATIENT_UUID_4",
        procedureType: "Root Canal",
        vrSessionId: uuidv4(),
        duration: 50,
        comfortLevel: "High",
        anxietyReductionScore: 8,
        assignedDoctorId: "DOCTOR_UUID_4",
      },
      {
        id: uuidv4(),
        patientId: "PATIENT_UUID_5",
        procedureType: "Teeth Whitening",
        vrSessionId: uuidv4(),
        duration: 40,
        comfortLevel: "Medium",
        anxietyReductionScore: 6,
        assignedDoctorId: "DOCTOR_UUID_5",
      },
      {
        id: uuidv4(),
        patientId: "PATIENT_UUID_6",
        procedureType: "Implant Surgery",
        vrSessionId: uuidv4(),
        duration: 75,
        comfortLevel: "Low",
        anxietyReductionScore: 4,
        assignedDoctorId: "DOCTOR_UUID_6",
      },
      {
        id: uuidv4(),
        patientId: "PATIENT_UUID_7",
        procedureType: "Root Canal",
        vrSessionId: uuidv4(),
        duration: 55,
        comfortLevel: "High",
        anxietyReductionScore: 9,
        assignedDoctorId: "DOCTOR_UUID_7",
      },
      {
        id: uuidv4(),
        patientId: "PATIENT_UUID_8",
        procedureType: "Teeth Whitening",
        vrSessionId: uuidv4(),
        duration: 25,
        comfortLevel: "Medium",
        anxietyReductionScore: 7,
        assignedDoctorId: "DOCTOR_UUID_8",
      },
      {
        id: uuidv4(),
        patientId: "PATIENT_UUID_9",
        procedureType: "Implant Surgery",
        vrSessionId: uuidv4(),
        duration: 80,
        comfortLevel: "Low",
        anxietyReductionScore: 5,
        assignedDoctorId: "DOCTOR_UUID_9",
      },
      {
        id: uuidv4(),
        patientId: "PATIENT_UUID_10",
        procedureType: "Root Canal",
        vrSessionId: uuidv4(),
        duration: 35,
        comfortLevel: "High",
        anxietyReductionScore: 8,
        assignedDoctorId: "DOCTOR_UUID_10",
      },
      // Add 10 more records here
    ];

   // await VRTreatmentSimulation.bulkCreate(data);
    console.log("✅ 20 manual records inserted successfully.");
  } catch (error) {
    console.error("❌ Error inserting manual data:", error);
  }
}

// Run the function
insertManualData();
