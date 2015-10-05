var bookshelf = require('./../models').bookshelf,
ProductBrand = require('./product-brand.js'),
ProductHistory = require('./product-history'),
Promise = require('bluebird');

var Product = bookshelf.Model.extend({
	tableName : 'products',
	histories : function(){
		return this.hasMany('ProductHistory')
	},
	brand : function(){
		return this.belongsTo('ProductBrand', 'brand_id')
	}
},{
	get : Promise.method(function(id){
		return new this({id:id}).fetch({withRelated : ['histories','brand']})
	}),
	query : Promise.method(function(){
		return this.collection().query(function(temp){
			temp.where({'is_active' : true})
		}).fetch({withRelated : ['histories','brand']})
	}),
	save : Promise.method(function(product){
		return new this(product).save()
	}),
	update : Promise.method(function(product){
		return new this({id:product.id}).save(product)
	}),
	delete : Promise.method(function(product){
		console.log(product);
		return new this({id:product.id}).save(product)
	}),
	code : Promise.method(function(){
		return this.collection().query(function(qb){
			qb.orderBy('id', 'desc').limit(1)
		}).fetch()
	})

});

module.exports = bookshelf.model('Product', Product);