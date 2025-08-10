const { getPatientByDate, searchPatient, getCount, findPatientById, updatePatient, deletePatientById, deleteAllPatients, findAllPatients, createPatient } = require("../../services/patient.services");


/**
 * @swagger
 * tags:
 *   name: Patient
 *   description: API for managing patient records
 */

/**
 * @swagger
 * /patients/date:
 *   get:
 *     summary: Get patients by date
 *     tags: [Patient]
 *     responses:
 *       200:
 *         description: List of patients by date
 */
exports.getPatientByDate = (req, res) => {
    getPatientByDate(res)
};

/**
 * @swagger
 * /patients/search/{patient}:
 *   get:
 *     summary: Search for a patient
 *      tags: [Patient]
 *     parameters:
 *       - in: path
 *         name: patient
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Patient search results
 */
exports.searchPatient = (req, res) => {
    searchPatient(req.params.patient, req, res)
};

/**
 * @swagger
 * /patients/count:
 *   get:
 *     summary: Get patient count
 *    tags: [Patient]
 *     responses:
 *       200:
 *         description: Patient count
 */
exports.getCount = (req, res) => {
    getCount(req, res)
}

/**
 * @swagger
 * /patients:
 *   post:
 *     summary: Create a new patient
 *     tags: [Patient]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Patient'
 *     responses:
 *       201:
 *         description: Patient created
 *       400:
 *         description: Content can not be empty!
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Patient:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         namepatient:
 *           type: string
 *         emailpatient:
 *           type: string
 *         birth:
 *           type: string
 *           format: date
 *         telephone:
 *           type: string
 *         gender:
 *           type: string
 *         address:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */
exports.create = (req, res) => {

    createPatient(req.body, res)
};

/**
 * @swagger
 * /patients:
 *   get:
 *     summary: Get all patients
 *     tags: [Patient]
 *     responses:
 *       200:
 *         description: List of all patients
 */
exports.findAll = (req, res) => {
    findAllPatients(res)
};

/**
 * @swagger
 * /patients/{id}:
 *   get:
 *     summary: Get a patient by ID
 *    tags: [Patient]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Patient data
 *       404:
 *         description: Patient not found
 */
exports.findOne = (req, res) => {
    const id = req.params.id;
    findPatientById(id, res)
};

/**
 * @swagger
 * /patients/{id}:
 *   put:
 *     summary: Update a patient by ID
 *     tags: [Patient]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Patient updated
 *       404:
 *         description: Patient not found
 */
exports.update = (req, res) => {
    const id = req.params.id;
    updatePatient(id, req, res)
};

/**
 * @swagger
 * /patients/{id}:
 *   delete:
 *     summary: Delete a patient by ID
 *     tags: [Patient]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Patient deleted
 *       404:
 *         description: Patient not found
 */
exports.delete = (req, res) => {
    const id = req.params.id;
    deletePatientById(id, res)
};

/**
 * @swagger
 * /patients:
 *   delete:
 *     summary: Delete all patients
 *     tags: [Patient]
 *     responses:
 *       200:
 *         description: All patients deleted
 */
exports.deleteAll = (req, res) => {
    deleteAllPatients(req, res)
};