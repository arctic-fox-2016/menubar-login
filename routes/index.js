var express = require('express');
var router = express.Router();
var models = require('../models/index')


/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index.jade', {});
});

router.post('/checklogin', function (req, res, next) {
	models.login.findAll({
		where: {
			email: req.body.email,
			password: req.body.password
		}
	}).then(function (result) {
		if (result.length == 1) {
			//set session
			console.log(req.body.email);
			req.session.email = req.body.email;
			res.redirect('/home')
		} else {
			res.redirect('/')
		}
	})




});

router.get('/home', function (req, res, next) {
	if (req.session.email) {
		res.render('success.jade', {
			email: req.session.email
		});
	} else {
		res.redirect('/')
	}
});

module.exports = router;
