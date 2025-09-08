const sequelize = require("../db/init.sequelize");
const User = require("../models/user.models");


exports.findAllUsers = (condition,res) => {

    User.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
}
exports.loginUser = (username, password, res) => {
    User.findOne({ where: { username: username, password: password } })
        .then(data => {

            if (data === null) {
                res.send({});
            } else {
                res.send(data);
            }

        })
        .catch(err => {
            res.send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });
}

exports.createUser = (user,res) => {
    // Save user in the database
    User.create(user)
        .then(async data => {
            // Send welcome email after creation
            try {
                const { sendMail } = require('../utils/email.services');
                if (user.email) {
                    await sendMail({
                        to: user.email,
                        subject: 'Welcome to Dentic!',
                        text: `Hello ${user.username},\n\nYour account has been created.\nUsername: ${user.username}\nPassword: ${user.password}\n\nPlease keep this information safe.`,
                        html: `<p>Hello ${user.username},</p><p>Your account has been created.</p><ul><li><b>Username:</b> ${user.username}</li><li><b>Password:</b> ${user.password}</li></ul><p>Please keep this information safe.</p>`
                    });
                }
            } catch (e) {
                console.error('Error sending welcome email:', e);
            }
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });
}

exports.findUserById = (id, res) => {
    User.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving User with id=" + id
            });
        });
}

exports.deleteUserById = (id, res) => {
    User.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete User with id=${id}. Maybe User was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}

exports.updateUser = (id, req, res) => {
    User.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating User with id=" + id
            });
        });
}

exports.deleteAllUsers = (res) => {
    User.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} User were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}