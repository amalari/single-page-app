'use strict';

angular.module('bootstrapApp.services')
.factory('Product', ['$window', '$resource', function($window, $resource){
	return $resource('http://localhost:3001/product/:id', {id:'@id'} , {
		update:{
			method:"PUT"
		}
	})
}]);
	// if(typeof $window.products == 'undefined'){
	// 	$window.products = [];
	// 	$window.id= 1;
	// 	$window.num= 1;
	// 	$window.alphabet= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	// 	$window.charIndex1= 0;
	// 	$window.charIndex2= 0;
	// };

	// var generateCode= function(){
	// 	var result= 'P-'+ $window.alphabet[charIndex1] + $window.alphabet[charIndex2] + $window.num;
	// 	if($window.num < 9){
	// 		$window.num++;
	// 	} else {
	// 		$window.num= 1;
	// 		if($window.charIndex2 < 25){ 
	// 			$window.charindex2++;
	// 		} else {
	// 			$window.charIndex2= 0;
	// 			$window.charindex1++;
	// 		}
	// 	}
	// 	return result;
	// };

		// function randomString() {
		// 	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
		// 	var string_length = 2;
		// 	var randomstring = '';
		// 	for (var i=0; i<string_length; i++) {
		// 		var rnum = Math.floor(Math.random() * chars.length);
		// 		randomstring += chars.substring(rnum,rnum+1);
		// 	}

		// 	return randomstring;
		// };

	// 	var productService= {};
	// 	productService.get= function(id){
	// 		for(var i in $window.products){
	// 			if(parseInt($window.products[i].id)=== parseInt(id)){
	// 				return $window.products[i];
	// 			}
	// 			return null
	// 		}
	// 	};

	// 	productService.query= function(){
	// 		return $window.products;
	// 	};

	// 	productService.remove= function(id){
	// 		for(var i in $window.products){
	// 			if(parseInt($window.products[i].id)=== parseInt(id)){
	// 				$window.products.splice(i,1);
	// 			}
	// 		}
	// 	};

	// 	productService.create= function(product){
	// 		product.id = $window.id;
	// 		product.code= generateCode();
	// 		$window.products.push(product);
	// 		$window.id++;
	// 	};

	// 	productService.update= function(product){
	// 		for(var i in $window.products){
	// 			if(parseInt($window.products[i].id)=== parseInt(product.id)){
	// 				$window.products.spilce(i, 1, product);
	// 			}
	// 		}
	// 	};

	// 	productService.spend= function(id,out){
	// 		for(var i in $window.products){
	// 			if(parseInt($window.products[i].id)=== parseInt(id)){
	// 				$window.products[i].stock= $window.products[i].stock - out;
	// 				console.log(out);
	// 				console.log($window.products[i].stock);
	// 			}
	// 		}
	// 	};
	// 	return productService;
	// }])