const router = require('express').Router()
const Project = require('./model')

router.get('/', async (req, res, next) => {
     try {
         const getAllPj = await Project.getAllPj()
         res.json(getAllPj)
     } catch (err) {
         next(err)
     }
})

router.post('/', async (req, res, next) => {

    Project.create(req.body)
        .then(newPj => {
            if (newPj.project_completed === 0) {
                res.json({
                    project_name: newPj.project_name,
                    project_description: newPj.project_description,
                    project_id: newPj.project_id,
                    project_completed: false
                })
            } else {
                res.json({
                    project_name: newPj.project_name,
                    project_description: newPj.project_description,
                    project_id: newPj.project_id,
                    project_completed: true
                })
            }
            res.status(201).json(newPj)
        })
        .catch(next)
})




    module.exports = router