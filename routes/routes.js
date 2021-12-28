require("../config/database")
const Router = require('express').Router();
const passport = require('../config/passport');
const validator = require('../config/validator');
const servicesControllers = require('../controllers/servicesControllers')
const workerControllers = require('../controllers/workerControllers')
const userControllers = require('../controllers/userControllers')

const { addService, getServices } = servicesControllers
const { addWorker } = workerControllers
const { addUser, signin, authUser } = userControllers

Router.route('/services')
    .post(addService)
    .get(getServices)
    
Router.route('/workers')
    .post(addWorker)
Router.route('/users/signup')
    .post(validator, addUser)

Router.route('/users/signin')
    .post(signin)
Router.route('/user/auth')
    .get(passport.authenticate('jwt', { session: false }), authUser)

// admin handler users
Router.route('/admin/users')
    .get(passport.authenticate('jwt', { session: false }), getUsers)
Router.route('/admin/user/:id')
    .put(passport.authenticate('jwt', { session: false }), updateUser)
    .delete(passport.authenticate('jwt', { session: false }), deleteUser)

// admin handler services
Router.route('/admin/services')
    .post(passport.authenticate('jwt', { session: false }), addService)
    .get(passport.authenticate('jwt', { session: false }), getServices)
Router.route('/admin/services/:id')
    .delete(passport.authenticate('jwt', { session: false }), deleteService)

// admin handler workers
Router.route('/admin/workers')
    .post(passport.authenticate('jwt', { session: false }), addWorker)
    .get(passport.authenticate('jwt', { session: false }), getWorkers)
Router.route('/admin/workers/:id')
    .delete(passport.authenticate('jwt', { session: false }), deleteWorker)

Router.route('/authUser').get(passport.authenticate('jwt', {session: false}), authUser)    

module.exports = Router