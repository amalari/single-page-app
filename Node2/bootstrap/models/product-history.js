var bookshelf = require('./../models').bookshelf,
Product = require('./product.js'),
Promise = require('bluebird');

var ProductHistory = bookshelf.Model.extend({
	tableName : 'product_history',
	product : function(){
		return this.belongsTo('Product')
	}
}, {
	get : Promise.method(function(){
		return this.collection().query(function(qb){
			qb.select('product_history.*', 'products.name as product_name')
			qb.leftJoin('products','product_history.product_id', 'products.id')
		}).fetch()
	}),
	save : Promise.method(function(product){
		return new this(product).save()
		})
})

module.exports = bookshelf.model('ProductHistory', ProductHistory);