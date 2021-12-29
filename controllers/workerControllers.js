const Worker = require('../models/worker');

const workerControllers = {
    addWorker: async (req, res) => {
        let { name, lastName, email, img, address, services, schedule, reviews } = req.body;
        try {
            const workerExist = await Worker.findOne({ email })
            if (workerExist) {
                res.json({ success: false, error: "The email user is already in use", response: null })

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
                await newWorker.save()
                res.json({ success: true, response: { newWorker }, error: null })
            }
        } catch (error) {
            res.json({ success: false, response: null, error: error })
        }
    },
    deleteWorker: async (req, res) => {
        const id = req.params.id
        let worker
        try {
            await Worker.findOneAndDelete({ _id: id })
        } catch (error) {
            console.log(error)
        }
        res.json({ respuesta: worker })
    },
    modifyAWorker: async (req, res) => {
        let id = req.params.id
        let worker = req.body
        let update
        try {
            update = await Worker.findOneAndUpdate({ _id: id }, worker, { new: true })
        } catch (error) {
            console.log(error)
        }
        res.json({ success: update ? true : false })
    },
    getWorkersByService: async(req, res) => {
        const id = req.params.id
        let workers;
        try{
            workers = await Worker.find({services: id})
        }catch(err){
            console.log(err);
        }
        res.json({response: workers, success: true})
    }
};
module.exports = workerControllers;