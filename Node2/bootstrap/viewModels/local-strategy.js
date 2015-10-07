var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');
var User = require('./../models/user.js');

var isValidPassword = function(pass, passEncrypted){
	console.log("password asli : " + pass);
	console.log("password encrypted : " + passEncrypted);
		// var result;
		return bcrypt.compareSync(pass, passEncrypted)
		// , function(err, res){
		// 	console.log("hasil " + res);
		// 	return res;
		// })
		// console.log(result);
		// return result;
	};

	exports = function(app){
		passport.use('local', new LocalStrategy({
			passReqToCallback : true
		},function(req, username, password, done) {
			User.getUserValid(username)
			.then(function(model){
				console.log("local strategy");
				var user;
				if(model === null){
					return done(null, false, req.flash('message',{
						type: 'Notice',
						intro: 'Validation error',
						message: 'Incorect username'}));
				} else{
					user = model.toJSON()
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
	}

	module.exports = exports;