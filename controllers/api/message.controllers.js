const { findMessageById, updateMessage, deleteMessageById, deleteAllMessages, findAllMessages, createMessage } = require("../../services/message.services");



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

    createMessage(patient, res)
};

exports.findAll = (req, res) => {

    findAllMessages(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findMessageById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateMessage(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteMessageById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllMessages(req, res)
};