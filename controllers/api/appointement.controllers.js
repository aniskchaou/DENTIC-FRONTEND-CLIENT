const Appointement = require("../../models/appointement.models");
const {
    findAppointmentById,
    updateAppointment,
    deleteAppointmentById,
    deleteAllAppointments,
    findAllAppointments,
    createAppointment
} = require("../../services/appointement.services");


/**
 * @swagger
 * /appointments:
 *   post:
 *     summary: Create a new appointment
 *     tags: [Appointment]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               patientId:
 *                 type: string
 *               doctorId:
 *                 type: string
 *               clinicLocationId:
 *                 type: string
 *               appointmentDate:
 *                 type: string
 *                 format: date
 *               startTime:
 *                 type: string
 *               endTime:
 *                 type: string
 *               status:
 *                 type: string
 *               appointmentType:
 *                 type: string
 *               reasonForVisit:
 *                 type: string
 *               notes:
 *                 type: string
 *               roomNumber:
 *                 type: string
 *                 description: Room assigned for the appointment
 *               isFirstVisit:
 *                 type: boolean
 *                 description: Indicates if this is the patient's first visit
 *               followUpDate:
 *                 type: string
 *                 format: date
 *                 description: Scheduled follow-up date, if any
 *     responses:
 *       201:
 *         description: Appointment created
 *       400:
 *         description: Content can not be empty!
 */
exports.create = (req, res) => {
    if (!req.body.patientId || !req.body.doctorId || !req.body.clinicLocationId || !req.body.appointmentDate || !req.body.startTime || !req.body.endTime) {
        res.status(400).send({
            message: "Required fields are missing!"
        });
        return;
    }

    const appointment = {
        patientId: req.body.patientId,
        doctorId: req.body.doctorId,
        clinicLocationId: req.body.clinicLocationId,
        appointmentDate: req.body.appointmentDate,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        status: req.body.status || "Scheduled",
        appointmentType: req.body.appointmentType,
        reasonForVisit: req.body.reasonForVisit,
        notes: req.body.notes || ""
    };

    createAppointment(appointment, res);
};

/**
 * @swagger
 * /appointments:
 *   get:
 *     summary: Get all appointments
 *     tags: [Appointment]
 *     responses:
 *       200:
 *         description: List of all appointments
 */
exports.findAll = (req, res) => {
    findAllAppointments(res);
};

/**
 * @swagger
 * /appointments/{id}:
 *   get:
 *     summary: Get an appointment by ID
 *     tags: [Appointment]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Appointment data
 *       404:
 *         description: Appointment not found
 */
exports.findOne = (req, res) => {
    const id = req.params.id;
    findAppointmentById(id, res);
};

/**
 * @swagger
 * /appointments/{id}:
 *   put:
 *     summary: Update an appointment by ID
 *     tags: [Appointment]
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
 *         description: Appointment updated
 *       404:
 *         description: Appointment not found
 */
exports.update = (req, res) => {
    const id = req.params.id;
    updateAppointment(id, req, res);
};

/**
 * @swagger
 * /appointments/{id}:
 *   delete:
 *     summary: Delete an appointment by ID
 *     tags: [Appointment]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Appointment deleted
 *       404:
 *         description: Appointment not found
 */
exports.delete = (req, res) => {
    const id = req.params.id;
    deleteAppointmentById(id, res);
};

/**
 * @swagger
 * /appointments:
 *   delete:
 *     summary: Delete all appointments
 *     tags: [Appointment]
 *     responses:
 *       200:
 *         description: All appointments deleted
 */
exports.deleteAll = (req, res) => {
    deleteAllAppointments(res);
};


/**
 * @swagger
 * /appointments/{id}/archive:
 *   put:
 *     summary: Archive an appointment by ID
 *     tags: [Appointment]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Appointment archived
 *       404:
 *         description: Appointment not found
 */
exports.archive = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Appointement.update(
      { status: 'Archived' }, // or { archived: true }
      { where: { id } }
    );
    if (result[0] === 0) {
      // Not found
      return res.status(404).send({ message: "Appointment not found" });
    }
    // Success
    res.send({ message: `Appointment ${id} archived` });
  } catch (err) {
    res.status(500).send({ message: "Error archiving appointment", error: err.toString() });
  }
};

/**
 * @swagger
 * /appointments/{id}/completed:
 *   put:
 *     summary: Mark an appointment as completed by ID
 *     tags: [Appointment]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Appointment marked as completed
 *       404:
 *         description: Appointment not found
 */
exports.completed = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Appointement.update(
      { status: 'Completed' },
      { where: { id } }
    );
    if (result[0] === 0) {
      return res.status(404).send({ message: "Appointment not found" });
    }
    res.send({ message: `Appointment ${id} marked as completed` });
  } catch (err) {
    res.status(500).send({ message: "Error marking appointment as completed", error: err.toString() });
  }
};