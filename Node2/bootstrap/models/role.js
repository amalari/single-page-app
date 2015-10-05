var bookshelf = require('./../models').bookshelf,
Promise = require('bluebird');
var User = require('./user.js');

var Role = bookshelf.Model.extend({
	tableName : 'role',
	user : function(){
		return this.hasMany('User')
	}
})

module.exports = bookshelf.model('Role', Role);