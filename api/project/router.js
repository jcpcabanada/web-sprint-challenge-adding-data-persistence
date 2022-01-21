const router = require('express').Router()
const Project = require('./model')

router.get('/', (req, res, next) => {
    Project.getAllPj()
        .then(resp => {
            res.json(resp)
                .catch(next)
        })
})

router.post('/', (req, res, next) => {
    res.json('post')
})


    module.exports = router