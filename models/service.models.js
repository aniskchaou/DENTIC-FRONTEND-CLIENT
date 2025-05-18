
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var ServiceItem = sequelize.define('service_item', {
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    status: Sequelize.STRING,
    fileName: Sequelize.STRING
});


module.exports = ServiceItem;

/* {
    "Service": {
      "id": "UUID",
      "clinicId": "UUID (Ref to Clinic)",
      "serviceName": "string (e.g., Root Canal, Teeth Whitening, Dental Implant)",
      "category": "General Dentistry | Cosmetic Dentistry | Orthodontics | Surgery",
      "description": "string (Detailed description of the service)",
      "duration": "integer (Estimated duration in minutes)",
      "cost": "float (Price in local currency)",
      "insuranceCoverage": {
        "accepted": "Yes | No",
        "insuranceProviders": ["UUID (Ref to Insurance Company)"]
      },
      "requiredEquipment": [
        {
          "equipmentId": "UUID (Ref to Equipment)",
          "equipmentName": "string"
        }
      ],
      "availableDoctors": [
        {
          "doctorId": "UUID (Ref to Doctor)",
          "doctorName": "string"
        }
      ],
      "status": "Active | Inactive",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  } */
  