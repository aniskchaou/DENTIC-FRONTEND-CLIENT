
/* 
var Operation = sequelize.define('operation', {
//    patient: {  type: Sequelize.INTEGER,references: 'patients',  referencesKey: 'id' },
  patient: {
        type: Sequelize.INTEGER,
        references: {
            model: 'patients',
            key: 'id'
        }
    },
    name:Squelize.STRING,
    description: Sequelize.STRING,
    status: Sequelize.STRING
});

{
    "Operation": {
      "id": "UUID",
      "patientId": "UUID (Ref to Patient)",
      "doctorId": "UUID (Ref to Doctor)",
      "clinicId": "UUID (Ref to Clinic)",
      "operationType": "Surgical | Non-Surgical",
      "procedureName": "Root Canal | Tooth Extraction | Dental Implant | Gum Surgery",
      "operationDate": "timestamp",
      "duration": "integer (Estimated duration in minutes)",
      "anesthesiaType": "Local | General | None",
      "equipmentUsed": [
        {
          "equipmentId": "UUID (Ref to Equipment)",
          "equipmentName": "string"
        }
      ],
      "medicationsAdministered": [
        {
          "medicationId": "UUID (Ref to Medicament)",
          "medicationName": "string",
          "dosage": "string"
        }
      ],
      "complications": "string (If any)",
      "postOperationInstructions": "string",
      "followUpRequired": "Yes | No",
      "followUpDate": "timestamp (If applicable)",
      "status": "Scheduled | Completed | Canceled",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  
module.exports = Operation; */


var sequelize = require("../db/init.sequelize.js");
var { Sequelize, DataTypes } = require('sequelize');

const Operation = sequelize.define("operation", {

  patientId: {
    type: DataTypes.UUID,
    allowNull: false,
    comment: "Reference to the patient undergoing the operation"
  },
  doctorId: {
    type: DataTypes.UUID,
    allowNull: false,
    comment: "Reference to the doctor performing the operation"
  },
  clinicId: {
    type: DataTypes.UUID,
    allowNull: false,
    comment: "Reference to the clinic where the operation is performed"
  },
  operationType: {
    type: DataTypes.ENUM("Surgical", "Non-Surgical"),
    allowNull: false,
    comment: "Type of the operation (Surgical or Non-Surgical)"
  },
  procedureName: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "Name of the procedure being performed (e.g., Root Canal, Tooth Extraction)"
  },
  operationDate: {
    type: DataTypes.DATE,
    allowNull: false,
    comment: "The date and time when the operation is scheduled or was performed"
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "Estimated duration of the operation in minutes"
  },
  anesthesiaType: {
    type: DataTypes.ENUM("Local", "General", "None"),
    allowNull: false,
    comment: "Type of anesthesia used during the operation"
  },
  complications: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "Complications encountered during the operation (if any)"
  },
  postOperationInstructions: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "Instructions provided to the patient after the operation"
  },
  followUpRequired: {
    type: DataTypes.ENUM("Yes", "No"),
    allowNull: false,
    comment: "Whether a follow-up is required after the operation"
  },
  followUpDate: {
    type: DataTypes.DATE,
    allowNull: true,
    comment: "Date and time for follow-up if applicable"
  },
  status: {
    type: DataTypes.ENUM("Scheduled", "Completed", "Canceled"),
    allowNull: false,
    comment: "Current status of the operation"
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    comment: "Timestamp when the operation record was created"
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    comment: "Timestamp when the operation record was last updated"
  }
});

/* // Define the relationships with other models (Patient, Doctor, Clinic, Equipment, Medicament)
Operation.associate = models => {
  // An operation is associated with one patient, one doctor, and one clinic
  Operation.belongsTo(models.Patient, { foreignKey: "patientId" });
  Operation.belongsTo(models.Doctor, { foreignKey: "doctorId" });
  Operation.belongsTo(models.Clinic, { foreignKey: "clinicId" });

  // Define many-to-many relationship with equipment used in the operation
  Operation.belongsToMany(models.Equipment, {
    through: "OperationEquipment",
    foreignKey: "operationId",
    otherKey: "equipmentId",
  });

  // Define many-to-many relationship with medications administered during the operation
  Operation.belongsToMany(models.Medicament, {
    through: "OperationMedications",
    foreignKey: "operationId",
    otherKey: "medicationId",
  });
}; */

module.exports = Operation;
