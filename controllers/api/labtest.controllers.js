const { findLabTestById, updateLabTest, deleteLabTestById, deleteAllLabTests, findAllLabTests, createLabTest } = require("../../services/labtest.services");



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
        datee: req.body.datee,
        patient: req.body.patient,
        content: req.body.content,
        name: req.body.name
    }

    createLabTest(patient, res)
};

exports.findAll = (req, res) => {

    findAllLabTests(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findLabTestById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateLabTest(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteLabTestById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllLabTests(req, res)
};