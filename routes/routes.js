const Router = require('express').Router();
const passport = require('../config/passport');
const validator = require('../config/validator');
const servicesControllers = require('../controllers/servicesControllers')
const workerControllers = require('../controllers/workerControllers')
const userControllers = require('../controllers/userControllers')

const { addService, getServices, deleteService, updateService } = servicesControllers
const { addWorker, getWorkers, deleteWorker, modifyWorker } = workerControllers
const { addUser, getUsers, signin, authUser, deleteUser, updateUser } = userControllers


// service handler
Router.route('/services')
    .get(getServices)
// worker handler
Router.route('/workers')
    .get(getWorkers)
// user handler
Router.route('/user/signup')
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
    .get(passport.authenticate('jwt', { session: false }), getServices)
    .post(passport.authenticate('jwt', { session: false }), addService)
Router.route('/admin/service/:id')
    .delete(passport.authenticate('jwt', { session: false }), deleteService)
    .put(passport.authenticate('jwt', { session: false }), updateService)

// admin handler workers
Router.route('/admin/workers')
    .post(passport.authenticate('jwt', { session: false }), addWorker)
Router.route('/admin/worker/:id')
    .delete(passport.authenticate('jwt', { session: false }), deleteWorker)
    .put(passport.authenticate('jwt', { session: false }), modifyWorker)
<<<<<<< HEAD

Router.route('/authUser').get(passport.authenticate('jwt', {session: false}), authUser)    
=======
>>>>>>> a7b77a2d32bb74a819ef768ecf63f15ca51a07de

module.exports = Router