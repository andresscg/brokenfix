const Router = require('express').Router();
const passport = require('../config/passport');

const servicesControllers = require('../controllers/servicesControllers')

const { addService } = servicesControllers

Router.route('/services')
    .post(addService)

module.exports = Router