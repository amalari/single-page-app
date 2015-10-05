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
		init : function(){
			passport.use('local', new LocalStrategy(function(req, username, password, done) {
				User.getUserValid(username)
				.then(function(model){
					var user = model.toJSON();
					if(user.username === null){
						return done(null, false, req.flash('message','Incorect username'));
					}
					if(!isValidPassword(password, user.password)){
						return done(null, false, req.flash('message','Incorect Password'));
					}
					return done(null, user);

				})
				.catch(function(err){
					return done(err, null);
				})
			}));
		}
		// registerRoutes : function(){
		// 	app.get()
		// }
	}