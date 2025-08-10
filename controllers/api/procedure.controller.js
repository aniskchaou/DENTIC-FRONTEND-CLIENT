const {
    findAllProcedures,
    findProcedureById,
    createProcedure,
    updateProcedure,
    deleteProcedureById,
    deleteAllProcedures
} = require("../../services/procedure.services");

/**
 * @swagger
 * tags:
 *   name: Procedures
 *   description: API for managing procedures
 */

/**
 * @swagger
 * /procedures:
 *   post:
 *     summary: Create a new procedure
 *     tags: [Procedures]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Procedure'
 *     responses:
 *       201:
 *         description: Procedure created successfully
 *       400:
 *         description: Content can not be empty
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Procedure:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         description:
 *           type: string
 *         duration:
 *           type: integer
 *           description: Duration in minutes
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */
exports.create = (req, res) => {
    createProcedure(req.body, res);
};

/**
 * @swagger
 * /procedures:
 *   get:
 *     summary: Retrieve all procedures
 *     tags: [Procedures]
 *     responses:
 *       200:
 *         description: List of all procedures
 */
exports.findAll = (req, res) => {
    findAllProcedures(null, res);
};

/**
 * @swagger
 * /procedures/{id}:
 *   get:
 *     summary: Get a single procedure by ID
 *     tags: [Procedures]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Procedure ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Procedure details
 *       404:
 *         description: Procedure not found
 */
exports.findOne = (req, res) => {
    const id = req.params.id;
    findProcedureById(id, res);
};

/**
 * @swagger
 * /procedures/{id}:
 *   put:
 *     summary: Update a procedure by ID
 *     tags: [Procedures]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Procedure ID
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
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               duration:
 *                 type: integer
 *                 description: Duration in minutes
 *     responses:
 *       200:
 *         description: Procedure updated successfully
 *       400:
 *         description: Invalid input
 */
exports.update = (req, res) => {
    const id = req.params.id;
    updateProcedure(id, req, res);
};

/**
 * @swagger
 * /procedures/{id}:
 *   delete:
 *     summary: Delete a procedure by ID
 *     tags: [Procedures]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Procedure ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Procedure deleted successfully
 */
exports.delete = (req, res) => {
    const id = req.params.id;
    deleteProcedureById(id, res);
};

/**
 * @swagger
 * /procedures:
 *   delete:
 *     summary: Delete all procedures
 *     tags: [Procedures]
 *     responses:
 *       200:
 *         description: All procedures deleted
 */
exports.deleteAll = (req, res) => {
    deleteAllProcedures(res);
};
