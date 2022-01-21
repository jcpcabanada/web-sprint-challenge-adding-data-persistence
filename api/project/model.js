const db = require('../../data/dbConfig')

const getAllPj = async () => {
    const allPj = await db('projects')
    const pjResp = await allPj.map(pj => {
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
    return pjResp


}

const create = async (newPj) => {
    const [project_id] = await db('projects').insert(newPj)
    return db('projects').where('project_id', project_id)

}

module.exports = {
    getAllPj,
    create
}