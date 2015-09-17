'use strict';
	var users = [];
	var id = 1;

exports.query = function(list,limit,page){
	if(limit&&page == 'undefined'){
		return users;
	}
	else {
		var newArray = [];
		var x = (page-1)*limit;
		var y = x + limit;
		for(var i = x; i < y; i++){
			if(list[i] != null){
				newArray.push(list[i]);
			}
		}
	}
	return newArray;
};

exports.Entries = function(){
	return users;
};

exports.create = function(user){
	user.id = id;
	users.push(user);
	id++;
};

exports.get = function(id){
	for(var i in users){
		if(parseInt(users[i].id) === parseInt(id)){
			return users[i];
		}
	}
};

exports.update = function(user){
	for(var i in users){
		if(parseInt(users[i].id) === parseInt(user.id)){
			return users.splice(i,1,user);
		}
	}

};

exports.remove = function(id){
	for(var i in users){
		if(parseInt(users[i].id) === parseInt(id)){
			return users.splice(i,1);
		}
	}
};