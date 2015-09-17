'use strict';
var ProductEngine = require('./../product/product');

var productHistories = [];

var identityId = 1;

exports.Entries= function(){
	for(var i in productHistories){
		productHistories[i].product = ProductEngine.get(productHistories[i].product_id);
	}
	return productHistories;
};

exports.create= function(product, out, productId){
	for(var i in ProductEngine.Entries()){
		if(parseInt(ProductEngine.Entries()[i].id) === parseInt(productId)){
			ProductEngine.Entries()[i].stock = ProductEngine.Entries()[i].stock - out;
		}
	}
	var productHistory = {};
	productHistory.date = new Date();
	productHistory.id = identityId;
	productHistory.stockOut =  out;
	productHistory.total = productHistory.stockOut * product.price;
	productHistory.price = product.price;
	productHistory.product_id = productId
	productHistories.push(productHistory);

	identityId++;
}