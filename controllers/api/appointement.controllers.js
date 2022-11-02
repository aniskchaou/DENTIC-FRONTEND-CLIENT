const { getCount, createAppointement, createEvent, findAllEvent, findEventById, updateEvent, deleteEventById, deleteAllEvents } = require("../../services/appointement.services");

exports.getCount = (req, res) => {
    getCount(req, res)
}

exports.createAppointement = (req, res) => {
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
        message: req.body.message,
        birthdate: req.body.birthdate,
        email: req.body.email,
        telephone: req.body.telephone
    }

    createAppointement(patient, res)
};
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
        message: req.body.message,
        birthdate: req.body.birthdate,
        email: req.body.email,
        telephone: req.body.telephone
    }

    createEvent(patient, res)
};

exports.findAll = (req, res) => {

    findAllEvent(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findEventById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateEvent(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteEventById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllEvents(req, res)
};