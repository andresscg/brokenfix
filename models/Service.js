const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
});

const Service = mongoose.model("service", serviceSchema);

module.exports = Service;
