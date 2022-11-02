
const Appointement = require("../models/appointement.models");
exports.getCount = (req, res) => {
    Appointement.count()
        .then(data => {
            res.send({ 'appointement': data })
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
}


exports.findAllEvent = (res) => {
    Appointement.findAll({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
}

exports.createAppointement = (user, res) => {
    Appointement.create(user)
        .then(data => {
            res.redirect('/');
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Appointement."
            });
        });
}

exports.createEvent = (user, res) => {
    Appointement.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Appointement."
            });
        });
}

exports.findEventById = (id) => {
    Appointement.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Appointement with id=" + id
            });
        });
}

exports.deleteEventById = (id, res) => {
    Appointement.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Appointement was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Appointement with id=${id}. Maybe Appointement was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Appointement with id=" + id
            });
        });
}

exports.updateEvent = (id, req, res) => {
    Appointement.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Appointement was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Appointement with id=${id}. Maybe Appointement was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Appointement with id=" + id
            });
        });
}

exports.deleteAllEvents = () => {
    Appointement.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Appointement were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}