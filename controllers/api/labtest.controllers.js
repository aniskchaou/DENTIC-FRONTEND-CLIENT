const Appointement = require("../../models/appointement.models");
const { findLabTestById, updateLabTest, deleteLabTestById, deleteAllLabTests, findAllLabTests, createLabTest } = require("../../services/labtest.services");



/**
 * @swagger
 * tags:
 *   name: LabTest
 *   description: API for managing lab test records
 */





/**
 * @swagger
 * /labtests:
 *   post:
 *     summary: Create a new lab test
 *     tags: [LabTest]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LabTest'
 *     responses:
 *       201:
 *         description: Lab test created
 *       400:
 *         description: Content can not be empty!
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     LabTest:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         patientId:
 *           type: string
 *         doctorId:
 *           type: string
 *         clinicId:
 *           type: string
 *         testName:
 *           type: string
 *         testCategory:
 *           type: string
 *         testDescription:
 *           type: string
 *         sampleType:
 *           type: string
 *         sampleCollectionDate:
 *           type: string
 *           format: date-time
 *         sampleCollectedBy:
 *           type: string
 *         testStatus:
 *           type: string
 *         result:
 *           type: object
 *         laboratoryId:
 *           type: string
 *         testCost:
 *           type: number
 *         insuranceCovered:
 *           type: string
 *         paymentStatus:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a user
    const patient = {
        datee: req.body.datee,
        patient: req.body.patient,
        content: req.body.content,
        name: req.body.name
    }

    createLabTest(patient, res)
};

/**
 * @swagger
 * /labtests:
 *   get:
 *     summary: Get all lab tests
 *     tags: [LabTest]
 *     responses:
 *       200:
 *         description: List of all lab tests
 */
exports.findAll = (req, res) => {
    findAllLabTests(res)
};

/**
 * @swagger
 * /labtests/{id}:
 *   get:
 *     summary: Get a lab test by ID
 *     tags: [LabTest]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lab test data
 *       404:
 *         description: Lab test not found
 */
exports.findOne = (req, res) => {
    const id = req.params.id;
    findLabTestById(id, res)
};

/**
 * @swagger
 * /labtests/{id}:
 *   put:
 *     summary: Update a lab test by ID
 *     tags: [LabTest]
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
 *         description: Lab test updated
 *       404:
 *         description: Lab test not found
 */
exports.update = (req, res) => {
    const id = req.params.id;
    updateLabTest(id, req, res)
};

/**
 * @swagger
 * /labtests/{id}:
 *   delete:
 *     summary: Delete a lab test by ID
 *     tags: [LabTest]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lab test deleted
 *       404:
 *         description: Lab test not found
 */
exports.delete = (req, res) => {
    const id = req.params.id;
    deleteLabTestById(id, res)
};

/**
 * @swagger
 * /labtests:
 *   delete:
 *     summary: Delete all lab tests
 *     tags: [LabTest]
 *     responses:
 *       200:
 *         description: All lab tests deleted
 */
exports.deleteAll = (req, res) => {
    deleteAllLabTests(req, res)
};

