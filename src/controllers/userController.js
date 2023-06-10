const userModel = require('../models/userModel')

const userSession = (req, res) => {
    const id = userModel.getId(req.body);
    console.log("id do usuário no post:" + id);
    req.session.userId = id;
    console.log("Id na sessão guardada:" + id);
    return res.status(201).send('Session Created');
};

const getUser = (req, res) =>{
    console.log("id usuário:" + req.session.userId);
    const id = userModel.getUser(req.session.userId);
    console.log(id);
    return res.status(200).json(id);
}

module.exports = { userSession, getUser};