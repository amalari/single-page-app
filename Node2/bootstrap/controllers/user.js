var User = require('./../models/user.js');
var UserViewModel = require('./../viewModels/user.js');
var bcrypt = require('bcrypt-nodejs');
var passport = require('passport');
var localStrategy = require('./../viewModels/local-strategy.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');

var isValidPassword = function(pass, passEncrypted){
	console.log("password asli" + pass);
	console.log("password encrypted" + passEncrypted);
		// var result;
		return bcrypt.compareSync(pass, passEncrypted)
		// , function(err, res){
		// 	console.log("hasil " + res);
		// 	return res;
		// })
		// console.log(result);
		// return result;
	};

passport.use('local',new LocalStrategy(function(username, password, done) {
	User.getUserValid(username)
	.then(function(model){
		console.log("local strategy");
		var user = model.toJSON();
		console.log(user);
		console.log("ini" + password);
		if(user.username === null){
			return done(null, false, req.flash('message',{
				type: 'Notice',
				intro: 'Validation error',
				message: 'Incorect username'}));
		}
		if(!isValidPassword(password, user.password)){
			return done(null, false, req.flash('message',{
				type: 'Notice',
				intro: 'Validation error',
				message: 'Incorect password'}));
		}
		return done(null, user);

	})
	.catch(function(err){
		return done(err, null);
	})
}));

exports = {
	registerRoutes : function(app){
		app.get('/user', this.list);
		app.get('/user/:id', this.single);
		app.post('/user', this.save);
		app.put('/user/:id', this.update);
		app.delete('/user/:id', this.delete);
		app.get('/login', this.loginPage);
		app.post('/login', this.login);
		app.get('/dashboard', this.dashboard);
	},
	list : function(req, res){
		var start = (req.query.page-1)*req.query.limit;
		User.query(req.query.limit, start)
		.then(function(result){
			res.send(UserViewModel.list(result));
		});
	},
	save : function(req, res){
		bcrypt.hash(req.body.password, null, null, function(err, hash){
			req.body.password = hash;
			User.save(req.body).then(function(){
				res.send({success : true});
			})
			.catch(function(err){
				res.send({success : false, message : err.message})
			})
		});
		
	},
	single : function(req, res){
		User.get(req.params.id)
		.then(function(result){
			console.log(result);
			res.send(UserViewModel.single(result.toJSON()));
		})
	},
	update : function(req, res){
		User.update(req.body)
		.then(function(){
			res.send({success : true})
		})
		.catch(function(err){
			res.send({success : false, message : err.message})
		})
	},
	delete : function(req, res){
		User.delete(req.params.id)
		.then(function(){
			res.send({success : true})
		})
	},
	loginPage : function(req, res){
		res.render('login', req.flash('message'));
	},
	login : passport.authenticate('local', {
		successRedirect: '/dashboard',
		failureRedirect: '/login',
		failureFlash: true
	}),
	dashboard : function(req, res){
		res.render('index', {layout: false})
	}
}

module.exports = exports;