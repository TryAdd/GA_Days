const Author = require('../models/Author')

exports.author_creat_get = (req, res)=>{
    res.render('author/add')
}

exports.author_creat_post = (req, res)=>{
    console.log(req.body)
    let author = new Author(req.body)

    author.save()
    .then(()=>{
        res.redirect('/author/index')
    })
    .catch((err)=>{
        console.log(err)
        res.send('pls check b4 submit :| ')
    })
}


exports.author_index_get = (req, res)=>{
    Author.find()
    .then(authors =>{
        res.render('author/index', {authors})
    })
    .catch((err)=>{
        console.log(err)
        res.send('pls check b4 submit :| ')

    })
}