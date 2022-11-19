const express = require('express');

const motoController = require('../controllers/motoController');

const router = express.Router();

router.get('/tasks', 
    motoController.getTasks,
    (req, res) => res.status(200).json(res.locals)
)

router.get('/bike',
    motoController.getBikes,
    (req, res) => res.status(200).json(res.locals)
)

router.get('/',
    motoController.getTasks,
    motoController.getBikes,
    (req, res) => res.status(200).json(res.locals)
);

router.post('/',
    motoController.addTask,
    (req, res) => res.status(200).json(`successfully added ${res.locals.task}`)
);

router.delete('/',
    motoController.deleteTask,
    (req, res) => res.status(200).json(`Successfully deleted ${res.locals.task}`)
)

router.patch('/',
    motoController.editTask,
    (req, res) => res.status(200).json('Successfully updated task')
)

router.post('/bike',
    motoController.addBike,
    (req, res) => res.status(200).json(res.locals.bike)
)

router.delete('/bike',
    motoController.deleteBike,
    (req, res) => res.status(200).json(`Successfully deleted ${res.locals.bike}`)
)

router.get('/all',
    motoController.getTasks,
    motoController.getBikes,
    (req, res) => res.status(200).json(res.locals)
)

module.exports = router;