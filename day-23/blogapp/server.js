const express = require('express')
const session  = require('express-session')
const passport = require('./lib/passportConfig')
const mongoose = require('mongoose')

const port = 4001

const app = express()

// app.use(express.('public'))
app.use(express.static(__dirname + "/public"));
// initilize express layouts 
const expressLayouts = require('express-ejs-layouts')

// look into views folder for a file with name layouts.ejs
app.use(expressLayouts)

//import routes 
const indexRoute = require('./routes/index')
const articleeRoute = require('./routes/articles')
const authorRoute = require('./routes/authors')
const authRoute = require('./routes/auth')

app.use(session({
    secret: 'supersecuresecret',
    saveUninitialized: true,
    resave: false,
    cookie:{maxAge: 604800} // tgdr tsw * a4a tbe y3ne mthln 3600*24 3shan y9er yom kaml
}))
app.use(passport.initialize())
app.use(passport.session())

//mount routes 
app.use('/', indexRoute)
app.use('/', articleeRoute)
app.use('/', authorRoute)
app.use('/',authRoute)


app.get('/a',(req,res)=>{
    res.render('/home/another')
})

app.listen(port, () =>{
    console.log(`hello ${port}`)
})

mongoose.set('strictQuery', false)
// ynade alindex fe alview
app.set('view engine','ejs')

mongoose.connect('mongodb+srv://TryAdd:21212121@tryadd.jexvugk.mongodb.net/blogapp?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    ()=> {
        console.log('MongoDB Connected')
    })


    // module.exports = passport



