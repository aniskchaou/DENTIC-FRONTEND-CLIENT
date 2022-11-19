
const Medicament = require("../models/medicament.models");
const MedicamentCategory = require("../models/medicament.category.models");
const MedicamentManufacture = require("../models/medicament.manufactue.models");
const findMedicamentCategoryById = require("../services/medicament.category.services");
const findMedicamentManufactureById = require("../services/medicament.manufacture.services");
exports.getCount = (req, res) => {
    Medicament.count()
        .then(data => {
            res.send({ 'medicament': data })
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
}



exports.findAllMedicaments = (res) => {
    const medicaments = []
    const m = Medicament.findAll()
    const c = MedicamentCategory.findAll()
    const mm = MedicamentManufacture.findAll()
    Promise
        .all([m, c, mm])
        .then(responses => {
            console.log(responses[1])
            for (const d of responses[0]) {
                medicaments.push({
                    id: d.id,
                    name: d.name,
                    producer: responses[2].find(i => i.id == d.producer)?.dataValues?.name,
                    description: d.description,
                    group: responses[1].find(i => i.id == d.group)?.dataValues?.name,
                    createdAt: d.createdAt,
                    updatedAt: d.updatedAt
                })

            }
            res.send(medicaments);
        })

}

exports.createMedicament = (medicament, res) => {
    console.log(medicament)
    Medicament.create(medicament)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Medicament."
            });
        });
}

exports.findMedicamentById = (id) => {
    Medicament.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Medicament with id=" + id
            });
        });
}

exports.deleteMedicamentById = (id, res) => {
    Medicament.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Medicament was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Medicament with id=${id}. Maybe Medicament was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Medicament with id=" + id
            });
        });
}

exports.updateMedicament = (id, req, res) => {
    Medicament.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Medicament was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Medicament with id=${id}. Maybe Medicament was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Medicament with id=" + id
            });
        });
}

exports.deleteAllMedicaments = () => {
    Medicament.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Medicament were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}


exports.getMedicamentByDate = (res) => {

    Medicament.findAll()
        .then(data => {


            var dates = []
            var amounts = []
            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            data.forEach(function (element) {
                //const d = new Date(element.birth)

                //  var dateBirth = new Date(element.birth)
                var age = 2022 - element.createdAt.getFullYear()
                console.log(element.createdAt.getMonth())
                //  dates.push(monthNames[element.birth.getMonth()])
                amounts.push(element.createdAt.getMonth())


            });



            const response = {
                labels: monthNames,
                datasets: [
                    {
                        label: 'Medicaments',
                        data: amounts,
                        borderColor: 'rgba(255, 99, 132, 0.5)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    }
                ],
            };
            res.send(response);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
}