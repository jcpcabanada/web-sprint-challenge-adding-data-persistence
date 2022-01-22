const router = require('express').Router()
const Resource = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const getAllRes = await Resource.getAllResources()
        res.json(getAllRes)
    } catch (err) {
        next(err)
    }
})

router.post('/', (req, res, next) => {
    Resource.create(req.body)
        .then(newRes => {
            res.status(201).json(newRes)
        })
        .catch(next)
});


module.exports = router