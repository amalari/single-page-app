'use strict';

angular.module('bootstrapApp.controllers')
.controller('ProductHistoryListCtrl', ['$scope', 'ProductHistory', function($scope, ProductHistory){
	$scope.productsHistory= ProductHistory.query();
}]);