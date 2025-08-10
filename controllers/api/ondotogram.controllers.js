const Ondotogram = require("../../models/ondotogram.models.js");

/**
 * @swagger
 * /ondotogram:
 *   post:
 *     summary: Save or update ondotogram data for a patient/appointment
 *     tags: [Ondotogram]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               patient:
 *                 type: integer
 *               doctor:
 *                 type: integer
 *               clinic:
 *                 type: integer
 *               appointment:
 *                 type: integer
 *               membership:
 *                 type: string
 *               teeth:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     toothNumber:
 *                       type: integer
 *                     status:
 *                       type: string
 *                     notes:
 *                       type: string
 *                     procedure:
 *                       type: string
 *                     operation:
 *                       type: string
 *                     diagnosis:
 *                       type: string
 *                     treatmentSummary:
 *                       type: string
 *     responses:
 *       200:
 *         description: Ondotogram data saved or updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       500:
 *         description: Error saving ondotogram
 */
exports.saveOndotogram = async (req, res) => {
  try {
    const { patient, doctor, clinic, appointment, membership, teeth } = req.body;
    const [record, created] = await Ondotogram.findOrCreate({
      where: { patient, doctor, clinic, appointment, membership },
      defaults: { teeth }
    });
    if (!created) {
      // Merge new teeth with existing, avoiding duplicates by toothNumber
      let existingTeeth = Array.isArray(record.teeth) ? record.teeth : [];
      let newTeeth = Array.isArray(teeth) ? teeth : [];
      // Remove existing teeth with the same toothNumber as new ones
      const newToothNumbers = newTeeth.map(t => t.toothNumber);
      existingTeeth = existingTeeth.filter(t => !newToothNumbers.includes(t.toothNumber));
      const updatedTeeth = [...existingTeeth, ...newTeeth];
      await record.update({ teeth: updatedTeeth });
      res.status(200).send(record);
    } else {
      res.status(200).send(record);
    }
  } catch (err) {
    res.status(500).send({ message: "Error saving ondotogram", error: err });
  }
};

/**
 * @swagger
 * /ondotogram/teeth:
 *   post:
 *     summary: Get teeth array for a patient/appointment
 *     tags: [Ondotogram]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               patient:
 *                 type: integer
 *               doctor:
 *                 type: integer
 *               clinic:
 *                 type: integer
 *               appointment:
 *                 type: integer
 *               membership:
 *                 type: string
 *     responses:
 *       200:
 *         description: Array of teeth for the patient/appointment
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   toothNumber:
 *                     type: integer
 *                   status:
 *                     type: string
 *                   notes:
 *                     type: string
 *                   procedure:
 *                     type: string
 *                   operation:
 *                     type: string
 *                   diagnosis:
 *                     type: string
 *                   treatmentSummary:
 *                     type: string
 *       500:
 *         description: Error retrieving teeth
 */
exports.getTeeth = async (req, res) => {
  try {
    const { patient, doctor, clinic, appointment, membership, toothNumber } = req.body;
    const record = await Ondotogram.findOne({
      where: { patient, doctor, clinic, appointment, membership }
    });
    if (!record) return res.status(404).send([]);
    if (toothNumber !== undefined) {
      // Find the single tooth object
      const tooth = (record.teeth || []).find(t => t.toothNumber === toothNumber);
      return res.send(tooth ? [{ ...tooth, createdAt: record.createdAt }] : []);
    }
    // Add createdAt to each tooth in the array
    const teethWithCreatedAt = (record.teeth || []).map(t => ({
      ...t,
      createdAt: record.createdAt
    }));
    res.send(teethWithCreatedAt);
  } catch (err) {
    res.status(500).send({ message: "Error retrieving teeth", error: err });
  }
};