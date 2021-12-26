const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({

});

const Service = mongoose.model('service', serviceSchema);

module.exports = Service;