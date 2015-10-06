'use strict';

angular.module('bootstrapApp.controllers')
.controller('ProductCreateCtrl', ['$scope', '$state', 'Product', function($scope, $state, Product){
	$scope.pageTitle= 'Tambahkan Produk';
	$scope.formTitle= 'Kolom Produk'; 
	$scope.model= {};
	$scope.save= function(){
		Product.save($scope.model, function(){
			$state.go('product');	
		});
		
	};
}])