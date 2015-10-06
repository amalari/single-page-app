'use strict';

angular.module('bootstrapApp.controllers')
.controller('UserCreateCtrl', ['$scope', 'User', '$state', function($scope, User, $state){
	$scope.pageTitle= 'Create User';
	$scope.formTitle= 'FOrm User';
	$scope.model= {};
	$scope.save= function(){
		User.save($scope.model, function(){
			$state.go('user');	
		});
	};
}]);