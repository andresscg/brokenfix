const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userControllers = {
    addUser: async (req, res) => {
        let { password, email, address, workers, admin, phoneNumber, img, lastName, name, google } = req.body
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
                    admin,
                    phoneNumber,
                    lastName,
                    name,
                    email,
                    google
                })
                await newUser.save()
                const token = jwt.sign({ ...newUser }, process.env.SECRETKEY)
                const { _id } = newUser
                res.json({ success: true, response: { name, img, token, _id, admin }, error: null })
            }
        } catch (error) {
            console.log(error);
            res.json({ success: false, response: null, error: error })
        }
    },
    signin: async (req, res) => {
        const { email, password, google } = req.body
        console.log(req.body)
        try {
            const userExists = await User.findOne({ email })
            if (!email || !password) return res.json({ success: false, error: "All fields should be filled" })
            if (!userExists) {
                res.json({ success: false, error: "email y/o contraseña incorrectos" })
            } else {
                if (userExists.google && !google) return res.json({ success: false, error: "email y/o contraseña incorrectos" })
                let samePass = bcryptjs.compareSync(password, userExists.password)
                if (samePass) {
                    const token = jwt.sign({ ...userExists }, process.env.SECRETKEY)
                    const { name, img, _id, admin } = userExists
                    res.json({ success: true, response: { name, img, token, _id, admin }, error: null })
                } else {

                    console.log('error');
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
            if (req.user.admin) {
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
        const id = req.params.id
        const userBody = req.body
        let userUpdated
        try {
            if (req.user.admin) {
                userUpdated = await User.findOneAndUpdate({ _id: id }, userBody, { new: true })
                res.json({ success: true, userUpdated })
            } else {
                res.json({ success: false, error: 'Unauthorized User, you must be an admin' })

            }
        } catch (error) {
            res.json({ success: false, response: null, error: error })
        }
    },
    deleteUser: async (req, res) => {
        const id = req.params.id
        try {
            if (req.user.admin) {
                await User.findOneAndDelete({ _id: id })
                res.json({ success: true, msg: 'User was deleted sccessfully' })
            } else {
                res.json({ success: false, error: 'Unauthorized User, you must be an admin' })
            }
        } catch (error) {
            res.json({ success: false, response: null, error: error })
        }
    },
}
module.exports = userControllers
