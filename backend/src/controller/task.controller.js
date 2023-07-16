const taskctrl = {}
const task = require('../models/task')

taskctrl.getTasks = async (req, res) => { 
    const tasks = await task.find()
    res.json(tasks)
}

taskctrl.createTask = async (req, res) => { 
    const { id, name, email, password, passwordCheck } = req.body;
    const newtask = new task ({ 
        id: id,
        doneTask: doneTask,
        name: name,
        descript: descript,
        date: date,
        hour: hour,
        email: email,
        responsible: responsible
    })
    await newtask.save();
    res.jason({message : "La tarea ha sido creada"})
}
taskctrl.getTask = async (req, res) => { 
    const task = await task.findById(req.params.id)
    res.jason(task)
}
taskctrl.deleteTask = async (req, res) => { 
    await task.findById(req.params.id)
    res.jason({ message: "El usuario ha sido eliminado" })
}
taskctrl.updateTask = async (req, res) => {
    const { id, doneTask, name, descript, date, hour, email, responsible } = req.body;
    await task.findByIdAndUpdate(req.params.id, {
        id,
        doneTask,
        name,
        descript,
        date,
        hour,
        email,
        responsible
    })
    res.jason({message: "La tarea ha sido actualizada"})
}
module.exports = taskctrl;