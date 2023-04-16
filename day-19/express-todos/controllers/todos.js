const Todo = require('../models/todo')



function index(req, res){
    res.render('todos/index', {
        todos: Todo.getAll(),
        title: 'All To-Do Items'

    })
}

function show(req, res){
    res.render('todos/show',{
        todo: Todo.getOne(req.params.id),
        title: 'Single To-Do Details'
    })
}

module.exports = {
    index,
    show
}

