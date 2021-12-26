const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    img: { type: String, required: true },
    password: { type: String, required: true },
    address: { street: { type: String, required: true }, number: { type: Number, required: true }, commune: { type: String, required: true } },
    services: { type: mongoose.Types.ObjectId, ref: 'service', required: true },
    schedule: { days: [{ day: { type: String, required: true }, rangeTime: { type: String, required: true }, bol: { type: Boolean, required: true }, user: { type: mongoose.Types.ObjectId, ref: 'user', required: true } }] },
    reviews: [{ comment: { type: String, required: true }, rating: { type: Number, min: 1, max: 5 }, user: { type: mongoose.Types.ObjectId, ref: 'user', required: true } }],
});

const Worker = mongoose.model('worker', workerSchema);

module.exports = Worker;