'use strict';

angular.module('bootstrapApp.services')
.factory('User', ['$resource', 'ENV', function($resource, ENV){
	return $resource(ENV.apiEndpoint + '/api/user/:id', {id:'@id'}, {
		update:{
			method:"PUT"
		} , query:{
			method:"GET", isArray:false
		}
	});
	// if(typeof $window.users == 'undefined'){
	// 	$window.users = [];
	// 	$window.id = 1;
	// };

	// var userService = {};
	// userService.get = function(id){
	// 	for(var i in $window.users){
	// 		if(parseInt($window.users[i].id) === parseInt(id)){
	// 			return $window.users[i];
	// 		}
	// 	}
	// 	return null;
	// };
	// userService.query = function(){
	// 	return $window.users;
	// };
	// userService.remove = function(id){
	// 	for(var i in $window.users){
	// 		if(parseInt($window.users[i].id) === parseInt(id)){
	// 			$window.users.splice(i,1);
	// 		}
	// 	}
	// };

	// userService.create= function(user){
	// 	user.id= $window.id;
	// 	$window.users.push(user);
	// 	$window.id++;
	// };

	// userService.update= function(user){
	// 	for(var i in $window.users){
	// 		if(parseInt($window.users[i].id)=== parseInt(id)){
	// 			$window.users.spilce(i, 1, user);
	// 		}
	// 	}
	// };

	// return userService;

	
}])