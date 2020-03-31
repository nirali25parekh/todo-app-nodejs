//setup express
var express = require('express')
var app = express()
var mongoose = require('mongoose')
var config = require('./config')
var setUpController = require('./controllers/setupController')
var apiController = require('./controllers/apiController')

//setup port
var port = process.env.PORT || 3000

//setup middleware from express
app.use('/' , express.static(__dirname + '/public'))

//setup template engine
app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString())
setUpController(app)
apiController(app)
app.listen(port)