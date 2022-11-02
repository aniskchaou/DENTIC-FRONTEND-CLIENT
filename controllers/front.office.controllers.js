
//homepage
const { updateHomePage, getHomePage, getServices, getBlogs, getOpeningHours, updateOpeningHours, updateBlogs, updateServices } = require("../services/front.office.services");

exports.getHomePage = (req, res) => {
    getHomePage(res)
};

//service
exports.getServices = (req, res) => {
    getServices(res)
};

//blog
exports.getBlogs = (req, res) => {
    getBlogs(res)
};


exports.getOpeningHours = (req, res) => {
    getOpeningHours(res)
};



exports.updateHomePage = (req, res) => {
    const id = req.params.id;
    updateHomePage(id, req, res)
};


exports.updateServices = (req, res) => {
    const id = req.params.id;
    updateServices(id, req, res)
};


exports.updateBlogs = (req, res) => {
    const id = req.params.id;
    updateBlogs(id, req, res)
};

exports.updateOpeningHours = (req, res) => {
    const id = req.params.id;
    updateOpeningHours(id, req, res)
};








//contact
/* exports.getContact = (req, res) => {
    getBlogs(res)
}; */
