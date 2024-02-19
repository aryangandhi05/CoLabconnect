const mongoose = require("mongoose");

const sapplySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstName: String,
  lastName: String,
  email: String,
  contactNo: String,
  resume: String,
});

const SApply = mongoose.model('SApply', sapplySchema);

module.exports = SApply;