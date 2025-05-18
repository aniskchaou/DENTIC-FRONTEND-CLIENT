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
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  patientId: {
    type: DataTypes.UUID,
    allowNull: false,
    comment: "Reference to the patient in the loyalty program",
  },
  points: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
    comment: "Total points earned by the patient in the loyalty program",
  },
  earnedFrom: {
    type: DataTypes.JSONB,
    allowNull: false,
    comment: "List of activities that earned the patient points (e.g., appointment, referral, review)",
  },
  redeemedRewards: {
    type: DataTypes.JSONB,
    allowNull: true,
    comment: "List of rewards redeemed by the patient using loyalty points",
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    comment: "Timestamp when the loyalty program entry was created",
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    comment: "Timestamp when the loyalty program entry was last updated",
  },
});

/* // Define relationships with other models
LoyaltyProgram.associate = models => {
  // A loyalty program is associated with a patient
  LoyaltyProgram.belongsTo(models.Patient, { foreignKey: "patientId" });
}; */

module.exports = LoyaltyProgram;
