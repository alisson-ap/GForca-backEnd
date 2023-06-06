const tasksModel = require('../models/tasksModel');

const getAll = (req, res)=>{
    const task = tasksModel.getAll();
    return res.send(task);
};

const createTask = (req,res)=>{
    req.session.valor = 'Olá mundo';
    // const createTask = tasksModel.createTask(req.body);
    // return res.status(201).json(createTask)
    return res.send("Valor inserido na sessão");
};

module.exports = {
    getAll,
    createTask,
};