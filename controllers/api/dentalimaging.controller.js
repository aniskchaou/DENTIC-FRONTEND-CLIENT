const {
    findAllDentalImaging,
    findDentalImagingById,
    createDentalImaging,
    updateDentalImaging,
    deleteDentalImagingById,
    deleteAllDentalImaging
} = require("../../services/dentalimaging.services");
const path = require("path");
const fs = require("fs");


/**
 * @swagger
 * tags:
 *   name: DentalImaging
 *   description: API for managing dental imaging records
 */


/**
 * @swagger
 * /dental-imaging:
 *   post:
 *     summary: Create a new dental imaging record
 *     tags: [DentalImaging]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               patientId:
 *                 type: string
 *               doctorId:
 *                 type: string
 *               imageType:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
 *               diagnosisNotes:
 *                 type: string
 *               uploadDate:
 *                 type: string
 *                 format: date-time
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Dental imaging record created
 *       400:
 *         description: Content can not be empty!
 */
exports.create = (req, res) => {
    // req.file contains the uploaded file info
    // req.body contains the other form fields
    const fileUrl = req.file ? req.file.path : null;
    const imagingData = {
        ...req.body,
        imageUrl: fileUrl // Save the file path or URL in your DB
    };
    createDentalImaging(imagingData, res);
};

/**
 * @swagger
 * /dental-imaging:
 *   get:
 *     summary: Get all dental imaging records
 *     tags: [DentalImaging]
 *     responses:
 *       200:
 *         description: List of all dental imaging records
 */
exports.findAll = (req, res) => {
    findAllDentalImaging(null, res);
};

/**
 * @swagger
 * /dental-imaging/{id}:
 *   get:
 *     summary: Get a dental imaging record by ID
 *     tags: [DentalImaging]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Dental imaging record data
 *       404:
 *         description: Dental imaging record not found
 */
exports.findOne = (req, res) => {
    const id = req.params.id;
    findDentalImagingById(id, res);
};

/**
 * @swagger
 * /dental-imaging/{id}:
 *   put:
 *     summary: Update a dental imaging record by ID
 *     tags: [DentalImaging]
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
 *         description: Dental imaging record updated
 *       404:
 *         description: Dental imaging record not found
 */
exports.update = (req, res) => {
    const id = req.params.id;
    updateDentalImaging(id, req, res);
};

/**
 * @swagger
 * /dental-imaging/{id}:
 *   delete:
 *     summary: Delete a dental imaging record by ID
 *     tags: [DentalImaging]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Dental imaging record deleted
 *       404:
 *         description: Dental imaging record not found
 */
exports.delete = (req, res) => {
    const id = req.params.id;
    deleteDentalImagingById(id, res);
};

/**
 * @swagger
 * /dental-imaging:
 *   delete:
 *     summary: Delete all dental imaging records
 *     tags: [DentalImaging]
 *     responses:
 *       200:
 *         description: All dental imaging records deleted
 */
exports.deleteAll = (req, res) => {
    deleteAllDentalImaging(res);
};

/**
 * @swagger
 * /dental-imaging/image/{filename}:
 *   get:
 *     summary: Get a dental imaging file by filename
 *     tags: [DentalImaging]
 *     parameters:
 *       - in: path
 *         name: filename
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Image file returned
 *         content:
 *           image/png:
 *             schema:
 *               type: string
 *               format: binary
 *       404:
 *         description: Image not found
 */
exports.getImage = (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, "../../uploads", filename);

    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).send({ message: "Image not found" });
        }
        res.sendFile(filePath);
    });
};