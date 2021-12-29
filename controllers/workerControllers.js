const Worker = require('../models/worker');

const workerControllers = {
    addWorker: async (req, res) => {
        let { name, lastName, email, img, address, services, schedule, reviews } = req.body;
        try {
            const workerExist = await Worker.findOne({ email })
            if (workerExist) {
                res.json({ success: false, error: "The user email is already in use", response: null })

            } else {
                const newWorker = new Worker({
                    name,
                    lastName,
                    email,
                    img,
                    address,
                    services,
                    schedule,
                    reviews
                })
                if (req.user.admin) {
                    await newWorker.save()
                    res.json({ success: true, response: { newWorker }, error: null })
                } else {
                    res.json({ success: false, error: 'Unauthorized User, you must be an admin' })
                }
            }
        } catch (error) {
            res.json({ success: false, response: null, error: error })
        }
    },
    getWorkers: async (req, res) => {

        try {
            const workers = await Worker.find()
            res.json({ success: true, workers })

        } catch (error) {
            res.json({ success: false, response: null, error: error })
        }
    },
    deleteWorker: async (req, res) => {
        const id = req.params.id
        console.log('aqui');
        try {
            if (req.user.admin) {
                await Worker.findOneAndDelete({ _id: id })
                res.json({ success: true, msg: 'Worker deleted successfully' })

            } else {
                res.json({ success: false, error: 'Unauthorized User, you must be an admin' })
            }
        } catch (error) {
            console.log(error)
        }
    },
    modifyWorker: async (req, res) => {
        let id = req.params.id
        let workerBody = req.body
        let updateWorker
        try {
            if (req.user.admin) {

                updateWorker = await Worker.findOneAndUpdate({ _id: id }, workerBody, { new: true })
                res.json({ success: true, updateWorker })
            } else {
                res.json({ success: false, error: 'Unauthorized User, you must be an admin' })
            }
        } catch (error) {
            console.log(error)
            res.json({ success: false, error })
        }
    },
    getWorkersByService: async(req, res) => {
        const id = req.params.id
        let workers;
        try{
            workers = await Worker.find({services: id}).populate('services').populate('reviews.user')
        }catch(err){
            console.log(err);
        }
        res.json({response: workers, success: true})
    },
    rateAndComment: async (req, res) => {
        const rate = req.body.review.rating
        const text = req.body.review.comment
        try {
            if (req.user) {
                const worker = await Worker.findOne({ _id: req.params.id })
                if (worker.reviews.findIndex(workerReview => workerReview.user.toString() === req.user._id.toString()) !== -1) {
                    const updateReviewIndex = worker.reviews.findIndex(workerReview => workerReview.user.toString() === req.user._id.toString())
                    const newReviewObj = {
                        comment: !text ? worker.reviews[updateReviewIndex].comment : text,
                        rating: !rate ? worker.reviews[updateReviewIndex].rating : rate,
                        user: req.user._id
                    }
                    worker.reviews[updateReviewIndex] = newReviewObj
                    await worker.save()
                    res.json({ msg: 'You already reviewed this worker, your review will be updated!', reviews: worker.reviews})
                } else {

                    const newReviewObj = {
                        comment: text,
                        rating: rate,
                        user: req.user._id
                    }
                    worker.reviews.unshift(newReviewObj)

                    await worker.save()
                    res.json({ msg: 'Review posted, thank you!', reviews: worker.reviews })
                }
            } else {
                res.json({ success: false, error: 'Unauthorized User, you must be login' })
            }
        } catch (error) {
            console.log(error)
            res.json({ success: false, error })
        }
    },
    deleteReview: async (req, res) => {
        const id = req.params.id
        const reviewId = req.params.reviewId
        try {
            if (req.user) {
                const worker = await Worker.findOne({ _id: id })
                const deleteReviewIndex = worker.reviews.findIndex(workerReview => workerReview._id === reviewId)
                worker.reviews.splice(deleteReviewIndex, 1)
                await worker.save()
                res.json({ success: true, msg: 'Review deleted successfully', reviews: worker.reviews })

            } else {
                res.json({ success: false, error: 'Unauthorized User, you must be login' })
            }
        } catch (error) {
            console.log(error)
        }
    },

};
module.exports = workerControllers;