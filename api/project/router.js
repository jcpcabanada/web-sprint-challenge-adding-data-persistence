const router = require('express').Router()
const Project = require('./model')

router.get('/', async (req, res, next) => {
     try{
         const getAllPj = await Project.getAllPj()
         res.json(getAllPj)
     } catch (err) {
         next(err)
     }
})

router.post('/', async (req, res, next) => {
    try {
        const newPj = await Project.create(req.body)
        res.status(201).json(newPj)
    } catch (err){
        next(err)
    }
})


    module.exports = router