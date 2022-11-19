const { getPatientByDate, searchPatient, getCount, findPatientById, updatePatient, deletePatientById, deleteAllPatients, findAllPatients, createPatient } = require("../../services/patient.services");


exports.getPatientByDate = (req, res) => {

    getPatientByDate(res)
};


exports.searchPatient = (req, res) => {

    searchPatient(req.params.patient, req, res)
};

exports.getCount = (req, res) => {
    getCount(req, res)
}

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
        namepatient: req.body.namepatient,
        emailpatient: req.body.emailpatient,
        birth: req.body.birth,
        telephone: req.body.telephone,
        gender: req.body.gender,
        address: req.body.address
    }

    createPatient(patient, res)
};

exports.findAll = (req, res) => {

    findAllPatients(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findPatientById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updatePatient(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deletePatientById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllPatients(req, res)
};