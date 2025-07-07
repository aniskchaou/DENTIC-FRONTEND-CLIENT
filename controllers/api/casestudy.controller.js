const {
    findAllCaseStudies,
    findCaseStudyById,
    createCaseStudy,
    updateCaseStudy,
    deleteCaseStudyById,
    deleteAllCaseStudies
} = require("../../services/casestudy.services");

// Create a new case study
exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    createCaseStudy(req.body, res);
};

// Retrieve all case studies (with optional filtering)
exports.findAll = (req, res) => {
    // You can add query-based filtering here if needed
    findAllCaseStudies(null, res);
};

// Find a single case study by ID
exports.findOne = (req, res) => {
    const id = req.params.id;
    findCaseStudyById(id, res);
};

// Update a case study by ID
exports.update = (req, res) => {
    const id = req.params.id;
    updateCaseStudy(id, req, res);
};

// Delete a case study by ID
exports.delete = (req, res) => {
    const id = req.params.id;
    deleteCaseStudyById(id, res);
};

// Delete all case studies
exports.deleteAll = (req, res) => {
    deleteAllCaseStudies(res);
};