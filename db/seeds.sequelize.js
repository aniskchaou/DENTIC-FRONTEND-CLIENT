
const fs = require('fs');

exports.userSeed = {
    name: "admin",
    birthday: "1/1/1999",
    password: "admin",
    email: "admin@gmail.com",
    telephone: "765876",
    address: "N/A",
    role: "Admnistrator",
    username: "admin"
}


exports.serviceSeed = [{
    name: 'Popular Use Of The Internet',
    description: 'inappropriate behavior is oftenlaug hed off as “boys will be boys,” women face higher conduct women face higher conduct.',
    status: 'active',
    fileName: 's1.jpg'

},
{
    name: 'Protective Preventative',
    description: 'inappropriate behavior is oftenlaug hed off as “boys will be boys,” women face higher conduct women face higher conduct.',
    status: 'active',
    fileName: 's2.jpg'

},
{
    name: 'Download Free Songs',
    description: 'inappropriate behavior is oftenlaug hed off as “boys will be boys,” women face higher conduct women face higher conduct.',
    status: 'active',
    fileName: 's3.jpg'

},
{
    name: 'A Discount Toner Cartridge',
    description: 'inappropriate behavior is oftenlaug hed off as “boys will be boys,” women face higher conduct women face higher conduct.',
    status: 'active',
    fileName: 's4.jpg'

}]





exports.expenseSeed = {
    nameexpense: '',
    amount: 0,
    datee: new Date(1980, 6, 20),
    note: 'a'
}

exports.patientSeed = {
    namepatient: 'a',
    emailpatient: 'a',
    birth: new Date(1980, 6, 20),
    telephone: 'a',
    gender: 'a',
    address: 'a'
}


exports.servicePageSeed = {
    title: 'Services',
    subtitle: 'What we Offer to our Customers',
    intro: 'Who are in extremely love with eco friendly system.'
}

exports.schedulePageSeed = {
    title: 'Opening Hours',
    subtitle: 'Get ready to cast your vote and select the right one',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}

exports.contactPageSeed = {
    title: 'Contact Us',
    subtitle: 'Latest From Our Blog',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}

exports.blogPageSeed = {
    title: 'Blog',
    subtitle: 'Latest From Our Blog',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}

exports.testimonialsSeed = {
    title: 'Testimonials',
    subtitle: 'Feedback from our real clients',
    intro: 'It won’t be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual Game.'
}


exports.homePageSeed = {
    title1: "DON’T LOOK FURTHER, THIS IS YOUR DENTIST",
    title2: 'Authentic Dental Service',
    title3: 'If you are looking at blank cassettes on the web, you may be very confused at the difference in price.You may see some for as low as $.17 each.You may be saying to yourself.'
}



exports.getSytemSettings = () => {
    var rawdata = fs.readFileSync('db/settings/system.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}

exports.getEmailSettings = () => {
    var rawdata = fs.readFileSync('db/settings/system.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}

exports.getEmailTemplateSettings = () => {
    var rawdata = fs.readFileSync('db/settings/email_template.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}


exports.getEmailSettings = () => {
    var rawdata = fs.readFileSync('db/settings/email.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}

exports.getFooterSettings = () => {
    var rawdata = fs.readFileSync('db/settings/footer.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}

exports.getHeaderSettings = () => {
    var rawdata = fs.readFileSync('db/settings/header.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}

exports.getLocalisationSettings = () => {
    var rawdata = fs.readFileSync('db/settings/localisation.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}

exports.getNotificationSettings = () => {
    var rawdata = fs.readFileSync('db/settings/notification.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}

exports.getDashboardSettings = () => {
    var rawdata = fs.readFileSync('db/settings/dashboard.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}







