const express = require('express');
const app = express();

const todosController = require('./controllers/todosControllers')

app.use('/api/todos', todosController);






module.exports = app