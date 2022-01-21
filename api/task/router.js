const router = require('express').Router()
const Task = require('./model')

router.get('/', (req, res, next) => {
    Task.getAllTasks()
        .then(resp => {
            res.json(resp)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Task.create(req.body)
        .then(newTask => {
            res.status(201).json(newTask)
        }) .catch(next)
})

module.exports = router