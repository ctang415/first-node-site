var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My First Express Webpage!'});
});

router.get('/about', (req, res, next) => {
  res.render('about', { title: 'About page' } )
})

router.get('/contact', (req, res, next) => {
  res.render('contact', {title: 'Contact page' } )
})

module.exports = router;
