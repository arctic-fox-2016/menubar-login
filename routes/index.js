var express = require('express');
var session = require('express-session')
var router = express.Router();
let models = require('../models');
let helpers = require('../helpers/index')


/* GET home page. */
router.get('/', function(req, res, next) {
  res = helpers(res);
  if (req.session.username) {
    res.render('index',{});
  } else {
    res.redirect('/login')
  }
});

router.post('/checklogin', function(req, res){
  console.log('masuk check login');
  models.Users.find({
    where: {
      username: req.body.username,
      password: req.body.password
    }
  }).then( function(result) {
    if (result.dataValues) {
      req.session.username = req.body.username
      req.session.role = result.role
      res.redirect(`/${req.session.role}`)
    } else {
      req.session.loginerror = 'Username or password is wrong!'
      res.redirect('/login')
    }
  })
})

router.get('/login', function(req, res) {
  res = helpers(res);
  res.render('login')
})

router.get('/superadmin', function(req, res) {
  res = helpers(res);
  if (req.session.role) {
    res.render('bar-role',{session:req.session})
  } else {
    res.redirect('/')
  }
})

router.get('/admin', function(req, res) {
  res = helpers(res);
  if (req.session.role == 'admin') {
    res.render('bar-role',{session:req.session})
  } else {
    res.redirect('/')
  }
})

router.get('/user', function(req, res) {
  res = helpers(res);
  if (req.session.role == 'user') {
    res.render('bar-role',{session:req.session})
  } else {
    res.redirect('/')
  }
})


router.get('/logout', function(req, res) {
  req.session.destroy()
  res.redirect('/login')
})


module.exports = router;


//req.session.destroy
