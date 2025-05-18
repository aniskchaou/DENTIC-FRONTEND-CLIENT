/* {
    "Telemedicine": {
      "id": "UUID",
      "patientId": "UUID (Ref to Patient)",
      "doctorId": "UUID (Ref to Doctor)",
      "appointmentId": "UUID (Ref to Appointment)",
      "meetingLink": "string (Video Call URL)",
      "sessionDuration": "integer (minutes)",
      "status": "Scheduled | In Progress | Completed | Canceled",
      "prescriptionId": "UUID (Ref to Prescription)",
      "recordedSessionUrl": "string (if applicable)",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  
  {
    "Localization": {
      "id": "UUID",
      "languageCode": "string (en | fr | es | de | ar | zh)",
      "translatedText": {
        "Dashboard": "string",
        "Appointments": "string",
        "Billing": "string",
        "Medical Records": "string",
        "Feedback": "string"
      },
      "rtlSupport": "Yes | No",
      "lastUpdated": "timestamp"
    }
  }
  {
    "TelemedicineSession": {
      "id": "UUID",
      "patientId": "UUID (Ref to Patient)",
      "doctorId": "UUID (Ref to Doctor)",
      "sessionType": "Video Call | Voice Call | Chat",
      "scheduledDate": "timestamp",
      "duration": "integer (minutes)",
      "sessionLink": "string (URL)",
      "medicalDocumentsShared": [
        {
          "documentId": "UUID",
          "documentType": "X-ray | Prescription | Diagnosis Report",
          "uploadedAt": "timestamp"
        }
      ],
      "sessionStatus": "Scheduled | In Progress | Completed | Canceled",
      "doctorNotes": "string",
      "patientFeedback": "integer (1-5)",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  } */

    var sequelize = require("../db/init.sequelize.js");
    var { Sequelize, DataTypes } = require('sequelize');
    
    const Telemedicine = sequelize.define("telemedicine", {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
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
      appointmentId: {
        type: DataTypes.UUID,
        allowNull: false,
        comment: "Reference to the appointment associated with the telemedicine session",
      },
      meetingLink: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "URL for the video call meeting",
      },
      sessionDuration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "Duration of the session in minutes",
      },
      status: {
        type: DataTypes.ENUM("Scheduled", "In Progress", "Completed", "Canceled"),
        defaultValue: "Scheduled",
        comment: "Status of the telemedicine session",
      },
      prescriptionId: {
        type: DataTypes.UUID,
        allowNull: true,
        comment: "Reference to the prescription given during the session",
      },
      recordedSessionUrl: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "URL for the recorded session (if applicable)",
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        comment: "Timestamp when the telemedicine session was created",
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        comment: "Timestamp when the telemedicine session was last updated",
      },
    });
    
    module.exports = Telemedicine;

    
    const Localization = sequelize.define("localization", {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      languageCode: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "Language code (e.g., en, fr, es, etc.)",
      },
      translatedText: {
        type: DataTypes.JSONB,
        allowNull: false,
        comment: "Translated text for various app sections like Dashboard, Appointments, etc.",
      },
      rtlSupport: {
        type: DataTypes.ENUM("Yes", "No"),
        allowNull: false,
        comment: "Whether the language supports Right-To-Left (RTL) layout",
      },
      lastUpdated: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        comment: "Timestamp when the localization was last updated",
      },
    });
    
    module.exports = Localization;

    
    const TelemedicineSession = sequelize.define("telemedicine_session", {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
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
      sessionType: {
        type: DataTypes.ENUM("Video Call", "Voice Call", "Chat"),
        allowNull: false,
        comment: "Type of session (Video Call, Voice Call, or Chat)",
      },
      scheduledDate: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: "Scheduled date and time of the session",
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "Duration of the session in minutes",
      },
      sessionLink: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "URL for the session (video call, voice call, or chat)",
      },
      medicalDocumentsShared: {
        type: DataTypes.JSONB,
        allowNull: true,
        comment: "Array of medical documents shared during the session (e.g., X-ray, Prescription)",
      },
      sessionStatus: {
        type: DataTypes.ENUM("Scheduled", "In Progress", "Completed", "Canceled"),
        defaultValue: "Scheduled",
        comment: "Current status of the session",
      },
      doctorNotes: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "Doctor's notes about the session",
      },
      patientFeedback: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "Patient feedback for the session (1-5)",
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        comment: "Timestamp when the telemedicine session was created",
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        comment: "Timestamp when the telemedicine session was last updated",
      },
    });
    
    module.exports = TelemedicineSession;
            