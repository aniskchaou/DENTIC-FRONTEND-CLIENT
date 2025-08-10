const {
    findAllStaff,
    findStaffById,
    createStaff,
    updateStaff,
    deleteStaffById,
    deleteAllStaff
} = require("../../services/staff.services");


/**
 * @swagger
 * tags:
 *   name: Staff
 *   description: API for managing staff records
 */






/**
 * @swagger
 * /staff:
 *   post:
 *     summary: Create a new staff member
 *     tags: [Staff]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Staff'
 *     responses:
 *       201:
 *         description: Staff member created successfully
 *       400:
 *         description: Content can not be empty
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Staff:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         role:
 *           type: string
 *         email:
 *           type: string
 *         phone:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */
exports.create = (req, res) => {
    createStaff(req.body, res);
};

/**
 * @swagger
 * /staff:
 *   get:
 *     summary: Retrieve all staff members
 *     tags: [Staff]
 *     responses:
 *       200:
 *         description: A list of staff members
 */
exports.findAll = (req, res) => {
    findAllStaff(null, res);
};

/**
 * @swagger
 * /staff/{id}:
 *   get:
 *     summary: Get a single staff member by ID
 *     tags: [Staff]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Staff ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Staff member details
 *       404:
 *         description: Staff member not found
 */
exports.findOne = (req, res) => {
    const id = req.params.id;
    findStaffById(id, res);
};

/**
 * @swagger
 * /staff/{id}:
 *   put:
 *     summary: Update a staff member by ID
 *     tags: [Staff]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Staff ID
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
 *               role:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Staff member updated successfully
 *       400:
 *         description: Invalid input
 */
exports.update = (req, res) => {
    const id = req.params.id;
    updateStaff(id, req, res);
};

/**
 * @swagger
 * /staff/{id}:
 *   delete:
 *     summary: Delete a staff member by ID
 *     tags: [Staff]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Staff ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Staff member deleted successfully
 */
exports.delete = (req, res) => {
    const id = req.params.id;
    deleteStaffById(id, res);
};

/**
 * @swagger
 * /staff:
 *   delete:
 *     summary: Delete all staff members
 *     tags: [Staff]
 *     responses:
 *       200:
 *         description: All staff members deleted
 */
exports.deleteAll = (req, res) => {
    deleteAllStaff(res);
};
