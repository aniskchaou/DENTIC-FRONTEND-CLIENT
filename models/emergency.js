/* {
    "EmergencyHandling": {
      "id": "UUID",
      "patientId": "UUID (Ref to Patient)",
      "emergencyType": "Severe Pain | Trauma | Infection | Other",
      "reportedBy": "UUID (Ref to User)",
      "priorityLevel": "High | Medium | Low",
      "responseTime": "decimal (in minutes)",
      "assignedDoctorId": "UUID (Ref to Doctor)",
      "treatmentStatus": "Pending | In Progress | Completed",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  {
    "EmergencyCase": {
      "id": "UUID",
      "patientId": "UUID (Ref to Patient)",
      "reportedBy": "UUID (Ref to Staff or Patient)",
      "severityLevel": "Mild | Moderate | Severe | Critical",
      "symptoms": ["string"],
      "treatmentStatus": "Pending | In Progress | Completed",
      "assignedDoctorId": "UUID (Ref to Doctor)",
      "arrivalTime": "timestamp",
      "treatmentStartTime": "timestamp",
      "treatmentEndTime": "timestamp",
      "notes": "string",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  {
    "Referral": {
      "id": "UUID",
      "patientId": "UUID (Ref to Patient)",
      "referredByDoctorId": "UUID (Ref to Doctor)",
      "referredToSpecialistId": "UUID (Ref to Specialist Doctor)",
      "reasonForReferral": "string",
      "specialistClinicId": "UUID (Ref to External Clinic, if applicable)",
      "status": "Pending | Accepted | Rejected | Completed",
      "appointmentDate": "timestamp",
      "feedbackFromSpecialist": "string",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
   */


  var sequelize = require("../db/init.sequelize.js");
  var { Sequelize, DataTypes } = require('sequelize');

var EmergencyHandling = sequelize.define("emergency_handling", {

  patientId: {
    type: Sequelize.UUID,
    allowNull: false,
    // references: {
    //   model: "patients", // Assuming patients are stored in a table
    //   key: "id",
    // },
  },
  emergencyType: {
    type: Sequelize.ENUM("Severe Pain", "Trauma", "Infection", "Other"),
    allowNull: false,
  },
  reportedBy: {
    type: Sequelize.UUID,
    allowNull: false,
    // references: {
    //   model: "users", // Assuming the report is made by a staff member or patient
    //   key: "id",
    // },
  },
  priorityLevel: {
    type: Sequelize.ENUM("High", "Medium", "Low"),
    allowNull: false,
  },
  responseTime: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  assignedDoctorId: {
    type: Sequelize.UUID,
    allowNull: false,
    // references: {
    //   model: "doctors", // Assuming doctors are stored in a table
    //   key: "id",
    // },
  },
  treatmentStatus: {
    type: Sequelize.ENUM("Pending", "In Progress", "Completed"),
    allowNull: false,
    defaultValue: "Pending",
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

module.exports = EmergencyHandling;
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require("sequelize");

var EmergencyCase = sequelize.define("emergency_case", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  patientId: {
    type: Sequelize.UUID,
    allowNull: false,
    // references: {
    //   model: "patients", // Assuming patients are stored in a table
    //   key: "id",
    // },
  },
  reportedBy: {
    type: Sequelize.UUID,
    allowNull: false,
    // references: {
    //   model: "users", // Assuming report is made by staff or patient
    //   key: "id",
    // },
  },
  severityLevel: {
    type: Sequelize.ENUM("Mild", "Moderate", "Severe", "Critical"),
    allowNull: false,
  },
  symptoms: {
    type: Sequelize.ARRAY(Sequelize.STRING), // Array of symptoms reported by the patient
    allowNull: true,
  },
  treatmentStatus: {
    type: Sequelize.ENUM("Pending", "In Progress", "Completed"),
    allowNull: false,
    defaultValue: "Pending",
  },
  assignedDoctorId: {
    type: Sequelize.UUID,
    allowNull: false,
    // references: {
    //   model: "doctors", // Assuming doctors are stored in a table
    //   key: "id",
    // },
  },
  arrivalTime: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  treatmentStartTime: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  treatmentEndTime: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  notes: {
    type: Sequelize.TEXT,
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

module.exports = EmergencyCase;
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require("sequelize");

var Referral = sequelize.define("referral", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  patientId: {
    type: Sequelize.UUID,
    allowNull: false,
    // references: {
    //   model: "patients", // Assuming patients are stored in a table
    //   key: "id",
    // },
  },
  referredByDoctorId: {
    type: Sequelize.UUID,
    allowNull: false,
    // references: {
    //   model: "doctors", // Referring doctor
    //   key: "id",
    // },
  },
  referredToSpecialistId: {
    type: Sequelize.UUID,
    allowNull: false,
    // references: {
    //   model: "doctors", // Specialist doctor
    //   key: "id",
    // },
  },
  reasonForReferral: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  specialistClinicId: {
    type: Sequelize.UUID,
    allowNull: true,
    // references: {
    //   model: "clinics", // Assuming clinics are stored in a table
    //   key: "id",
    // },
  },
  status: {
    type: Sequelize.ENUM("Pending", "Accepted", "Rejected", "Completed"),
    allowNull: false,
    defaultValue: "Pending",
  },
  appointmentDate: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  feedbackFromSpecialist: {
    type: Sequelize.TEXT,
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

module.exports = Referral;
