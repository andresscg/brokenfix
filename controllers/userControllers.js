const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userControllers = {
    addUser: async (req, res) => {
        let { email, google, password, userName, lastName, img, country } = req.body
        try {
            const userExists = await User.findOne({ email })
            if (userExists) {
                res.json({ success: false, error: "El email ya esta en uso", response: null })
            } else {
                const hashPass = bcryptjs.hashSync(password, 10)
                const newUser = new User({
                    email,
                    google,
                    password: hashPass,
                    userName,
                    lastName,
                    img,
                    country
                })
                await newUser.save()
                const token = jwt.sign({ ...newUser }, process.env.SECRET_KEY)
                const { _id } = newUser
                res.json({ success: true, response: { userName, img, token, _id }, error: null })
            }
        } catch (error) {
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
                if (samePass) {
                    const token = jwt.sign({ ...userExists }, process.env.SECRET_KEY)
                    const { userName, img, _id } = userExists
                    res.json({ success: true, response: { userName, img, token, _id }, error: null })
                } else {
                    res.json({ success: false, error: "email y/o contraseña incorrectos" })
                }
            }

        } catch (error) {
            res.json({ success: false, response: null, error: error })
        }
    }, authUser: (req, res) => {
        try {
            const userAuth = req.user
            res.json({ success: true, response: userAuth, error: null })
        } catch (error) {
            res.json({ success: false, response: null, error: error })
        }
    },

}
module.exports = userControllers
