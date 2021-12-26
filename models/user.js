const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    img: { type: String },
    password: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    admin: { type: Boolean, default: false },
    workers: [{ type: mongoose.Types.ObjectId, ref: 'worker' }]
});

const User = mongoose.model('user', userSchema);

module.exports = User;