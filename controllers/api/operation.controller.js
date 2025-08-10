const {
    findAllOperations,
    findOperationById,
    createOperation,
    updateOperation,
    deleteOperationById,
    deleteAllOperations
} = require("../../services/operation.services");


/**
 * @swagger
 * tags:
 *   name: Operations
 *   description: API for managing operations
 */

/**
 * @swagger
 * /operations:
 *   post:
 *     summary: Create a new operation
 *     tags: [Operations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Operation'
 *     responses:
 *       201:
 *         description: Operation created successfully
 *       400:
 *         description: Invalid input
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Operation:
 *       type: object
 *       required:
 *         - patientId
 *         - operationType
 *       properties:
 *         id:
 *           type: string
 *         patientId:
 *           type: string
 *         operationType:
 *           type: string
 *         notes:
 *           type: string
 *         date:
 *           type: string
 *           format: date
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */
exports.create = (req, res) => {
    createOperation(req.body, res);
};

/**
 * @swagger
 * /operations:
 *   get:
 *     summary: Get all operations
 *     tags: [Operations]
 *     responses:
 *       200:
 *         description: List of all operations
 */
exports.findAll = (req, res) => {
    findAllOperations(null, res);
};

/**
 * @swagger
 * /operations/{id}:
 *   get:
 *     summary: Get an operation by ID
 *     tags: [Operations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Operation found
 *       404:
 *         description: Operation not found
 */
exports.findOne = (req, res) => {
    const id = req.params.id;
    findOperationById(id, res);
};

/**
 * @swagger
 * /operations/{id}:
 *   put:
 *     summary: Update an operation by ID
 *     tags: [Operations]
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
 *             properties:
 *               patientId:
 *                 type: string
 *               operationType:
 *                 type: string
 *               notes:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Operation updated successfully
 *       400:
 *         description: Invalid input
 */
exports.update = (req, res) => {
    const id = req.params.id;
    updateOperation(id, req, res);
};

/**
 * @swagger
 * /operations/{id}:
 *   delete:
 *     summary: Delete an operation by ID
 *     tags: [Operations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Operation deleted
 */
exports.delete = (req, res) => {
    const id = req.params.id;
    deleteOperationById(id, res);
};

/**
 * @swagger
 * /operations:
 *   delete:
 *     summary: Delete all operations
 *     tags: [Operations]
 *     responses:
 *       200:
 *         description: All operations deleted
 */
exports.deleteAll = (req, res) => {
    deleteAllOperations(res);
};
