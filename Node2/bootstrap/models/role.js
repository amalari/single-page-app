var bookshelf = require('./../models').bookshelf,
Promise = require('bluebird');

var Role = bookshelf.Model.extend({
	tebleName : 'role',
	user : function(){
		return hasMany('User')
	};
})

module.exports = bookshelf.model('Role', Role);