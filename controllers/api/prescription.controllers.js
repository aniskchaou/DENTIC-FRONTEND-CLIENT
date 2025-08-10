const { deletePrescriptionMedicamentById, findAllMedicamentPrescriptions, createMedicamentPrescription, findPrescriptionById, updatePrescription, deletePrescriptionById, deleteAllPrescriptions, findAllPrescriptions, createPrescription } = require("../../services/prescription.services");

/**
 * @swagger
 * tags:
 *   name: Prescription
 *   description: API for managing prescriptions
 */


/**
 * @swagger
 * /medicament:
 *   post:
 *     summary: Create a new medicament prescription item
 *     tags: [Prescription]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               dose:
 *                 type: string
 *               medicament:
 *                 type: string
 *               duration:
 *                 type: string
 *               prescription:
 *                 type: string
 *             required:
 *               - dose
 *               - medicament
 *               - duration
 *               - prescription
 *     responses:
 *       200:
 *         description: Medicament prescription created successfully
 *       400:
 *         description: Content can not be empty
 */
exports.createMedicamentItem = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const patient = {
        dose: req.body.dose,
        medicament: req.body.medicament,
        duration: req.body.duration,
        prescription: req.body.prescription
    }
    console.log(patient)
    createMedicamentPrescription(patient, res)
};

/**
 * @swagger
 * /prescriptions:
 *   post:
 *     summary: Create a new prescription
 *     tags:
 *       - Prescription
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Prescription'
 *     responses:
 *       200:
 *         description: Prescription created successfully
 *       400:
 *         description: Content can not be empty
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Prescription:
 *       type: object
 *       required:
 *         - patient
 *         - pression
 *         - temperature
 *         - problem
 *       properties:
 *         id:
 *           type: string
 *         patient:
 *           type: string
 *         pression:
 *           type: string
 *         temperature:
 *           type: string
 *         problem:
 *           type: string
 *         note:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 */

exports.create = (req, res) => {

    createPrescription(req.body, res)
};

/**
 * @swagger
 * /prescriptions:
 *   get:
 *     summary: Retrieve a list of all prescriptions
 *     tags:
 *       - Prescription
 *     responses:
 *       200:
 *         description: A list of prescriptions
 */
exports.findAll = (req, res) => {
    findAllPrescriptions(res)
};

/**
 * @swagger
 * /prescriptions/{id}:
 *   get:
 *     summary: Get a prescription by ID
 *     tags:
 *       - Prescription
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Prescription ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Prescription details
 *       404:
 *         description: Prescription not found
 */
exports.findOne = (req, res) => {
    const id = req.params.id;
    findPrescriptionById(id, res)
};

/**
 * @swagger
 * /prescriptions/{id}/medicaments:
 *   get:
 *     summary: Get all medicament prescriptions for a given prescription ID
 *     tags:
 *       - Prescription
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Prescription ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of medicament prescriptions
 */
exports.findAllMedicamentPrescriptions = (req, res) => {
    const id = req.params.id;
    findAllMedicamentPrescriptions(id, res)
};

/**
 * @swagger
 * /prescriptions/{id}:
 *   put:
 *     summary: Update a prescription by ID
 *     tags:
 *       - Prescription
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Prescription ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               patient:
 *                 type: string
 *               pression:
 *                 type: string
 *               temperature:
 *                 type: string
 *               problem:
 *                 type: string
 *               note:
 *                 type: string
 *     responses:
 *       200:
 *         description: Prescription updated successfully
 *       404:
 *         description: Prescription not found
 */
exports.update = (req, res) => {
    const id = req.params.id;
    updatePrescription(id, req, res)
};

/**
 * @swagger
 * /prescriptions/{id}:
 *   delete:
 *     summary: Delete a prescription by ID
 *     tags:
 *       - Prescription
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Prescription ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Prescription deleted successfully
 *       404:
 *         description: Prescription not found
 */
exports.delete = (req, res) => {
    const id = req.params.id;
    deletePrescriptionById(id, res)
};

/**
 * @swagger
 * /medicament/{id}:
 *   delete:
 *     summary: Delete a medicament prescription by ID
 *     tags:
 *       - Prescription
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Medicament prescription ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Medicament prescription deleted successfully
 *       404:
 *         description: Medicament prescription not found
 */
exports.deleteMedicament = (req, res) => {
    const id = req.params.id;
    deletePrescriptionMedicamentById(id, res)
};

/**
 * @swagger
 * /prescriptions:
 *   delete:
 *     summary: Delete all prescriptions
 *     tags:
 *       - Prescription
 *     responses:
 *       200:
 *         description: All prescriptions deleted successfully
 */
exports.deleteAll = (req, res) => {
    deleteAllPrescriptions(req, res)
};
