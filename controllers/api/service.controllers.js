const { filterService, deleteServiceById, createService, findAllServices, findServiceById, updateService, deleteAllServices } = require("../../services/service.services");



const multer = require("multer");


exports.filterService = (req, res) => {
    const patient = req.params.patient;
    const template = req.params.template;
    filterService(patient, template, req, res)
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
        name: req.body.name,
        description: req.body.description,
        status: req.body.status,
        fileName: req.params.filename
    }
    console.log(patient)




    //  this.addFile(req, res)






    createService(patient, res)
};


exports.addImage = (req, res) => {
    console.log("uploading")
    // console.log(req.body)
    // SET STORAGE
    // const fileName = req.body.file[0].name
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'views/assets/uploads/service')
        },
        filename: function (req, file, cb) {
            console.log(file)
            cb(null, file.originalname)
        }
    })

    var upload = multer({ storage: storage }).single('file')

    upload(req, res, function (err) {

        if (err) {

            // ERROR occurred (here it can be occurred due
            // to uploading image of size greater than
            // 1MB or uploading different file type)
            console.log("errrrroeeeee")
            res.send(err)
        }
        else {

            // SUCCESS, image successfully uploaded
            res.send("Success, Image uploaded!")
        }
    })
}

exports.findAll = (req, res) => {
    findAllServices(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findServiceById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateService(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteServiceById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllServices(res)
};