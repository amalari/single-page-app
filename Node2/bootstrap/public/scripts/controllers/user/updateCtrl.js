'use strict';

angular.module('bootstrapApp.controllers')
.controller('UserUpdateCtrl', ['$scope', '$state', '$stateParams', 'User', function($scope, $state, $stateParams, User){
	$scope.pageTitle= 'Buat User';
	$scope.formTitle= 'Kolom User';
	$scope.model= User.get({id:$stateParams.id});
	$scope.save= function(){
		User.update($scope.model, function(){
			$state.go('user');
		});
	};
}]);