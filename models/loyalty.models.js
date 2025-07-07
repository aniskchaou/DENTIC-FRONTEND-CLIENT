/* {
    "LoyaltyProgram": {
      "id": "UUID",
      "patientId": "UUID (Ref to Patient)",
      "points": "integer",
      "earnedFrom": [
        {
          "activity": "Appointment | Referral | Review",
          "pointsEarned": "integer",
          "date": "timestamp"
        }
      ],
      "redeemedRewards": [
        {
          "rewardName": "Discount | Free Checkup | Gift",
          "pointsUsed": "integer",
          "redeemedDate": "timestamp"
        }
      ],
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
   */


  var sequelize = require("../db/init.sequelize.js");
  var { Sequelize, DataTypes } = require('sequelize');

const LoyaltyProgram = sequelize.define("loyaltyProgram", {
  patientId: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "Reference to the patient in the loyalty program",
  },
  points: {
    type: DataTypes.STRING,
    defaultValue: "0",
    allowNull: false,
    comment: "Total points earned by the patient in the loyalty program",
  },
  earnedFrom: {
    type: DataTypes.TEXT, // Store JSON as string
    allowNull: false,
    comment: "List of activities that earned the patient points (JSON string)",
  },
  redeemedRewards: {
    type: DataTypes.TEXT, // Store JSON as string
    allowNull: true,
    comment: "List of rewards redeemed by the patient using loyalty points (JSON string)",
  }
});


/**
 * Insert a real LoyaltyProgram record.
 */
async function insertRealLoyaltyProgram() {
  const realData = {
    patientId: "987e6543-e21b-12d3-a456-426614174999",
    points: "150",
    earnedFrom: '[{"activity":"Appointment","pointsEarned":"50","date":"2025-05-01T10:00:00.000Z"},{"activity":"Referral","pointsEarned":"100","date":"2025-05-10T15:30:00.000Z"}]',
    redeemedRewards: '[{"rewardName":"Free Checkup","pointsUsed":"100","redeemedDate":"2025-05-15T09:00:00.000Z"}]'
    // createdAt and updatedAt will be handled by Sequelize if timestamps are enabled
  };

  return await LoyaltyProgram.create(realData);
}

module.exports = { LoyaltyProgram };
