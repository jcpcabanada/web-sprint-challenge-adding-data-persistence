const db = require('../../data/dbConfig')

const getAllPj = async () => {
    const allPj = await db('projects')
    return allPj.map(pj => {
        if (pj.project_completed === 0) {
            return {
                project_id: pj.project_id,
                project_name: pj.project_name,
                project_description: pj.project_description,
                project_completed: false
            }

        } else {
            return {
                project_id: pj.project_id,
                project_name: pj.project_name,
                project_description: pj.project_description,
                project_completed: true
            }
        }
    })
}

const create = newProj => {
    return  db('projects')
        .insert(newProj)
        .then(([project_id]) => {
            return  db('projects').where('project_id', project_id).first()

        })
};


module.exports = {
    getAllPj,
    create
}