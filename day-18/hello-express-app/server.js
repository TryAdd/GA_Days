const express = require('express')
const { get } = require('http')
const path = require('path')

const todoDb = require('./data/todo-db')

const app = express()

const port = 3000

//configure the app (app.set)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
// console.log(path.join(__dirname, 'views'))// this is how u see wen is take folder l2nh lo 36eth a7d thane bysht3'l bs lazm same path bs otherwise ma bysht3'l so yeah
//mount middleware ast5dmna (app.use)
app.get('/', function(req, res){
    res.redirect('/home')
})
app.get('/home', function(req, res){
    // res.send('<h1>Hello beautiful</h1>')
    res.render('home')
})

app.get('/todos', function(req, res){
    res.render('todos/index',{
        todos: todoDb.getAll()
    })
})

app.get('/cars', function(req, res){
    res.send('here is a list of cars: ')
})

app.post('/cars', function(req, res){
// res.redirect() //dh ywdek mkan thane
// res.render() //its gonna ywdek l render idk wsh dh ltr chofh

res.send('Thanks for new car!')

})
app.listen(port, function(){
    console.log('Hi dude')
})


