require("../config/database")
const Router = require('express').Router();
const passport = require('../config/passport');

const servicesControllers = require('../controllers/servicesControllers')
const workerControllers = require('../controllers/workerControllers')
const userControllers = require('../controllers/userControllers')

const { addService } = servicesControllers
const { addWorker } = workerControllers
const { addUser, signin } = userControllers

Router.route('/services')
    .post(addService)
Router.route('/workers')
    .post(addWorker)
Router.route('/users')
    .post(addUser)

Router.route('/user')
    .post(signin)

module.exports = Router