const {
    findInvoiceById,
    updateInvoice,
    deleteInvoiceById,
    deleteAllInvoices,
    findAllInvoices,
    createInvoice
} = require("../../services/invoice.services");

/**
 * @swagger
 * /invoices:
 *   post:
 *     summary: Create a new invoice
 *     tags: [Invoices]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Invoice'
 *     responses:
 *       200:
 *         description: Invoice created successfully
 *       400:
 *         description: Content can not be empty
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Invoice:
 *       type: object
 *       required:
 *         - namepatient
 *         - emailpatient
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

    createInvoice(req.body, res);
};

/**
 * @swagger
 * /invoices:
 *   get:
 *     summary: Retrieve all invoices
 *     tags: [Invoices]
 *     responses:
 *       200:
 *         description: A list of invoices
 */
exports.findAll = (req, res) => {
    findAllInvoices(res);
};

/**
 * @swagger
 * /invoices/{id}:
 *   get:
 *     summary: Retrieve an invoice by ID
 *     tags: [Invoices]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The invoice ID
 *     responses:
 *       200:
 *         description: Invoice data
 *       404:
 *         description: Invoice not found
 */
exports.findOne = (req, res) => {
    const id = req.params.id;
    findInvoiceById(id, res);
};

/**
 * @swagger
 * /invoices/{id}:
 *   put:
 *     summary: Update an invoice by ID
 *     tags: [Invoices]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The invoice ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               namepatient:
 *                 type: string
 *               emailpatient:
 *                 type: string
 *               birth:
 *                 type: string
 *                 format: date
 *               telephone:
 *                 type: string
 *               gender:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       200:
 *         description: Invoice updated
 *       404:
 *         description: Invoice not found
 */
exports.update = (req, res) => {
    const id = req.params.id;
    updateInvoice(id, req, res);
};

/**
 * @swagger
 * /invoices/{id}:
 *   delete:
 *     summary: Delete an invoice by ID
 *     tags: [Invoices]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The invoice ID
 *     responses:
 *       200:
 *         description: Invoice deleted
 *       404:
 *         description: Invoice not found
 */
exports.delete = (req, res) => {
    const id = req.params.id;
    deleteInvoiceById(id, res);
};

/**
 * @swagger
 * /invoices:
 *   delete:
 *     summary: Delete all invoices
 *     tags: [Invoices]
 *     responses:
 *       200:
 *         description: All invoices deleted
 */
exports.deleteAll = (req, res) => {
    deleteAllInvoices(req, res);
};
