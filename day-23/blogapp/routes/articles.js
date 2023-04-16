const express = require('express')
const router = express.Router()

let methodOverride = require('method-override')
router.use(methodOverride('_method'))

router.use(express.urlencoded({extended:true}))


const articaleCntrl = require('../controllers/articles')
const isLoggedIn = require('../lib/isLoggedIn')
// calling api
router.get("/article/add",isLoggedIn, articaleCntrl.article_creat_get)
router.post("/article/add", articaleCntrl.article_create_post)
router.get("/article/index",isLoggedIn, articaleCntrl.artical_index_get)
router.get("/article/detail",articaleCntrl.artical_show_get)
router.delete("/article/delete",articaleCntrl.artical_delete_get)


module.exports = router

