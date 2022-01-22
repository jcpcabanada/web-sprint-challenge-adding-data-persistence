const db = require('../../data/dbConfig')

const getAllResources = () => {
    return db('resources')

}

const create = newTable => {
    return db('resources')
        .insert(newTable)
        .then(([resource_id]) => {
            return db('resources').where('resource_id', resource_id).first()
        })
};


module.exports = {
    getAllResources,
    create
}