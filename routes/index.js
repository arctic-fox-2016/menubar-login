var express = require('express');
var router = express.Router();
let model = require('../models/index')


router.get('/',function(req,res,next){
  if(req.session.role == "admin"){
    res.redirect('/admin')
  } else if(req.session.role == "user"){
    res.redirect('/user')
  } else if(req.session.role == "super-user"){
    res.redirect('/super-user')
  } else {
    res.render('index.ejs')
  }
})

router.get('/admin',function(req,res,next){
  if (req.session.role){
    res.render('admin.ejs', {name: req.session.user, role: req.session.role})
  } else {
    res.redirect('/')
  }
})

router.get('/user',function(req,res,next){
  if (req.session.role){
    res.render('user.ejs', {name: req.session.user, role: req.session.role})
  } else {
    res.redirect('/')
  }
})

router.get('/super-user',function(req,res,next){
  if (req.session.role){
    res.render('super-user.ejs', {name: req.session.user, role: req.session.role})
  } else {
    res.redirect('/')
  }
})


router.post('/logout',function(req,res,next){
  req.session.destroy()
  res.render('logout.ejs')
})

router.post('/authentication',function(req, res, next){
  model.login.findAll().then(function(result){
    for(let i in result){
      if (req.body.username==result[i].username && req.body.password==result[i].password){
        //store username and password in session
        req.session.user = req.body.username
        req.session.role = result[i].role
        req.session.credential = true
      }
    }
    res.redirect('/')
    })
})


module.exports = router
