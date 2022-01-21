const db = require('../../data/dbConfig')

const getAllPj = () => {
    return db('projects')

}

const createPj = async (newPj) => {
    const [project_id] = await db('projects').insert(newPj)
    return db('projects').where('project_id', project_id)

}

module.exports = {
    getAllPj,
    createPj
}