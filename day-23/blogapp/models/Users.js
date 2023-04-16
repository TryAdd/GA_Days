const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    firstName: {type:String, required:true},
   lastName: {type:String, required:true},
    emailAddress: {type:String, required:true},
    password: {type:String, required:true},
},{
    timestamps:true
})


userSchema.methods.verifyPassword = function(password){
    console.log('Verifying', password)
    console.log(this.password)
    return bcrypt.compareSync(password, this.password)
}

const User = mongoose.model('User',userSchema)

module.exports = User