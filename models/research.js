/* {
    "CaseStudy": {
      "id": "UUID",
      "patientId": "UUID (Ref to Patient)",
      "doctorId": "UUID (Ref to Doctor)",
      "title": "string",
      "description": "string",
      "proceduresPerformed": ["string"],
      "outcome": "string",
      "researchFiles": ["string (URL of research documents, images, or videos)"],
      "status": "Ongoing | Completed | Published",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  } */


    var sequelize = require("../db/init.sequelize.js");
    var { Sequelize, DataTypes } = require('sequelize');

const CaseStudy = sequelize.define("caseStudy", {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  patientId: {
    type: DataTypes.UUID,
    allowNull: false,
    comment: "Reference to the patient involved in the case study",
  },
  doctorId: {
    type: DataTypes.UUID,
    allowNull: false,
    comment: "Reference to the doctor who conducted the case study",
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "Title of the case study",
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "Description of the case study, including key details and background",
  },
  proceduresPerformed: {
    type: DataTypes.JSONB,
    allowNull: false,
    comment: "List of procedures performed during the case study",
  },
  outcome: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "Outcome of the case study (e.g., successful treatment, complications)",
  },
  researchFiles: {
    type: DataTypes.JSONB,
    allowNull: true,
    comment: "List of URLs linking to research files (documents, images, videos) associated with the case study",
  },
  status: {
    type: DataTypes.ENUM("Ongoing", "Completed", "Published"),
    allowNull: false,
    comment: "Status of the case study (e.g., ongoing, completed, or published)",
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    comment: "Timestamp when the case study was created",
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    comment: "Timestamp when the case study was last updated",
  },
});

/* // Define relationships with other models
CaseStudy.associate = models => {
  // A case study is associated with a patient and a doctor
  CaseStudy.belongsTo(models.Patient, { foreignKey: "patientId" });
  CaseStudy.belongsTo(models.Doctor, { foreignKey: "doctorId" });
}; */

module.exports = CaseStudy;

  