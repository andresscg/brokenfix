const Router = require('express').Router();
const passport = require('../config/passport');
const validator = require('../config/validator');
const servicesControllers = require('../controllers/servicesControllers')
const workerControllers = require('../controllers/workerControllers')
const userControllers = require('../controllers/userControllers')

const { addService, getServices, deleteService, updateService } = servicesControllers
const { addWorker, getWorkers, getWorkersByService, deleteWorker, modifyWorker, rateAndComment, deleteReview } = workerControllers
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

Router.route('/workers/services/:id')
    .get(getWorkersByService)

Router.route('/user/signin')
    .post(signin)
Router.route('/user/auth')
    .get(passport.authenticate('jwt', { session: false }), authUser)

Router.route('/worker/:id/review/:reviewId')
    .delete(passport.authenticate('jwt', { session: false }), deleteReview)


// rating handler
Router.route('/rate/worker/:id')
    .put(passport.authenticate('jwt', { session: false }), rateAndComment)


// admin handler users
Router.route('/admin/users')
    .get(passport.authenticate('jwt', { session: false }), getUsers)
Router.route('/admin/user/:id')
    .put(passport.authenticate('jwt', { session: false }), updateUser)
    .delete(passport.authenticate('jwt', { session: false }), deleteUser)

// admin handler services
Router.route('/admin/services')
    .post(passport.authenticate('jwt', { session: false }), addService)
Router.route('/admin/service/:id')
    .delete(passport.authenticate('jwt', { session: false }), deleteService)
// .put(passport.authenticate('jwt', { session: false }), updateService)

// admin handler workers
Router.route('/admin/workers')
    .post(passport.authenticate('jwt', { session: false }), addWorker)
Router.route('/admin/worker/:id')
    .delete(passport.authenticate('jwt', { session: false }), deleteWorker)
    .put(passport.authenticate('jwt', { session: false }), modifyWorker)

Router.route('/authUser').get(passport.authenticate('jwt', { session: false }), authUser)

module.exports = Router