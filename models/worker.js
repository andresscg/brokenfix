const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: { type: 'string', required: true },
    lastName: { type: 'string', required: true },
    email: { type: 'string', required: true },
    img: { type: 'string', required: true },
    password: { type: 'string', required: true },
    services: { type: 'string', required: true },
    schedule: { type: 'string', required: true },
    reviews: [{ comment: { type: 'string', required: true }, rating: { type: Number, min: 1, max: 5 } }],
});

const Service = mongoose.model('service', serviceSchema);

module.exports = Service;