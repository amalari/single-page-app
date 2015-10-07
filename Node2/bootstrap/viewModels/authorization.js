userAllow = function(roles){
	return function(req, res, next){
		if(roles.indexOf(req.user.role.title) > -1){
			return next()
		} else {
			res.send(403, {})
		}
	}
}

module.exports = userAllow;