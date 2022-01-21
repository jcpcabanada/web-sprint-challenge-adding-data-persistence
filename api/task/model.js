const db = require('../../data/dbConfig')

const getAllTasks = async () => {
    const tasks = await db('tasks as t')
        .leftJoin('projects as p', 'p.project_id', 't.project_id')
        .select('t.*', 'p.*')

    const taskResp = tasks.map(task => {
        if (task.task_completed === 0) {
            return {
                task_id: task.task_id,
                task_description: task.task_description,
                task_notes: task.task_notes,
                task_completed: false,
                project_name: task.project_name,
                project_description: task.project_description
            }
        } else {
            return {
                task_id: task.task_id,
                task_description: task.task_description,
                task_notes: task.task_notes,
                task_completed: true,
                project_name: task.project_name,
                project_description: task.project_description
            }
        }
    })
    return taskResp
}


    const create = async (newTask) => {
        const { project_id } = newTask
        const task_id = await db('tasks').insert(newTask)
        const project = await db('projects').where('project_id', project_id).first()
        const tasks = await db('tasks').where('task_id', task_id).first()

        if (tasks.task_completed === 0) {
            return {
                task_id: tasks.task_id,
                task_description: tasks.task_description,
                task_notes: tasks.task_notes,
                task_completed: false,
                project_id: project.project_id
            }
        } else {
            return {
                task_id: tasks.task_id,
                task_description: tasks.task_description,
                task_notes: tasks.task_notes,
                task_completed: true,
                project_id: project.project_id
            }
        }

    }

    module.exports = {
        getAllTasks,
        create
    }