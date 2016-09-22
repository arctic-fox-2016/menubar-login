var express = require('express');
var router = express.Router();
let models = require('../models');
let helpers = require('../helpers/index')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index',{})
});

router.get('/about', function(req, res, next) {
    res.render('about',{})
});


router.post('/login', function(req, res){
  models.Users.find({
    where: {
      username: req.body.username,
      password: req.body.password
    }
  }).then( function(result) {
    if (result) {
      console.log(result.dataValues.role);
      req.session.username = result.dataValues.username
      req.session.role = result.dataValues.role
      res.redirect(`/${req.session.role}`)
    } else {
      req.session.loginerror = 'Username or password is wrong!'
      res.redirect('/')
    }
  })
})

router.get('/login', function(req, res) {
  res = helpers(res);
  res.render('login')
})

router.get('/admin', function(req, res) {
  res = helpers(res);
  console.log(req.session.role)
  if (req.session.role == 'admin') {
    res.render('admin',{username:req.session.username})
  } else {
    res.redirect('/')
  }
})

router.get('/user', function(req, res) {
  res = helpers(res);
  if (req.session.role == 'user') {
    res.render('user',{username: req.session.username})
  } else {
    res.redirect('/')
  }
})


router.get('/logout', function(req, res) {
  req.session.destroy(function(){
    res.redirect('/')
  })

})


module.exports = router;
