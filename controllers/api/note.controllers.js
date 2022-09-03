const { findNoteById, updateNote, deleteNoteById, deleteAllNotes, findAllNotes, createNote } = require("../../services/note.services");



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

    createNote(patient, res)
};

exports.findAll = (req, res) => {

    findAllNotes(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findNoteById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateNote(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteNoteById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllNotes(req, res)
};