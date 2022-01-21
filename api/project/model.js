const db = require('../../data/dbConfig')

const getAllPj = async () => {
    const projects = await db('projects')
    console.log("working ")
}

module.exports = {
    getAllPj
}