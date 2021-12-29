const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userControllers = {
    addUser: async (req, res) => {
        let { password, email, street, commune, number, workers, phoneNumber, img, lastName, name, google } = req.body
        try {
            const userExists = await User.findOne({ email })
            if (userExists) {
                res.json({ success: false, error: "Email already in use", response: null })
            } else {
                const hashPass = bcryptjs.hashSync(password, 10)
                const newUser = new User({
                    password: hashPass,
                    street,
                    commune,
                    number,
                    workers,
                    img,
                    phoneNumber,
                    lastName,
                    name,
                    email,
                    google
                })
                await newUser.save()
                const token = jwt.sign({ ...newUser }, process.env.SECRETKEY)
                const { _id, range } = newUser
                res.json({ success: true, response: { name, img, token, _id, range }, error: null })
            }
        } catch (error) {
            res.json({ success: false, response: null, error: error })
        }
    },
    signin: async (req, res) => {
        const { email, password, google } = req.body
        try {
            const user = await User.findOne({ email })
            if (!user) throw new Error("Email or password incorrect");
            if (user.googleAccount && !google) throw new Error("Invalid email");
            const isPassword = bcryptjs.compareSync(password, user.password);
            if (!isPassword) throw new Error("Email or password incorrect");
            const token = jwt.sign({ ...user }, process.env.SECRETKEY)
            res.json({ success: true, response: { range: user.range, token, name: user.name, img: user.img, lastName: user.lastName, _id: user._id } })
        } catch (error) {
            res.json({ success: false, response: error.message })
        }
    },
    authUser: (req, res) => {
        try {
            res.json({ success: true, response: req.user, error: null })
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
                const users = await User.find()
                const deletedUserIndex = users.findIndex(user => user._id.toString() === id.toString())

                if (users[deletedUserIndex].range !== 'A') {

                    users.splice(deletedUserIndex, 1)
                    await users.save()
                    // const deletedUser = await User.findOneAndDelete({ _id: id })
                    // const deletedIndex = state.users.findIndex(user => user === action.payload)
                    // state.users.splice(deletedIndex, 1)
                    // console.log(state.users);
                    console.log(users);
                    // res.json({ success: true, msg: 'User was deleted successfully ', users })

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
