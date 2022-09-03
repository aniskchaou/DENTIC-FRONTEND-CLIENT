const { findPrescriptionById, updatePrescription, deletePrescriptionById, deleteAllPrescriptions, findAllPrescriptions, createPrescription } = require("../../services/prescription.services");



exports.create = (req, res) => {
    // Validate request
    if (!req.body.username) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a user
    const patient = {
        namepatient: req.body.namepatient,
        emailpatient: req.body.emailpatient,
        birth: req.body.birth,
        telephone: req.body.telephone,
        gender: req.body.gender,
        address: req.body.address
    }

    createPrescription(patient, res)
};

exports.findAll = (req, res) => {

    findAllPrescriptions(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findPrescriptionById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updatePrescription(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deletePrescriptionById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllPrescriptions(req, res)
};