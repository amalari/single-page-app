var Product = require('./../models/product.js');
var ProductViewModel = require('./../viewModels/product.js');

exports = {
	registerRoutes : function(app){
		app.get('/api/product', this.list);
		app.get('/api/product/:id', this.single);
		app.post('/api/product', this.save);
		app.put('/api/product/:id', this.update);
		app.delete('/api/product/:id', this.delete);
	},
	list : function(req, res){
		Product.query()
		.then(function(listData){
			console.log(listData.toJSON());
			res.send(ProductViewModel.list(listData.toJSON()));
		})
	},
	single : function(req, res){
		Product.get(req.params.id)
		.then(function(singleData){
			res.send(ProductViewModel.single(singleData.toJSON()));
		})
	},
	save : function(req, res){
		Product.save(ProductViewModel.save(req.body))
		.then(function(){
			res.send({success : true})
		})
		.catch(function(err){
			res.send({success : false, message : err.message})
		})
	},
	update : function(req, res){
		Product.update(req.body)
		.then(function(){
			res.send({usccess : true})
		})
		.catch(function(err){
			res.send({success : false, message : err.message})
		})
	},
	delete : function(req, res){
		Product.delete(ProductViewModel.delete(req.params))
		.then(function(){
			res.send({success : true})
		})
		.catch(function(err){
			res.send({success : false, message : err.message})
		})
	}
}

module.exports = exports;