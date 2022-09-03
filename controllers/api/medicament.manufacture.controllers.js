const { findMedicamentManufactureById, updateMedicamentManufacture, deleteMedicamentManufactureById, deleteAllMedicamentManufactures, findAllMedicamentManufactures, createMedicamentManufacture } = require("../../services/medicament.manufacture.services");



exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a user
    const patient = {
        name: req.body.name
    }

    createMedicamentManufacture(patient, res)
};

exports.findAll = (req, res) => {

    findAllMedicamentManufactures(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findMedicamentManufactureById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateMedicamentManufacture(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteMedicamentManufactureById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllMedicamentManufactures(req, res)
};