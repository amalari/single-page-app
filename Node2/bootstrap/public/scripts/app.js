'use strict';

angular.module('bootstrapApp',['ui.router','ui.bootstrap','ngAnimate','ngResource','bootstrapApp.controllers','bootstrapApp.services'])
.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('user',{
		url : '/user',
		templateUrl : 'templates/user/list.html',
		controller : 'UserListCtrl'
	})
	.state('product',{
		url: '/product',
		templateUrl: 'templates/product/list.html',
		controller: 'ProductListCtrl'
	})
	.state('user-create', {
		url: '/user/create',
		templateUrl: 'templates/user/form.html',
		controller: 'UserCreateCtrl'
	})
	.state('product-create', {
		url: '/product/create',
		templateUrl: 'templates/product/form.html',
		controller: 'ProductCreateCtrl'
	})
	.state('user-update', {
		url: '/user/update/:id',
		templateUrl: 'templates/user/form.html',
		controller: 'UserUpdateCtrl'
	})
	.state('product-update',{
		url: '/product/update/:id',
		templateUrl: 'templates/product/form.html',
		controller: 'ProductUpdateCtrl'
	})
	.state('product-history',{
		url: '/product/history',
		templateUrl: 'templates/product-history/list.html',
		controller: 'ProductHistoryListCtrl'
	})
	.state('login', {
		url: '/login',
		templateUrl: 'templates/product/login.html',
		controller: 'LoginCtrl'
	});

	$urlRouterProvider.otherwise('/user');
}]);
