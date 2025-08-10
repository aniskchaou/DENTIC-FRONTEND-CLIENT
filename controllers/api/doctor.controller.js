const {
    findAllDoctors,
    findDoctorById,
    createDoctor,
    updateDoctor,
    deleteDoctorById,
    deleteAllDoctors
} = require("../../services/doctor.services");

/**
 * @swagger
 * tags:
 *   name: Doctor
 *   description: API for managing doctor records
 */



/**
 * @swagger
 * /doctors:
 *   post:
 *     summary: Create a new doctor
 *     tags: [Doctor]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Doctor'
 *     responses:
 *       201:
 *         description: Doctor created
 *       400:
 *         description: Content can not be empty!
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Doctor:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         userId:
 *           type: string
 *           description: Reference to the user account
 *         fullName:
 *           type: string
 *         licenseNumber:
 *           type: string
 *         specialization:
 *           type: string
 *           enum: [General Dentist, Orthodontist, Periodontist, Endodontist, Prosthodontist]
 *         experienceYears:
 *           type: integer
 *         consultationFee:
 *           type: number
 *           format: float
 *         availableDays:
 *           type: array
 *           items:
 *             type: string
 *         availableTimeSlots:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               startTime:
 *                 type: string
 *               endTime:
 *                 type: string
 *         rating:
 *           type: number
 *           format: float
 *         reviews:
 *           type: array
 *           items:
 *             type: object
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */

exports.create = (req, res) => {
    createDoctor(req.body, res);
};

/**
 * @swagger
 * /doctors:
 *   get:
 *     summary: Get all doctors
 *     tags: [Doctor]
 *     responses:
 *       200:
 *         description: List of all doctors
 */
exports.findAll = (req, res) => {
    // You can add query-based filtering here if needed
    findAllDoctors(null, res);
};

/**
 * @swagger
 * /doctors/{id}:
 *   get:
 *     summary: Get a doctor by ID
 *     tags: [Doctor]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Doctor data
 *       404:
 *         description: Doctor not found
 */
exports.findOne = (req, res) => {
    const id = req.params.id;
    findDoctorById(id, res);
};

/**
 * @swagger
 * /doctors/{id}:
 *   put:
 *     summary: Update a doctor by ID
 *     tags: [Doctor]
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
 *         description: Doctor updated
 *       404:
 *         description: Doctor not found
 */
exports.update = (req, res) => {
    const id = req.params.id;
    updateDoctor(id, req, res);
};

/**
 * @swagger
 * /doctors/{id}:
 *   delete:
 *     summary: Delete a doctor by ID
 *     tags: [Doctor]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Doctor deleted
 *       404:
 *         description: Doctor not found
 */
exports.delete = (req, res) => {
    const id = req.params.id;
    deleteDoctorById(id, res);
};

/**
 * @swagger
 * /doctors:
 *   delete:
 *     summary: Delete all doctors
 *     tags: [Doctor]
 *     responses:
 *       200:
 *         description: All doctors deleted
 */
exports.deleteAll = (req, res) => {
    deleteAllDoctors(res);
};