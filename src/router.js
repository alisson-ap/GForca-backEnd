const express = require('express');
const tasksController = require('./controllers/taskController');
const userController = require('./controllers/userController');
const nivelController = require('./controllers/nivelController');
const partidaController = require('./controllers/partidaController');
const session = require('express-session');

const router = express.Router();

router.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 30,
    sameSite: true,
  }
}));

router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksController.createTask);

//User
router.post('/user', userController.userSession);
router.get('/user', userController.getUser);

//Nivel
router.post('/nivel', nivelController.postNivel);
router.get('/nivel', nivelController.getNivel);

//partida
router.post('/partida', partidaController.postPartida);
router.get('/partida/:id', partidaController.getPartidas)


module.exports = router;