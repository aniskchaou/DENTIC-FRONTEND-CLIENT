const {
    findAllTelemedicine,
    findTelemedicineById,
    createTelemedicine,
    updateTelemedicine,
    deleteTelemedicineById,
    deleteAllTelemedicine
} = require("../../services/telemedicine.services");

/**
 * @swagger
 * /telemedicines:
 *   post:
 *     summary: Create a new telemedicine session
 *     tags:
 *       - Telemedicine
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               patientId:
 *                 type: string
 *               sessionDate:
 *                 type: string
 *                 format: date-time
 *               notes:
 *                 type: string
 *             required:
 *               - patientId
 *               - sessionDate
 *     responses:
 *       200:
 *         description: Telemedicine session created
 *       400:
 *         description: Content can not be empty
 */
exports.create = (req, res) => {
    createTelemedicine(req.body, res);
};

/**
 * @swagger
 * /telemedicines:
 *   get:
 *     summary: Retrieve all telemedicine sessions
 *     tags:
 *       - Telemedicine
 *     responses:
 *       200:
 *         description: List of all telemedicine sessions
 */
exports.findAll = (req, res) => {
    findAllTelemedicine(null, res);
};

/**
 * @swagger
 * /telemedicine/{id}:
 *   get:
 *     summary: Get a telemedicine session by ID
 *     tags:
 *       - Telemedicine
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Telemedicine session ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Telemedicine session found
 *       404:
 *         description: Telemedicine session not found
 */
exports.findOne = (req, res) => {
    const id = req.params.id;
    findTelemedicineById(id, res);
};

/**
 * @swagger
 * /telemedicines/{id}:
 *   put:
 *     summary: Update a telemedicine session by ID
 *     tags:
 *       - Telemedicine
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Telemedicine session ID
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
 *               sessionDate:
 *                 type: string
 *                 format: date-time
 *               notes:
 *                 type: string
 *     responses:
 *       200:
 *         description: Telemedicine session updated
 *       404:
 *         description: Session not found
 */
exports.update = (req, res) => {
    const id = req.params.id;
    updateTelemedicine(id, req, res);
};

/**
 * @swagger
 * /telemedicines/{id}:
 *   delete:
 *     summary: Delete a telemedicine session by ID
 *     tags:
 *       - Telemedicine
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Telemedicine session ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Telemedicine session deleted
 *       404:
 *         description: Session not found
 */
exports.delete = (req, res) => {
    const id = req.params.id;
    deleteTelemedicineById(id, res);
};

/**
 * @swagger
 * /telemedicines:
 *   delete:
 *     summary: Delete all telemedicine sessions
 *     tags:
 *       - Telemedicine
 *     responses:
 *       200:
 *         description: All telemedicine sessions deleted
 */
exports.deleteAll = (req, res) => {
    deleteAllTelemedicine(res);
};
