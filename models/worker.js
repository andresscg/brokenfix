const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    img: { type: String, required: true },
    address: { street: { type: String, required: true }, number: { type: Number, required: true }, commune: { type: String, required: true } },
    services: { type: mongoose.Types.ObjectId, ref: 'service', required: true },
    schedule: [{ day: { type: String, required: true }, morning: { type: Boolean, required: true }, afternoon: { type: Boolean, required: true } }],
    reservation: [{ day: { type: String, required: true }, rangeTime: { type: String, required: true }, user: { type: mongoose.Types.ObjectId, ref: 'user', required: true }, date: { type: Date, default: Date.now } }],
    reviews: [{ comment: { type: String }, rating: { type: Number, min: 1, max: 5 }, user: { type: mongoose.Types.ObjectId, ref: 'user', required: true } }],
});

const Worker = mongoose.model('worker', workerSchema);

module.exports = Worker;