const HomePage = require("../models/home.page.models.js");

const BlogPage = require("../models/blog.page.models");
const TestimonialsPage = require("../models/testimonials.page.models");
const ContactPage = require("../models/contact.page.models");
const OpeningHoursPage = require("../models/openinghours.page.models");
const ServicePage = require("../models/service.page.models.js");
const ServiceItem = require('../models/service.models')
exports.getHome = async function (req, res) {


  const homePagePromise = HomePage.findOne()
  /*  .then(data => {
     console.log(data.dataValues)
     res.render("elements/index", { viewTitle: 'Dentic', homePage: data.dataValues });
   })
   .catch(err => {
     res.status(500).send({
       message:
         err.message || "Some error occurred while retrieving users."
     });
   }); */

  const openingHoursPromise = OpeningHoursPage.findOne()
  /* .then(data => {
    console.log(data.dataValues)
    res.render("elements/index", { viewTitle: 'Dentic', openingHoursPage: data.dataValues });
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving users."
    });
  }); */
  const blogPromise = BlogPage.findOne()
  const testimonialsPromise = TestimonialsPage.findOne()
  const contactPromise = ContactPage.findOne()
  const servicePromise = ServicePage.findOne()
  const serviceItems = ServiceItem.findAll()

  Promise
    .all([homePagePromise, openingHoursPromise, blogPromise, testimonialsPromise, contactPromise, servicePromise, serviceItems])
    .then(responses => {
      console.log(responses[6])
      res.render("elements/index", {
        viewTitle: 'Dentic', openingHoursPage: responses[1].dataValues,
        homePage: responses[0].dataValues, blogPage: responses[2].dataValues,
        testimonialsPage: responses[3].dataValues, contactPage: responses[4].dataValues,
        servicePage: responses[5].dataValues, services: responses[6]
      });
      console.log(responses[6].dataValue)
    })
    .catch(err => {
      console.log('**********ERROR RESULT****************');
      console.log(err);
    });
  /* 
    BlogPage.findOne()
      .then(data => {
        console.log(data.dataValues)
        res.render("elements/index", { viewTitle: 'Dentic', blogPage: data.dataValues });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      }); */





  //res.redirect('/list')
  /*  const user_profile = db.user_profile.findOne({
        where: {
            profile_id: new_profile_id
        }
    });
  
    const all_reports = db.report.all();
  
    const report_details = db.report_detail.findAll({
        where: {
            profile_id: new_profile_id
        }
    });
  
    Promise
        .all([user_profile, all_reports, report_details])
        .then(responses => {
            console.log('**********COMPLETE RESULTS****************');
            console.log(responses[0]); // user profile
            console.log(responses[1]); // all reports
            console.log(responses[2]); // report details
        })
        .catch(err => {
            console.log('**********ERROR RESULT****************');
            console.log(err);
        });*/
  // res.render("elements/index", { viewTitle: 'Dentic' });
}

exports.getAbout = async function (req, res) {
  //res.redirect('/list')
  res.render("elements/about", { viewTitle: 'About' });
}

exports.getBlog = async function (req, res) {
  //res.redirect('/list')
  res.render("elements/blog", { viewTitle: 'Blog' });
}


exports.getContact = async function (req, res) {
  //res.redirect('/list')
  res.render("elements/contact", { viewTitle: 'Contact' });
}

exports.getElements = async function (req, res) {
  //res.redirect('/list')
  res.render("elements/elements", { viewTitle: 'Elements' });
}

exports.getOpeningHours = async function (req, res) {
  //res.redirect('/list')
  res.render("elements/openinghours", { viewTitle: 'Opening hours' });
}

exports.getPricing = async function (req, res) {
  //res.redirect('/list')
  res.render("elements/pricing", { viewTitle: 'Pricing' });
}

exports.getServices = async function (req, res) {
  //res.redirect('/list')
  res.render("elements/services", { viewTitle: 'Services' });
}


