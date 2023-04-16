const mongoose = require('mongoose')

const authorSchema = mongoose.Schema({
    name: String,
    emailAddress: String,
    artical:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Artical'
    }]
},{
    timestamps: true
})

const Author = mongoose.model('Author', authorSchema)

module.exports = Author