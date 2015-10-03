var Product = require('./../models/product.js');
var ProductHistory = require('./../models/product-history.js');

ProductHistoryViewModel = {
	update : function(product, productOut){
		product.stock = product.stock - productOut.stockOut;
		return product;
	},
	save : function(product, stockOut){
		var result = {};
		result.product_id = product.id;
		result.price = product.price;
		result.stock_out = parseInt(stockOut);
		result.total = result.price * result.stock_out
		result.date = new Date();
		return result;
	}
}

module.exports = ProductHistoryViewModel;