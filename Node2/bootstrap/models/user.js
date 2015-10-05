var bookshelf = require('./../models').bookshelf,
Role = require('./role.js'),
Promise = require('bluebird');


var User = bookshelf.Model.extend({
	tableName : 'users',
	role : function(){
		return this.belongsTo('Role', 'title_id');
	}
},{
	get: Promise.method(function(id) {
		return new this({id:id}).fetch({withRelated : ['role']});
	}),
	query: Promise.method(function(limit, start){
		var result = {};
		var User = this;
		return this.collection().query(function(qb){
			qb.limit(limit).offset(start)})
		.fetch({withRelated : ['role']}).then(function(data){
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
	}),
	getUserValid : Promise.method(function(username){
		return new this({username : username}).fetch();
	})
})

module.exports = bookshelf.model('User', User);