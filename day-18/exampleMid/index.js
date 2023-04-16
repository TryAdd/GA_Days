const express = require("express");
const app = express()
const port = 3000

app.use(function(req, res, next){
    console.log('hello Monkey')
})

app.listen(port, function(){
    console.log('Express is listening on port: ' + port)
})