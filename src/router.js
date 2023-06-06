const express = require('express');
const tasksController = require('./controllers/taskController');
const userController = require('./controllers/userController');
const nivelController = require('./controllers/nivelController');
const session = require('express-session');

const router = express.Router();

router.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksController.createTask);

//User
router.post('/user', userController.userSession);

router.post('/nivel', nivelController.getNivel)

// router.get('/', (req,res)=>{
//   if(req.session.valor == null){
//     res.send("Sem valor na sessão")
//   }else{
//     res.send(req.session.valor)
//   }
// });

module.exports = router;