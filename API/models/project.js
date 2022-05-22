const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// No es imgTechnology es imgProject
const ProjSchema = Schema({
   name: String,
   author: String,
   authorUrlImg: String,
   imgProject: String,
   subText: String,
   urlGit: String,
   urlWeb: String,
   technologies:  [String],
   created_at: {
      type: Date,
      required: true,
      default: Date.now
   }
});

module.exports = mongoose.model("project", ProjSchema);