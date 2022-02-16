const express = require('express');
const app = express();
const cors = require('cors')

const todosController = require('./controllers/todoController');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/todos', todosController);

module.exports = app;