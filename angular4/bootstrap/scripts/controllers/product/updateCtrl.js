'use strict';

angular.module('bootstrapApp.controllers')
.controller('ProductUpdateCtrl', ['$scope', '$state', '$stateParams', 'Product', function($scope, $state, $stateParams, Product){
	$scope.pageTitle= 'Ganti Produk';
	$scope.formTitle= 'Kolom Produk';
	$scope.model= Product.get({id:$stateParams.id});
	$scope.save= function(){
		Product.update($scope.model, function(){
			$state.go('product');
		});
		
	};
}])