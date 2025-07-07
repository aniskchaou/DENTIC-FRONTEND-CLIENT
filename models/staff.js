/* {
    "Staff": {
      "id": "UUID",
      "fullName": "string",
      "role": "Admin | Dentist | Assistant | Receptionist | Accountant",
      "email": "string",
      "phone": "string",
      "clinicId": "UUID (Ref to Clinic)",
      "shiftSchedule": {
        "Monday": {"start": "HH:mm", "end": "HH:mm"},
        "Tuesday": {"start": "HH:mm", "end": "HH:mm"},
        "Wednesday": {"start": "HH:mm", "end": "HH:mm"},
        "Thursday": {"start": "HH:mm", "end": "HH:mm"},
        "Friday": {"start": "HH:mm", "end": "HH:mm"},
        "Saturday": {"start": "HH:mm", "end": "HH:mm"},
        "Sunday": "Off"
      },
      "permissions": [
        "View Patients",
        "Manage Appointments",
        "Access Finances",
        "Edit Prescriptions"
      ],
      "status": "Active | Inactive",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  } */


    var sequelize = require("../db/init.sequelize.js");
    var { Sequelize, DataTypes } = require('sequelize');

const Staff = sequelize.define("staff", {

  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "Full name of the staff member",
  },
  role: {
    type: DataTypes.ENUM("Admin", "Dentist", "Assistant", "Receptionist", "Accountant"),
    allowNull: false,
    comment: "Role of the staff member in the clinic",
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
    comment: "Email address of the staff member",
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "Phone number of the staff member",
  },
  clinicId: {
    type: DataTypes.UUID,
    allowNull: false,
    comment: "Reference to the clinic where the staff works",
  },
  shiftSchedule: {
    type: DataTypes.JSONB,
    allowNull: false,
    comment: "Schedule for the staff member for each day of the week",
  },
  permissions: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    comment: "List of permissions assigned to the staff member",
  },
  status: {
    type: DataTypes.ENUM("Active", "Inactive"),
    defaultValue: "Active",
    comment: "Status of the staff member",
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    comment: "Timestamp when the staff record was created",
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    comment: "Timestamp when the staff record was last updated",
  },
});

/* // Define relationships with other models
Staff.associate = models => {
  // A staff member is associated with a clinic
  Staff.belongsTo(models.Clinic, { foreignKey: "clinicId" });
}; */

module.exports = Staff;

  