var User = require('./../models/user.js');
var UserViewModel = require('./../viewModels/user.js');

exports = {
	registerRoutes : function(app){
		app.get('/user', this.list);
		app.get('/user/:id', this.single);
		app.post('/user', this.save);
		app.put('/user/:id', this.update);
		app.delete('/user/:id', this.delete);
	},
	list : function(req, res){
		var start = (req.query.page-1)*req.query.limit;
		User.query(req.query.limit, start)
		.then(function(result){
			res.send(UserViewModel.list(result));
		});
	},
	save : function(req, res){
		User.save(req.body).then(function(){
			res.send({success : true});
		})
		.catch(function(err){
			res.send({success : false, message : err.message})
		})
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
	}
}

module.exports = exports;