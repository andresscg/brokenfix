const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userControllers = {
    addUser: async (req, res) => {
        let { password, email, address, workers, range, phoneNumber, img, lastName, name, google } = req.body
        try {
            const userExists = await User.findOne({ email })
            if (userExists) {
                res.json({ success: false, error: "El email ya esta en uso", response: null })
            } else {
                const hashPass = bcryptjs.hashSync(password, 10)
                const newUser = new User({
                    password: hashPass,
                    address,
                    workers,
                    range,
                    phoneNumber,
                    lastName,
                    name,
                    email,
                    img,
                    google
                })
                await newUser.save()
                const token = jwt.sign({ ...newUser }, process.env.SECRETKEY)
                const { _id } = newUser
                res.json({ success: true, response: { name, img, token, _id, range }, error: null })
            }
        } catch (error) {
            console.log(error);
            res.json({ success: false, response: null, error: error })
        }
    },
    signin: async (req, res) => {
        const { email, password, google } = req.body
        try {
            const userExists = await User.findOne({ email })
            if (!email || !password) return res.json({ success: false, error: "All fields should be filled" })
            if (!userExists) {
                res.json({ success: false, error: "email y/o contraseña incorrectos" })
            } else {
                if (userExists.google && !google) return res.json({ success: false, error: "email y/o contraseña incorrectos" })
                let samePass = bcryptjs.compareSync(password, userExists.password)
                console.log(samePass);
                if (samePass) {
                    const token = jwt.sign({ ...userExists }, process.env.SECRETKEY)
                    const { name, img, _id, range } = userExists
                    res.json({ success: true, response: { name, img, token, _id, range }, error: null })
                } else {
                    console.log('error');
                    console.log(password === userExists.password);
                    res.json({ success: false, error: "email y/o contraseña incorrectos" })
                }
            }

        } catch (error) {
            res.json({ success: false, response: null, error: error })
        }
    },
    authUser: (req, res) => {
        try {
            const userAuth = req.user
            res.json({ success: true, response: userAuth, error: null })
        } catch (error) {
            res.json({ success: false, response: null, error: error })
        }
    },
    getUsers: async (req, res) => {
        try {
            if (req.user.range === 'A' || req.user.range === 'B') {
                const users = await User.find()
                res.json({ success: true, users })
            } else {
                res.json({ success: false, error: 'Unauthorized User, you must be an admin' })
            }
        } catch (error) {
            res.json({ success: false, response: null, error: error })
        }
    },
    updateUser: async (req, res) => {
        const userBody = req.body
        let userUpdated
        try {
            if (req.user.range === 'A') {
                const id = req.params.id
                userUpdated = await User.findOneAndUpdate({ _id: id }, userBody, { new: true })
                res.json({ success: true, userUpdated })
            } else if (req.user.range === 'C' || req.user.range === 'B') {
                if (!userBody.range) {
                    userUpdated = await User.findOneAndUpdate({ _id: req.user._id }, userBody, { new: true })
                    res.json({ success: true, userUpdated })
                } else {
                    res.json({ success: false })
                }

            } else {

                res.json({ success: false, error: 'Unauthorized User, you must be an admin' })
            }
        } catch (error) {
            res.json({ success: false, response: null, error: error })
        }
    },
    deleteUser: async (req, res) => {
        try {
            if (req.user.range === 'A' || req.user.range === 'B') {
                const id = req.params.id
                const user = await User.findOne({ _id: id })
                if (user.range !== 'A') {
                    await User.findOneAndDelete({ _id: id })
                    res.json({ success: true, msg: 'User was deleted successfully ' })

                } else {
                    res.json({ success: false })

                }
            } else if (req.user.range === 'C') {
                await User.findOneAndDelete({ _id: req.user._id })
                res.json({ success: true, msg: 'The account has been deleted successfully ' })

            } else {
                res.json({ success: false, error: 'Unauthorized User' })

            }
        } catch (error) {
            res.json({ success: false, response: null, error: error })
        }
    },
}
module.exports = userControllers
