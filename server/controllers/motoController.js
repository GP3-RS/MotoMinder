const models = require('../models/motoModels')

const motoController = {};

motoController.addTask = async (req, res, next) => {
    let { maint, task, cost, moto_id } = req.body
    if (cost === undefined) cost = 0;
    cost = Number(cost);
    try {
        let returnedTask = await models.Task.create({
            maint: maint,
            task: task,
            cost: cost,
            moto_id: moto_id,
        })
        res.locals.task = returnedTask;
        return next();
    }
    catch (err) {
        next({log: 'error in middleware addTask', message: 'error in addTask'})
    }
}

motoController.getTasks = (req, res, next) => {
    models.Task.find({})
        .exec()
        .then(data => {
            res.locals.tasks = data;
            return next();
        })
        .catch(err => next({log: 'error in middleware getTasks', message: 'error in getTasks'}))
}

motoController.deleteTask = (req, res, next) => {
    const id = req.body.id;
    models.Task.findOneAndDelete({_id: id})
        .exec()
        .then(data => {
            res.locals.task = data.task;
            return next();
        })
        .catch(err => next({log: "error in middleware deleteTask", message: 'error in middleware deleteTask'}))
}

motoController.editTask = (req, res, next) => {
    const { id, done, newTask } = req.body;
    if (newTask !== undefined) {
        const { id, newTask } = req.body;
        models.Task.updateOne({_id: id}, {
            task: newTask
        })
            .exec()
            .then(data => {
                return next()})
            .catch(err => next({log: "error in middleware editTask", message: "error in middleware editTask"}))
    }
    if (done === false || done === true) {
        models.Task.updateOne({_id: id}, {
            done: done
        })
            .exec()
            .then(data => {
                return next()})
            .catch(err => next({log: "error in middleware editTask", message: "error in middleware editTask"}))
    }
}

motoController.getBikes = (req, res, next) => {
    models.Moto.find({})
        .exec()
        .then(data => {
            res.locals.bikes = data;
            return next();
        })
        .catch(err => next({log: 'error in middleware getBikes', message: 'error in getMoto'}))
}

motoController.addBike = async (req, res, next) => {
    let { year, make, model } = req.body
    year = Number(year)
    try {
        let returnedMoto = await models.Moto.create({
            year: year,
            make: make,
            model: model,
        })
        res.locals.bike = returnedMoto;
        return next()
    }
    catch(err) {
        next({log: 'error in middleware addBike', message: 'error in addBike'})}
}

motoController.deleteBike = (req, res, next) => {
    const id = req.body.id;
    models.Moto.findOneAndDelete({_id: id})
        .exec()
        .then(bike => res.locals.bike = bike)
        .catch(err => next({log: 'error in middleware deletBike', message: 'error in middleware deleteBike'}))
    models.Task.remove({moto_id: id})
        .exec()
        .catch(err => next({log: 'error in middleware deletBike', message: 'error in middleware deleteBike'}))
}



module.exports = motoController;
    