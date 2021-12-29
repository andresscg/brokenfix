const Service = require("../models/Service");

const servicesControllers = {
    addService: async (req, res) => {
        const servicesBody = req.body
        let service
        try {
            if (req.user.admin) {

                service = await Service(servicesBody).save()
                res.json({ succes: true, service })
            } else {
                res.json({ success: false, error: 'Unauthorized User, you must be an admin' })
            }
        } catch (error) {
            res.json({ success: false, error })
        }
    },
    getServices: async (req, res) => {
        try {


            const services = await Service.find()
            res.json({ success: true, services })


        } catch (error) {
            res.json({ success: false, error })
        }
    },
    deleteService: async (req, res) => {
        const id = req.params.id
        try {
            if (req.user.admin) {
                await Service.findOneAndDelete({ _id: id })
                res.json({ succes: true, msg: 'Service deleted successfully' })

            } else {
                res.json({ success: false, error: 'Unauthorized User, you must be admin' })
            }
        } catch (error) {
            console.log(error);
            res.json({ succes: false, })
        }
    },
    getServiceById: async (req, res) => {
        const id = req.params.id
        try {
            if (req.user.admin) {

                const service = await Service.findOne({ _id: id })
                res.json({ succes: true, service })
            } else {
                res.json({ success: false, error: 'Unauthorized User, you must be admin' })
            }
        } catch (error) {
            res.json({ success: false, error })
        }
    },
    updateService: async (req, res) => {
        const bodyService = req.body
        const id = req.params.id
        let updatedService
        try {
            if (req.user.admin) {
                updatedService = await Service.findOneAndUpdate({ _id: id }, bodyService, { new: true })
                res.json({ succes: true, updatedService })
            } else {
                res.json({ success: false, error: 'Unauthorized User, you must be admin' })
            }
        } catch (error) {
            res.json({ success: false, error })
        }
    },
}
module.exports = servicesControllers;
