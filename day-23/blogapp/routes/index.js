const express = require('express')


const router = express.Router()


const indexCntrl = require("../controllers/index")

// calling api
router.get("/", indexCntrl.index_get)


module.exports = router