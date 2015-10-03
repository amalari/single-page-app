var bookshelf = require('./../models').bookshelf,
Promise = require('bluebird');

var User = bookshelf.Model.extend({
	tableName : 'users',
	role : function(){
		return this.belongsTo('Role');
	}
},{
	get: Promise.method(function(id) {
		return new this({id:id}).fetch();
	}),
	query: Promise.method(function(limit, start){
		var result = {};
		var User = this;
		return this.collection().query(function(qb){
			qb.limit(limit).offset(start)})
		.fetch().then(function(data){
			result.data = data.toJSON();
			return bookshelf.knex('users').count('id as CNT');
		}).then(function(model){
			result.total = model[0].CNT;
			return Promise.resolve(result);
		})
	}),
	save : Promise.method(function(data){
		return new this(data).save();
	}),
	update : Promise.method(function(data){
		return new this({id:data.id}).save(data);
	}),
	delete : Promise.method(function(id){
		return new this({id:id}).destroy();
	})
})

module.exports = bookshelf.model('User', User);