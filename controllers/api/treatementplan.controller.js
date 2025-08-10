const {
    findAllTreatmentPlans,
    findTreatmentPlanById,
    createTreatmentPlan,
    updateTreatmentPlan,
    deleteTreatmentPlanById,
    deleteAllTreatmentPlans
} = require("../../services/treatementplan.services");

/**
 * @swagger
 * tags:
 *   name: Treatment Plans
 *   description: API for managing treatment plans
 */

/**
 * @swagger
 * /treatmentplans:
 *   post:
 *     summary: Create a new treatment plan
 *     tags: [Treatment Plans]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TreatmentPlan'
 *     responses:
 *       200:
 *         description: The treatment plan was successfully created
 *       400:
 *         description: Content can not be empty
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     TreatmentPlan:
 *       type: object
 *       required:
 *         - patientId
 *         - planName
 *       properties:
 *         id:
 *           type: string
 *         patientId:
 *           type: string
 *         planName:
 *           type: string
 *         description:
 *           type: string
 *         startDate:
 *           type: string
 *           format: date
 *         endDate:
 *           type: string
 *           format: date
 *         status:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */
exports.create = (req, res) => {

    createTreatmentPlan(req.body, res);
};

/**
 * @swagger
 * /treatmentplans:
 *   get:
 *     summary: Retrieve all treatment plans
 *     tags: [Treatment Plans]
 *     responses:
 *       200:
 *         description: A list of treatment plans
 */
exports.findAll = (req, res) => {
    findAllTreatmentPlans(null, res);
};

/**
 * @swagger
 * /treatmentplans/{id}:
 *   get:
 *     summary: Find a single treatment plan by ID
 *     tags: [Treatment Plans]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Treatment plan found
 */
exports.findOne = (req, res) => {
    const id = req.params.id;
    findTreatmentPlanById(id, res);
};

/**
 * @swagger
 * /treatmentplans/{id}:
 *   put:
 *     summary: Update a treatment plan by ID
 *     tags: [Treatment Plans]
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
 *         description: The treatment plan was successfully updated
 */
exports.update = (req, res) => {
    const id = req.params.id;
    updateTreatmentPlan(id, req, res);
};

/**
 * @swagger
 * /treatmentplans/{id}:
 *   delete:
 *     summary: Delete a treatment plan by ID
 *     tags: [Treatment Plans]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Treatment plan successfully deleted
 */
exports.delete = (req, res) => {
    const id = req.params.id;
    deleteTreatmentPlanById(id, res);
};

/**
 * @swagger
 * /treatmentplans:
 *   delete:
 *     summary: Delete all treatment plans
 *     tags: [Treatment Plans]
 *     responses:
 *       200:
 *         description: All treatment plans deleted
 */
exports.deleteAll = (req, res) => {
    deleteAllTreatmentPlans(res);
};

