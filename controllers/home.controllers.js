
exports.getHome = async function (req, res) {
  //res.redirect('/list')
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


