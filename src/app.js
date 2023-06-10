const express = require('express');
const cors = require('cors');
const router = require('./router');
const session = require('express-session');

const app = express();

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 30,
        sameSite: true,
    }
}));

app.use(express.json());
app.use(cors());
app.use(router);

module.exports = app;