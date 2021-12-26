require("../config/database")
const Router = require('express').Router();
const passport = require('../config/passport');
const userControllers = require ('../controllers/userControllers');

const servicesControllers = require('../controllers/servicesControllers')

const { addService } = servicesControllers
const { newUser} = userControllers;


Router.route('/services')
    .post(addService)

Router.route('/user')
    .post(newUser)

module.exports = Router