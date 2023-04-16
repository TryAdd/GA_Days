const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
    title: String,
    content: String,
    isPublished: Boolean,
    totalWords: Number,
    author: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }]
},
{
    timestamps: true
})


// model
const Article = mongoose.model("Article",articleSchema)


// export
module.exports = Article