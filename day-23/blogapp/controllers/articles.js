// grap api

const Article = require("../models/Article")
const Author = require("../models/Author")


// http get to load artical form
exports.article_creat_get = (req, res)=>{
    Author.find()
    .then((authors)=>{
        res.render('article/add',{authors})
    })
    .catch(err =>{
        console.log(err)
    })
}

exports.article_create_post = (req, res)=>{
    console.log(req.body)
    let article = new Article(req.body)

    article.save()
    .then(() =>{
        res.redirect("/article/index")
    })
    .catch((err)=>{
        console.log(err)
        res.send('pls dont!!')
    })

}

exports.artical_index_get = (req,res)=>{
    Article.find().populate('author')
    .then(articles =>{
        // console.log(articles[0].author)
        res.render("article/index", {articles})
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.artical_show_get = (req,res)=>{
    Article.findById(req.query.id)
    .then(article=>{
        res.render("article/detail",{article})
    })
    .catch(err=>{
        console.log(err)
    })
}


exports.artical_delete_get = (req,res)=>{
    Article.findByIdAndDelete(req.query.id)
    .then(() =>{
        res.redirect("/article/index")
    })
    .catch(err=>{
        console.log(err)
    })
}