const db = require('../../data/dbConfig')

const getAllResources = () => {
    return db('resources')

}

const create = (newRes) => {
    return db('resources').insert(newRes)
        .then(([resource_id]) => {
            return db('projects').where('resource_id', resource_id).first()
        })

}

module.exports = {
    getAllResources,
    create
}