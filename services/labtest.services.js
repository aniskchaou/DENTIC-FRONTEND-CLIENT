
const LabTest = require("../models/labtest.models");
const Patient = require("../models/patient.models");

exports.findAllLabTests = (res) => {

    /* LabTest.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
 */


    const testLabs = []
    const p = Patient.findAll()
    const t = LabTest.findAll()

    Promise
        .all([t, p])
        .then(responses => {
            console.log(responses[1])
            for (const d of responses[0]) {
                testLabs.push({
                    id: d.id,
                    datee: d.datee,
                    content: d.content,
                    status: d.status,
                    patient: responses[1].find(i => i.id == d.patient)?.dataValues?.namepatient,
                    createdAt: d.createdAt,
                    updatedAt: d.updatedAt
                })

            }
            res.send(testLabs);
        })
}

exports.createLabTest = (income, res) => {
    LabTest.create(income)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the LabTest."
            });
        });
}

exports.findLabTestById = (id) => {
    LabTest.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving LabTest with id=" + id
            });
        });
}

exports.deleteLabTestById = (id, res) => {
    LabTest.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "LabTest was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete LabTest with id=${id}. Maybe LabTest was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete LabTest with id=" + id
            });
        });
}

exports.updateLabTest = (id, req, res) => {
    LabTest.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "LabTest was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update LabTest with id=${id}. Maybe LabTest was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating LabTest with id=" + id
            });
        });
}

exports.deleteAllLabTests = () => {
    LabTest.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} LabTest were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}