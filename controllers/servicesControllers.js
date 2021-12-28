const Service = require("../models/Service");

const servicesControllers = {
    addService: async (req, res) => {
        const servicesBody = req.body
        let service
        try {
            service = await Service(servicesBody).save()
            res.json({ success: true, service })
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
    getServiceById: async (req, res) => {
        const id = req.params.id
        try {
            const service = await Service.findOne({ _id: id })
            res.json({ success: true, service })
        } catch (error) {
            res.json({ success: false, error })
        }
    },
    updateServiceById: async (req, res) => {
        const bodyService = req.body
        const id = req.params.id
        let updatedService
        try {
            updatedService = await Service.getOneAndUpdate({ _id: id }, bodyService, { new: true })
            res.json({ success: true, updatedService })
        } catch (error) {
            res.json({ success: false, error })
        }
    },
    deleteService: async (req, res) => {
        const id = req.params.id
        try {
            await Service.getOneAndDelete({ _id: id })
            res.json({ success: true, updatedService })
        } catch (error) {
            res.json({ success: false, error })
        }
    }
  },
module.exports = servicesControllers;
