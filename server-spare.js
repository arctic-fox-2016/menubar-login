'use-strict'

let express  = require('express')
let app = express()
let session = require('express-session')
let bodyParser = require('body-parser')
let model = require('./models/index')
app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000,function(){
  console.log('listening on 3000')
})

app.use(session({secret: 'secret-key'}))

app.use('/authentication',function(req, res, next){
  model.login.findAll().then(function(result){
    if (req.body.username==user && req.body.password==password){
      //store username and password in session
      req.session.user = req.body.username
      console.log(req.session)
      res.redirect('/admin')
    } else {
      //res.send('your credential does not exist')
      res.redirect('/')
    }
  })
})

//

app.get('/',function(req,res,next){
  if(req.session && req.session.user == "andrew"){
    res.redirect('/admin')
  } else {
    res.render('index.ejs')
  }
})

app.get('/admin',function(req,res,next){
  res.render('admin.ejs')
})

// app.get('/user',function(req,res,next){
//   res.render('admin.ejs')
// })
//
// app.get('/super-user',function(req,res,next){
//   res.render('admin.ejs')
// })


app.post('/logout',function(req,res,next){
  req.session.destroy()
  res.render('logout.ejs')
})
