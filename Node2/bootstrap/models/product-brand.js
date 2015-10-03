var bookshelf = require('./../models').bookshelf,
Promise = require('bluebird');

var ProductBrand = bookshelf.Model.extend({
	tableName : 'brands',
	product : function(){
		return hasMany('Product')
	}
});

module.exports = bookshelf.model('ProductBrand', ProductBrand);