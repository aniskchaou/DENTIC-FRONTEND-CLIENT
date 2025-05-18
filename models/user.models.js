
/* var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var User = sequelize.define('user', {
    name: Sequelize.STRING,
    birthday: Sequelize.DATE,
    password: Sequelize.STRING,
    email: Sequelize.STRING,
    telephone: Sequelize.STRING,
    address: Sequelize.STRING,
    role: Sequelize.STRING,
    username: Sequelize.STRING
});
{
    "User": {
      "id": "UUID",
      "fullName": "string",
      "email": "string",
      "passwordHash": "string",
      "role": ["Admin", "Doctor", "Receptionist", "Patient"],
      "phone": "string",
      "profilePicture": "string (URL)",
      "dateOfBirth": "date",
      "gender": "Male | Female | Other",
      "status": "Active | Inactive | Suspended",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  } */

    var sequelize = require("../db/init.sequelize.js");
    var { Sequelize, DataTypes } = require('sequelize');

var User = sequelize.define("user", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  fullName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  passwordHash: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  role: {
    type: Sequelize.ENUM("Admin", "Doctor", "Receptionist", "Patient"),
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  profilePicture: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      isUrl: true,
    },
  },
  dateOfBirth: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  gender: {
    type: Sequelize.ENUM("Male", "Female", "Other"),
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM("Active", "Inactive", "Suspended"),
    allowNull: false,
    defaultValue: "Active",
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


module.exports = User;

const { v4: uuidv4 } = require("uuid");

async function insertUsers() {
  try {
    await sequelize.sync(); // Ensure DB connection is ready

    const users = [
      {
        id: uuidv4(),
        fullName: "Dr. John Smith",
        email: "john.smith@example.com",
        passwordHash: "hashedpassword123",
        role: "Doctor",
        phone: "1234567890",
        profilePicture: "https://example.com/john.jpg",
        dateOfBirth: "1980-05-10",
        gender: "Male",
        status: "Active",
      },
      {
        id: uuidv4(),
        fullName: "Dr. Alice Brown",
        email: "alice.brown@example.com",
        passwordHash: "hashedpassword456",
        role: "Doctor",
        phone: "0987654321",
        profilePicture: "https://example.com/alice.jpg",
        dateOfBirth: "1975-08-22",
        gender: "Female",
        status: "Active",
      },
      {
        id: uuidv4(),
        fullName: "Michael Johnson",
        email: "michael.johnson@example.com",
        passwordHash: "hashedpassword789",
        role: "Patient",
        phone: "2345678901",
        profilePicture: "https://example.com/michael.jpg",
        dateOfBirth: "1995-02-15",
        gender: "Male",
        status: "Active",
      },
      {
        id: uuidv4(),
        fullName: "Emma Wilson",
        email: "emma.wilson@example.com",
        passwordHash: "hashedpassword321",
        role: "Patient",
        phone: "8765432109",
        profilePicture: "https://example.com/emma.jpg",
        dateOfBirth: "2000-09-05",
        gender: "Female",
        status: "Active",
      },
      {
        id: uuidv4(),
        fullName: "Dr. Robert Lee",
        email: "robert.lee@example.com",
        passwordHash: "hashedpassword654",
        role: "Doctor",
        phone: "3456789012",
        profilePicture: "https://example.com/robert.jpg",
        dateOfBirth: "1982-12-30",
        gender: "Male",
        status: "Active",
      },
      {
        id: uuidv4(),
        fullName: "Sophia Martinez",
        email: "sophia.martinez@example.com",
        passwordHash: "hashedpassword987",
        role: "Patient",
        phone: "7654321098",
        profilePicture: "https://example.com/sophia.jpg",
        dateOfBirth: "1998-07-20",
        gender: "Female",
        status: "Active",
      },
      {
        id: uuidv4(),
        fullName: "Dr. Kevin Adams",
        email: "kevin.adams@example.com",
        passwordHash: "hashedpassword222",
        role: "Doctor",
        phone: "4567890123",
        profilePicture: "https://example.com/kevin.jpg",
        dateOfBirth: "1978-06-25",
        gender: "Male",
        status: "Active",
      },
      {
        id: uuidv4(),
        fullName: "James Anderson",
        email: "james.anderson@example.com",
        passwordHash: "hashedpassword555",
        role: "Patient",
        phone: "6543210987",
        profilePicture: "https://example.com/james.jpg",
        dateOfBirth: "2001-01-10",
        gender: "Male",
        status: "Active",
      },
      {
        id: uuidv4(),
        fullName: "Dr. Olivia Clark",
        email: "olivia.clark@example.com",
        passwordHash: "hashedpassword777",
        role: "Doctor",
        phone: "5678901234",
        profilePicture: "https://example.com/olivia.jpg",
        dateOfBirth: "1985-03-18",
        gender: "Female",
        status: "Active",
      },
      {
        id: uuidv4(),
        fullName: "Liam White",
        email: "liam.white@example.com",
        passwordHash: "hashedpassword888",
        role: "Patient",
        phone: "9876543210",
        profilePicture: "https://example.com/liam.jpg",
        dateOfBirth: "1993-11-12",
        gender: "Male",
        status: "Active",
      },
      // Add 10 more users here...
    ];

    await User.bulkCreate(users);
    console.log("✅ 20 users inserted successfully!");
  } catch (error) {
    console.error("❌ Error inserting users:", error);
  } finally {
    await sequelize.close();
  }
}

// Run the function
insertUsers();


