var express = require('express');
var router = express.Router();
const task = []
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/create', function(req, res, next) {
  res.render('create');
});


router.post('/create', function(req, res, next) {
  task.push(req.body)
  res.redirect("/pending")
});

router.get('/delete/:index', function(req, res, next) {
 task.splice(req.params.index, 1)
 res.redirect("/pending")
});

router.get('/update/:index', function(req, res, next) {
 const book = task[req.params.index]
 res.render("update", {books: book, index:req.params.index})
 });

 router.post('/update/:index', function(req, res, next) {
 task[req.params.index]= req.body
 res.redirect("/pending")
  });

router.get('/pending', function(req, res, next) {
  res.render('pending', {Task: task});
});


router.get('/about', function(req, res, next) {
  res.render('about');
});



module.exports = router;
