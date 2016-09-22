'use-strict'

let express  = require('express')
let app = express()
let session = require('express-session')
let bodyParser = require('body-parser')
let model = require('./models/index')
let routes = require('./routes/index.js')
app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000,function(){
  console.log('listening on 3000')
})

app.use(session({secret: 'secret-key'}))
app.use('/', routes);
