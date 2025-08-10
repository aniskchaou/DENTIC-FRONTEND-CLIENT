const {
  findPaymentById,
  updatePayment,
  deletePaymentById,
  deleteAllPayments,
  findAllPayments,
  createPayment
} = require("../../services/payment.services");

/**
 * @swagger
 * tags:
 *   name: Payments
 *   description: Payment management
 */

/**
 * @swagger
 * /payments:
 *   post:
 *     summary: Create a new payment
 *     tags: [Payments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Payment'
 *     responses:
 *       200:
 *         description: Payment created successfully
 *       400:
 *         description: Content can not be empty
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Payment:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         invoiceNumber:
 *           type: string
 *         paymentDate:
 *           type: string
 *           format: date-time
 *         paymenMode:
 *           type: string
 *         amountReceived:
 *           type: number
 *         invoiceBlanceDue:
 *           type: number
 *         patient:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const patient = {
    invoiceNumber: req.body.invoiceNumber,
    paymentDate: req.body.paymentDate,
    paymenMode: req.body.paymenMode,
    amountReceived: req.body.amountReceived,
    invoiceBlanceDue: req.body.invoiceBlanceDue,
    patient: req.body.patient
  };

  createPayment(patient, res);
};

/**
 * @swagger
 * /payments:
 *   get:
 *     summary: Retrieve all payments
 *     tags: [Payments]
 *     responses:
 *       200:
 *         description: A list of payments
 */
exports.findAll = (req, res) => {
  findAllPayments(res);
};

/**
 * @swagger
 * /payments/{id}:
 *   get:
 *     summary: Get a payment by ID
 *     tags: [Payments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Payment ID
 *     responses:
 *       200:
 *         description: Payment found
 *       404:
 *         description: Payment not found
 */
exports.findOne = (req, res) => {
  const id = req.params.id;
  findPaymentById(id, res);
};

/**
 * @swagger
 * /payments/{id}:
 *   put:
 *     summary: Update a payment by ID
 *     tags: [Payments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Payment ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               invoiceNumber:
 *                 type: string
 *               paymentDate:
 *                 type: string
 *                 format: date-time
 *               paymenMode:
 *                 type: string
 *               amountReceived:
 *                 type: number
 *               invoiceBlanceDue:
 *                 type: number
 *               patient:
 *                 type: string
 *     responses:
 *       200:
 *         description: Payment updated
 *       404:
 *         description: Payment not found
 */
exports.update = (req, res) => {
  const id = req.params.id;
  updatePayment(id, req, res);
};

/**
 * @swagger
 * /payments/{id}:
 *   delete:
 *     summary: Delete a payment by ID
 *     tags: [Payments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Payment ID
 *     responses:
 *       200:
 *         description: Payment deleted
 *       404:
 *         description: Payment not found
 */
exports.delete = (req, res) => {
  const id = req.params.id;
  deletePaymentById(id, res);
};

/**
 * @swagger
 * /payments:
 *   delete:
 *     summary: Delete all payments
 *     tags: [Payments]
 *     responses:
 *       200:
 *         description: All payments deleted
 */
exports.deleteAll = (req, res) => {
  deleteAllPayments(req, res);
};
