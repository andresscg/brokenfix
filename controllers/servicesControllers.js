
const Service = require('../models/Service');

const servicesControllers = {
    addService: async (req, res) => {
        const servicesBody = req.body
        let service
        try {
            service = await Service(servicesBody).save()
            res.json({ succes: true, service })
        } catch (error) {
            res.json({ succes: false, error })
        }
    },
    getServices: async (req, res) => {
        try {
            const services = await Service.find()
            res.json({ succes: true, services })
        } catch (error) {
            res.json({ succes: false, error })
        }
    },
    getServiceById: async (req, res) => {
        const id = req.params.id
        try {
            const service = await Service.findOne({ _id: id })
            res.json({ succes: true, service })
        } catch (error) {
            res.json({ succes: false, error })
        }
    },
    updateServiceById: async (req, res) => {
        const bodyService = req.body
        const id = req.params.id
        let updatedService
        try {
            updatedService = await Service.getOneAndUpdate({ _id: id }, bodyService, { new: true })
            res.json({ succes: true, updatedService })
        } catch (error) {
            res.json({ succes: false, error })
        }
    },
    deleteService: async (req, res) => {
        const id = req.params.id
        try {
            await Service.getOneAndDelete({ _id: id })
            res.json({ succes: true, updatedService })
        } catch (error) {
            res.json({ succes: false, error })
        }
    }
}
module.exports = servicesControllers;
