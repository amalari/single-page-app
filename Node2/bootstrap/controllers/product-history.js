var ProductHistory = require('./../models/product-history.js');
var ProductHistoryViewModel = require('./../viewModels/product-history.js');
var Product = require('./../models/product.js');

exports = {
	registerRoutes : function(app){
		app.get('/api/history', this.list);
		app.post('/api/history', this.save);
	},
	list : function(req, res){
		ProductHistory.get()
		.then(function(listData){
			res.send(listData.toJSON())
		})
	},
	save : function(req, res){
		Product.get(req.body.productId)
		.then(function(model){
			var singleData = model.toJSON();
			var newProduct = ProductHistoryViewModel.update(singleData, req.body);
			return Product.update(newProduct)
		})
		.then(function(productModel){
			var product = productModel.toJSON();
			var productOut = ProductHistoryViewModel.save(product, req.body.stockOut);
			return ProductHistory.save(productOut)
		})
		.then(function(){
			res.send({success : true})
		})
		.catch(function(err){
			res.send({success : false, message : err.message})
		})

	}
};

module.exports = exports;
