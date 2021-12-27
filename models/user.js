const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    img: { type: String },
    password: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    admin: { type: Boolean, default: false },
    workers: [{ type: mongoose.Types.ObjectId, ref: 'worker' }],
    address: { street: { type: String, required: true }, number: { type: Number, required: true }, commune: { type: String, required: true } },
});

const User = mongoose.model('user', userSchema);

module.exports = User;