const { getCount, findMessageById, updateMessage, deleteMessageById, deleteAllMessages, findAllMessages, createMessage } = require("../../services/message.services");

exports.getCount = (req, res) => {
    getCount(req, res)
}


exports.create = (req, res) => {
    console.log("send")
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a user
    const patient = {
        name: req.body.name,
        subject: req.body.subject,
        message: req.body.message
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