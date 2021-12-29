require("../config/database")
const Router = require('express').Router();
const passport = require('../config/passport');
const validator = require('../config/validator');

const servicesControllers = require('../controllers/servicesControllers')
const workerControllers = require('../controllers/workerControllers')
const userControllers = require('../controllers/userControllers')

const { addService, getServices } = servicesControllers
const { addWorker, getWorkersByService } = workerControllers
const { addUser, signin, authUser } = userControllers

Router.route('/services')
    .post(addService)
    .get(getServices)
    
Router.route('/workers')
    .post(addWorker)
Router.route('/users/signup')
    .post(validator, addUser)

Router.route('/workers/services/:id')
    .get(getWorkersByService)

Router.route('/users/signin')
    .post(signin)

Router.route('/authUser').get(passport.authenticate('jwt', {session: false}), authUser)    

module.exports = Router