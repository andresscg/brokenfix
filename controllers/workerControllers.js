const Worker = require('../models/worker');

const workerControllers = {
    addWorker: async (req, res) => {
        let { name, lastName, email, img, address, services, schedule, reviews } = req.body;
        try {
            const workerExist = await Worker.findOne({ email })
            if (workerExist) {
                res.json({ success: false, error: "The user email is already in use", response: null })

            } else {
                const newWorker = new Worker({
                    name,
                    lastName,
                    email,
                    img,
                    address,
                    services,
                    schedule,
                    reviews
                })
                if (req.user.admin) {
                    await newWorker.save()
                    res.json({ success: true, response: { newWorker }, error: null })
                } else {
                    res.json({ success: false, error: 'Unauthorized User, you must be an admin' })
                }
            }
        } catch (error) {
            res.json({ success: false, response: null, error: error })
        }
    },
    getWorkers: async (req, res) => {

        try {
            if (req.user.admin) {

                const users = await Worker.find()
                res.json({ success: true, users })
            } else {
                res.json({ success: false, error: 'Unauthorized User, you must be admin' })
            }
        } catch (error) {
            res.json({ success: false, response: null, error: error })
        }
    },
    deleteWorker: async (req, res) => {
        const id = req.params.id
        try {
            if (req.user.admin) {
                await Worker.findOneAndDelete({ _id: id })
                res.json({ success: true, msg: 'Worker deleted successfully' })

            } else {
                res.json({ success: false, error: 'Unauthorized User, you must be an admin' })
            }
        } catch (error) {
            console.log(error)
        }
    },
    modifyAWorker: async (req, res) => {
        let id = req.params.id
        let worker = req.body
        let update
        try {
            if (req.user.admin) {

                update = await Worker.findOneAndUpdate({ _id: id }, worker, { new: true })
                res.json({ success: true, update })
            } else {
                res.json({ success: false, error: 'Unauthorized User, you must be an admin' })
            }
        } catch (error) {
            console.log(error)
            res.json({ success: false, error })
        }
    },

};
module.exports = workerControllers;