const express = require('express')
const app = express()
const port = 3000


app.get('/', function(req, res){
    console.log('You got a request')
    res.status(200).json("HI monkey")
})

app.get('/hi',function(req, res){
    // console.log('hello doggy :) ')
    res.status(200).json('hello doggy :)')
})

// app.get('/cars', function(req, res){
//     console.log(req.query)
//     res.sendStatus(200)
// })

app.get('/cars', function(req, res){
    console.log(req.query)
    const make = req.query.make
    const color = req.query.color
    let speed = req.query.speed
    if(!speed){
        speed=0
    }
    console.log(make, color, speed)
    res.sendStatus(200)
})

const exampleMid = function(req, res, next){
    const uppercaseName = req.porams.name.toUpperCase()
    // res.sendStatus.next()
    next()
}

app.get('/:name', function(req, res, next){
    // console.log(req.params)
    exampleMid(req, res, next)
    res.status(200).json(`hello ${req.params.name}`)
})

// app.get('/food/:foodName', function(req, res){
//     // console.log(req.params)
//     res.status(200).json(`Your food is a  ${req.params.foodName}`)
// })

app.get('/food/:foodName/:foodType', function(req, res){
    res.status(200).json(`your food is a ${req.params.foodName} and it's type is ${req.params.foodType}`)
})


app.listen(port,function(){
    console.log(`Express is listening on port ${port}`)
})


