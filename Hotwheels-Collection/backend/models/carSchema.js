const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: String,
  year: Number,
  series: String,
  image: String,
  ownedByUser: { type: Boolean, default: false }, // Ensure this field exists
  inCollection: { type: Boolean, default: false }, // Ensure this field exists
});

module.exports = mongoose.model("Car", carSchema);
