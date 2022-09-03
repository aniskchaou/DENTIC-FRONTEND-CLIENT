const { createEvent, findAllEvent, findEventById, updateEvent, deleteEventById, deleteAllEvents } = require("../../services/appointement.services");


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
        datee: req.body.date,
        patient: req.body.patient,
        problem: req.body.problem
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