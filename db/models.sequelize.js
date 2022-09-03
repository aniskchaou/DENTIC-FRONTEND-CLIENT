var User = require("../models/user.models.js")
var sequelize = require("../db/init.sequelize")
var Sequelize = require('sequelize');
var seeds = require("./seeds.sequelize");
const Patient = require("../models/patient.models.js");
const ToDo = require("../models/todo.models.js");
const Appointement = require("../models/appointement.models.js");
const Expense = require("../models/expense.models.js");
const Income = require("../models/income.models.js");
const Medicament = require("../models/medicament.models.js");
const Payment = require("../models/payment.models.js");
const Preferences = require("../models/preference.models.js");
const Prescription = require("../models/prescription.models.js");
const Message = require("../models/message.models.js");
const LabTest = require("../models/labtest.models");
const Invoice = require("../models/invoice.models.js");
const MedicamentCategory = require("../models/medicament.category.models.js");
const MedicamentManufacture = require("../models/medicament.manufactue.models.js");
const Note = require("../models/note.models.js");
const Certificate = require("../models/certificate.models.js");
const CertificateTemplate = require("../models/certificate.template.models.js");

sequelize.sync().then(function () {
    User.create(seeds.userSeed);
    Patient.create(seeds.patientSeed)
    Expense.create(seeds.expenseSeed)
    ToDo.create()
    Income.create()
    Medicament.create()
    Payment.create()
    Preferences.create()
    Prescription.create()
    Appointement.create()
    Message.create()
    LabTest.create()
    Invoice.create()
    MedicamentCategory.create()
    MedicamentManufacture.create()
    Note.create()
    Certificate.create()
    CertificateTemplate.create()

}).then(function (res) {
    console.log(res);

});

