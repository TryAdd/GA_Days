var express = require('express');
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
// dh kan mktob mn gbl now bnktb malna :)

const todosControl = require('../controllers/todos')

router.get('/', todosControl.index)
router.get('/:id', todosControl.show)




module.exports = router;
