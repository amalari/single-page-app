'use strict';
angular.module('bootstrapApp.controllers')
.controller('ProductListCtrl', ['$scope', 'Product', 'ProductHistory' ,function($scope, Product, ProductHistory){
	$scope.products = Product.query();
	$scope.model= {};
	$scope.remove = function(id, name){
		if(confirm('Anda yakin akan menghapus product ' + name + '?')){
			Product.remove({id:id}, function(){
				$scope.products = Product.query();	
			});
		}
	};
	$scope.spend= function(id, name){
		if(confirm('Anda yakin akan mengurangi product '+ name + ' sebanyak ' + $scope.model.stockOut + '?')){
			// for(var i in $scope.products){
			// 	if(parseInt($scope.products[i].id) === parseInt(id)){
			// 		$scope.model.product= $scope.products[i];
			$scope.model.productId = id;
			console.log($scope.model);
			ProductHistory.save($scope.model, function(){
				$scope.products = Product.query();

			});
			// Product.update($scope.model, function(){
			// 	$state.go('product')
			// });
			// console.log($scope.model.product);
			// console.log($scope.model.stockOut);
		}
	};

}]);