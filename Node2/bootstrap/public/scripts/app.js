'use strict';

angular.module('bootstrapApp',['ui.router','ui.bootstrap','ngAnimate','ngResource','bootstrapApp.controllers','bootstrapApp.services', 'bootstrapApp.config'])
.config(['$httpProvider', function($httpProvider) {
	$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
	$httpProvider.interceptors.push([
		'$injector',
		function ($injector) {
			return $injector.get('AuthInterceptor');
		}
		]);
	$httpProvider.interceptors.push([
		'$injector',
		function ($injector) {
			return $injector.get('ErrorInterceptor');
		}
		]);
}])
.factory('AuthInterceptor', ['$window', '$q', '$injector', function ($window, $q, $injector) {
	return {
		responseError: function (response) { 
			if(response.status === 401){
				$window.location = '/login';
			}else if(response.status === 403){
				$('.modal').modal('hide');
				$injector.get('$state').transitionTo('forbidden');
			}
			return $q.reject(response);
		}
	};
}])
.factory('ErrorInterceptor', ['$window', '$q', '$injector', '$timeout', function ($window, $q, $injector, $timeout) {
	return {
		responseError: function (response) { 
			if(response.status === 500){
				$('.modal').modal('hide');
				$timeout(function(){$injector.get('$state').transitionTo('error');},500);
			}else if(response.status === 409 || response.status === 400){
       // $('.modal').modal('hide');
       $window.alert(response.data.message);
   }
   return $q.reject(response);
}
};
}])
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
	})
	.state('forbidden', {
		url: '/forbidden',
		templateUrl: 'templates/forbidden.html'
	});

	$urlRouterProvider.otherwise('/user');
}]);
