const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TecSchema = Schema({
   name: String,
   imgTechnology:String,
   certifications:  [{nameCertifications: String, url: String, iconCompany: String}]
});

module.exports = mongoose.model("technology", TecSchema);