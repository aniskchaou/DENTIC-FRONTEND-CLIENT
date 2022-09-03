var express = require('express');
var routerr = express.Router();

var userController = require('../controllers/api/user.controllers')
var indexController = require('../controllers/home.controllers')
var patientController = require('../controllers/api/patient.controllers')
var appointementController = require('../controllers/api/appointement.controllers')
var expenseController = require('../controllers/api/expense.controllers')
var incomeController = require('../controllers/api/income.controllers')
var paymentController = require('../controllers/api/payment.controllers')
var medicamentController = require('../controllers/api/medicament.controllers')
var preferenceController = require('../controllers/api/preference.controllers')
var prescriptionController = require('../controllers/api/prescription.controllers')
var labTestController = require('../controllers/api/labtest.controllers')
var medicamentCategoryController = require('../controllers/api/medicament.category.controllers')
var medicamentManufactureController = require('../controllers/api/medicament.manufacture.controllers')
var messageController = require('../controllers/api/message.controllers')
var invoiceController = require('../controllers/api/invoice.controllers')
var noteController = require('../controllers/api/note.controllers')
var toDoController = require('../controllers/api/todo.controllers')
var certificateController = require('../controllers/api/certificate.controllers')
var certificateTemplateController = require('../controllers/api/certificate.template.controllers')




//users
routerr.post('/api/user', userController.create)
routerr.get('/api/user', userController.findAll)
routerr.get("/api/user/:id", userController.findOne);
routerr.put("/api/user/:id", userController.update);
routerr.delete("/api/user/:id", userController.delete);
routerr.delete("/api/user", userController.deleteAll);

//patient
routerr.post('/api/patient', patientController.create)
routerr.get('/api/patient', patientController.findAll)
routerr.get("/api/patient/:id", patientController.findOne);
routerr.put("/api/patient/:id", patientController.update);
routerr.delete("/api/patient/:id", patientController.delete);
routerr.delete("/api/patient", patientController.deleteAll);

//appointement
routerr.post('/api/appointement', appointementController.create)
routerr.get('/api/appointement', appointementController.findAll)
routerr.get("/api/appointement/:id", appointementController.findOne);
routerr.put("/api/appointement/:id", appointementController.update);
routerr.delete("/api/appointement/:id", appointementController.delete);
routerr.delete("/api/appointement", appointementController.deleteAll);


//expense
routerr.post('/api/expense', expenseController.create)
routerr.get('/api/expense', expenseController.findAll)
routerr.get("/api/expense/:id", expenseController.findOne);
routerr.put("/api/expense/:id", expenseController.update);
routerr.delete("/api/expense/:id", expenseController.delete);
routerr.delete("/api/expense", expenseController.deleteAll);


//income
routerr.post('/api/income', incomeController.create)
routerr.get('/api/income', incomeController.findAll)
routerr.get("/api/income/:id", incomeController.findOne);
routerr.put("/api/income/:id", incomeController.update);
routerr.delete("/api/income/:id", incomeController.delete);
routerr.delete("/api/income", incomeController.deleteAll);


//medicament
routerr.post('/api/medicament', medicamentController.create)
routerr.get('/api/medicament', medicamentController.findAll)
routerr.get("/api/medicament/:id", medicamentController.findOne);
routerr.put("/api/medicament/:id", medicamentController.update);
routerr.delete("/api/medicament/:id", medicamentController.delete);
routerr.delete("/api/medicament", medicamentController.deleteAll);


//payment
routerr.post('/api/payment', paymentController.create)
routerr.get('/api/payment', paymentController.findAll)
routerr.get("/api/payment/:id", paymentController.findOne);
routerr.put("/api/payment/:id", paymentController.update);
routerr.delete("/api/payment/:id", paymentController.delete);
routerr.delete("/api/payment", paymentController.deleteAll);

//preference
routerr.post('/api/preference', preferenceController.create)
routerr.get('/api/preference', preferenceController.findAll)
routerr.get("/api/preference/:id", preferenceController.findOne);
routerr.put("/api/preference/:id", preferenceController.update);
routerr.delete("/api/preference/:id", preferenceController.delete);
routerr.delete("/api/preference", preferenceController.deleteAll);

//prescription
routerr.post('/api/prescription', prescriptionController.create)
routerr.get('/api/prescription', prescriptionController.findAll)
routerr.get("/api/prescription/:id", prescriptionController.findOne);
routerr.put("/api/prescription/:id", prescriptionController.update);
routerr.delete("/api/prescription/:id", prescriptionController.delete);
routerr.delete("/api/prescription", prescriptionController.deleteAll);

//Home
routerr.get('/about', indexController.getAbout)
routerr.get('/blog', indexController.getBlog)
routerr.get('/contact', indexController.getContact)
routerr.get('/elements', indexController.getElements)
routerr.get('/', indexController.getHome)
routerr.get('/opening', indexController.getOpeningHours)
routerr.get('/pricing', indexController.getPricing)
routerr.get('/services', indexController.getServices)

//LabTest
routerr.post('/api/labtest', labTestController.create)
routerr.get('/api/labtest', labTestController.findAll)
routerr.get("/api/labtest/:id", labTestController.findOne);
routerr.put("/api/labtest/:id", labTestController.update);
routerr.delete("/api/labtest/:id", labTestController.delete);
routerr.delete("/api/labtest", labTestController.deleteAll);


//Medicament manufacture
routerr.post('/api/medicamentmanufacture', medicamentManufactureController.create)
routerr.get('/api/medicamentmanufacture', medicamentManufactureController.findAll)
routerr.get("/api/medicamentmanufacture/:id", medicamentManufactureController.findOne);
routerr.put("/api/medicamentmanufacture/:id", medicamentManufactureController.update);
routerr.delete("/api/medicamentmanufacture/:id", medicamentManufactureController.delete);
routerr.delete("/api/medicamentmanufacture", medicamentManufactureController.deleteAll);


//Medicament Category
routerr.post('/api/medicamentcategory', medicamentCategoryController.create)
routerr.get('/api/medicamentcategory', medicamentCategoryController.findAll)
routerr.get("/api/medicamentcategory/:id", medicamentCategoryController.findOne);
routerr.put("/api/medicamentcategory/:id", medicamentCategoryController.update);
routerr.delete("/api/medicamentcategory/:id", medicamentCategoryController.delete);
routerr.delete("/api/medicamentcategory", medicamentCategoryController.deleteAll);

//Invoice
routerr.post('/api/invoice', invoiceController.create)
routerr.get('/api/invoice', invoiceController.findAll)
routerr.get("/api/invoice/:id", invoiceController.findOne);
routerr.put("/api/invoice/:id", invoiceController.update);
routerr.delete("/api/invoice/:id", invoiceController.delete);
routerr.delete("/api/invoice", invoiceController.deleteAll);


//ToDo
routerr.post('/api/todo', toDoController.create)
routerr.get('/api/todo', toDoController.findAll)
routerr.get("/api/todo/:id", toDoController.findOne);
routerr.put("/api/todo/:id", toDoController.update);
routerr.delete("/api/todo/:id", toDoController.delete);
routerr.delete("/api/todo", toDoController.deleteAll);


//Message
routerr.post('/api/message', messageController.create)
routerr.get('/api/message', messageController.findAll)
routerr.get("/api/message/:id", messageController.findOne);
routerr.put("/api/message/:id", messageController.update);
routerr.delete("/api/message/:id", messageController.delete);
routerr.delete("/api/message", messageController.deleteAll);

//Note
routerr.post('/api/note', noteController.create)
routerr.get('/api/note', noteController.findAll)
routerr.get("/api/note/:id", noteController.findOne);
routerr.put("/api/note/:id", noteController.update);
routerr.delete("/api/note/:id", noteController.delete);
routerr.delete("/api/note", noteController.deleteAll);

//certificate
routerr.post('/api/certificate', certificateController.create)
routerr.get('/api/certificate', certificateController.findAll)
routerr.get("/api/certificate/:id", certificateController.findOne);
routerr.put("/api/certificate/:id", certificateController.update);
routerr.delete("/api/certificate/:id", certificateController.delete);
routerr.delete("/api/certificate", certificateController.deleteAll);
routerr.get("/api/certificate/:patient/:template", certificateController.filterCertificate);

routerr.post('/api/certificatetemplate', certificateTemplateController.create)
routerr.get('/api/certificatetemplate', certificateTemplateController.findAll)
routerr.get("/api/certificatetemplate/:id", certificateTemplateController.findOne);
routerr.put("/api/certificatetemplate/:id", certificateTemplateController.update);
routerr.delete("/api/certificatetemplate/:id", certificateTemplateController.delete);
routerr.delete("/api/certificatetemplate", certificateTemplateController.deleteAll);
module.exports = routerr;