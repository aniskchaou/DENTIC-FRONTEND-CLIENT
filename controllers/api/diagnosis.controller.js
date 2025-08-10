const {
    findAllDiagnoses,
    findDiagnosisById,
    createDiagnosis,
    updateDiagnosis,
    deleteDiagnosisById,
    deleteAllDiagnoses
} = require("../../services/diagnostic.services");

/**
 * @swagger
 * tags:
 *   name: Diagnosis
 *   description: API for managing diagnoses
 */



/**
 * @swagger
 * /diagnoses:
 *   post:
 *     summary: Create a new diagnosis
 *     tags: [Diagnosis]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Diagnosis'
 *     responses:
 *       201:
 *         description: Diagnosis created
 *       400:
 *         description: Content can not be empty!
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Diagnosis:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Diagnosis ID
 *         patientId:
 *           type: string
 *           description: Reference to the patient
 *           example: "11111111-aaaa-bbbb-cccc-111111111111"
 *         doctorId:
 *           type: string
 *           description: Reference to the doctor
 *           example: "22222222-bbbb-cccc-dddd-222222222222"
 *         diagnosis:
 *           type: string
 *           description: Diagnosis details
 *           example: "Acute gingivitis"
 *         notes:
 *           type: string
 *           description: Additional notes
 *           example: "Patient should return for follow-up in 2 weeks."
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */
// Create a new diagnosis
exports.create = (req, res) => {

    createDiagnosis(req.body, res);
};

/**
 * @swagger
 * /diagnoses:
 *   get:
 *     summary: Get all diagnoses
 *     tags: [Diagnosis]
 *     responses:
 *       200:
 *         description: List of all diagnoses
 */
// Retrieve all diagnoses
exports.findAll = (req, res) => {
    findAllDiagnoses(null, res);
};

/**
 * @swagger
 * /diagnoses/{id}:
 *   get:
 *     summary: Get a diagnosis by ID
 *     tags: [Diagnosis]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Diagnosis data
 *       404:
 *         description: Diagnosis not found
 */
// Find a single diagnosis by ID
exports.findOne = (req, res) => {
    const id = req.params.id;
    findDiagnosisById(id, res);
};

/**
 * @swagger
 * /diagnoses/{id}:
 *   put:
 *     summary: Update a diagnosis by ID
 *     tags: [Diagnosis]
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
 *         description: Diagnosis updated
 *       404:
 *         description: Diagnosis not found
 */
// Update a diagnosis by ID
exports.update = (req, res) => {
    const id = req.params.id;
    updateDiagnosis(id, req, res);
};

/**
 * @swagger
 * /diagnoses/{id}:
 *   delete:
 *     summary: Delete a diagnosis by ID
 *     tags: [Diagnosis]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Diagnosis deleted
 *       404:
 *         description: Diagnosis not found
 */
// Delete a diagnosis by ID
exports.delete = (req, res) => {
    const id = req.params.id;
    deleteDiagnosisById(id, res);
};

/**
 * @swagger
 * /diagnoses:
 *   delete:
 *     summary: Delete all diagnoses
 *     tags: [Diagnosis]
 *     responses:
 *       200:
 *         description: All diagnoses deleted
 */
// Delete all diagnoses
exports.deleteAll = (req, res) => {
    deleteAllDiagnoses(res);
};