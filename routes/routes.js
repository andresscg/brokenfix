const Router = require('express').Router();
const passport = require('../config/passport');

const servicesControllers = require('../controllers/servicesControllers')
const workerControllers = require('../controllers/workerControllers')
const { addService } = servicesControllers
const { addWorker } = workerControllers

Router.route('/services')
    .post(addService)
Router.route('/workers')
    .post(addWorker)

module.exports = Router