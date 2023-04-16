const mongoose = require('mongoose')
const dbURI = process.env.DATABASE_URI

mongoose.connect(dbURI, {
    useNewUrlParser: true,
  useUnifiedTopology: true
})

// ds shortcut 78 mangodb mongoose.connection bdl ma tktb sh6olha XD
const db = mongoose.connection

// its like event lisner lma its connected ygol run this function
// ngdr ngol 3n error b3d aw disconnect w open bs a7na now nst5dm connect so nchof al connection
db.on('connected', function(){
    console.log(`Connected to MongoDB at: ${db.host} : ${db.port}`)
})

