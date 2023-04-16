const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
    title: String,
    content: String,
    author: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }],

},
{
    timestamp: true
})

const Article = mongoose.model('Article', articleSchema)
module.exports = {Article}

