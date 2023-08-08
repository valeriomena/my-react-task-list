const Task = require('../models/task');

const taskctrl = {};

taskctrl.createTask = async (req, res) => { 
    const { doneTask, name, descript, date, email, hour, responsible } = req.body;
    const newtask = new Task ({ 
        doneTask: doneTask,
        name: name,
        descript: descript,
        date: date,
        hour: hour,
        email: email,
        responsible: responsible
    });
    await newtask.save();
    res.json({ message: "La tarea ha sido creada" });
};

taskctrl.getTasks = async (req, res) => { 
    const tasks = await Task.find();
    res.json(tasks);
};


taskctrl.getTask = async (req, res) => { 
    const task = await Task.findById(req.params.id);
    res.json(task);
};

taskctrl.deleteTask = async (req, res) => { 
    await Task.findByIdAndDelete(req.params.id); // Corregir aquí
    res.json({ message: "La tarea ha sido eliminada" }); // Corregir aquí
};

taskctrl.updateTask = async (req, res) => {
    const { id, doneTask, name, descript, date, hour, email, responsible } = req.body;
    await Task.findByIdAndUpdate(req.params.id, {
        id,
        doneTask,
        name,
        descript,
        date,
        hour,
        email,
        responsible
    });
    res.json({ message: "La tarea ha sido actualizada" });
};

module.exports = taskctrl;
