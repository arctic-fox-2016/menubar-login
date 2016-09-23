var express = require('express');
var router = express.Router();
var models = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session.username) {
    models.users.find({
      where: {
        username: req.session.username
      }
    }).then(function(data) {
      res.render('index', {
        role: data.dataValues.role,
        login: true,
        status: "You are logged in"
      })
    })
  } else {
    res.render('index', {
      role: "",
      login: false,
      status: "You are NOT logged in"
    })
  }
})

router.get('/register', function(req, res, next) {
  res.render('register', {
    retry: false
  })
})

router.post('/register', function(req, res, next) {
  models.users.find({
    where: {
      username: req.body.username
    }
  }).then(function(data) {
    if (data) {
      res.render('register', {
        retry: true
      })
    } else {
      models.users.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
      }).then(function(data) {
        req.session.username = data.dataValues.username
        res.redirect('/')
      })
    }
  })
})

router.get('/login', function(req, res, next) {
  res.render('login', {
    retry: false
  })
})

router.post('/login', function(req, res, next) {
  models.users.find({
    where: {
      username: req.body.username,
      password: req.body.password
    }
  }).then(function(data) {
    if (data) {
      req.session.username = data.dataValues.username
      res.redirect('/')
    } else {
      res.render('login', {
        retry: true
      })
    }
  });
})

router.get('/logout', function(req, res, next) {
  req.session.destroy(function() {
    res.redirect('/')
  })
})


module.exports = router;
