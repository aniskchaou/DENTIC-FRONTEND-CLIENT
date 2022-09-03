
exports.getHome = async function (req, res) {
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
  res.render("elements/index", { viewTitle: 'Dentic' });
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


