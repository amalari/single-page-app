var passport = require('passport'),
User = require('./../models/user.js'),
LocalStrategy = require('passport-local').Strategy,
bcrypt = require('bcrypt-nodejs');

passport.serializeUser(function(user, done){
	done(null, user);
});
passport.deserializeUser(function(id, done){
	User.get(id).then(function(user){
		done(null, user);
	})
	.catch(function(err){
		done(err, null);
	});
});

module.exports = function(app){
	console.log("lewat local strategy")
	// if(!options.successRedirect){
	// 	options.successRedirect = '/';
	// };
	// if(!options.failureRedirect){
	// 	options.failureRedirect = '/login';
	// };

	var isValidPassword = function(pass, passEncrypted){
		var result;
		bcrypt.compare(password, user.password, function(err, res){
			result = res;
		})
		console.log(result);
		return result;
	}

	return {
		init : 
		//function(){
			passport.use(new LocalStrategy(function(username, password, done) {
				User.getUserValid(username)
				.then(function(model){
					console.log("local strategy");
					var user = model.toJSON();
					console.log(user);
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
			}))
		}
		// registerRoutes : function(){
		// 	app.get()
		// }
	}