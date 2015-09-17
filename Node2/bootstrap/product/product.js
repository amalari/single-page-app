'use strict';

var products = [];
var id = 1;

var Code = function(){
	var num= 1;
	var alphabet= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	var charIndex1= 0;
	var charIndex2= 0;
	var result = 'P-' + alphabet[charIndex1] + alphabet[charIndex2] + num;
	if(num < 9){
		num++;
	}
	else {
		num=1;
		if(charIndex2 < 25){
			charIndex2++;
		}
		else {
			charIndex2 = 0
			charIndex1++
		}
	}
	return result;
};

exports.Entries = function(){
	return products;
};

exports.create = function(product){
	product.id = id;
	product.code = Code();
	products.push(product);
	id++;
};

exports.get = function(id){
	for(var i in products){
		if(parseInt(products[i].id) === parseInt(id)){
			return products[i];
		}
	}
};

exports.update = function(product){
	for(var i in products){
		if(parseInt(products[i].id) === parseInt(product.id)){
			products.splice(i,1,product)
		}
	}
};

exports.remove = function(id){
	for(var i in products){
		if(parseInt(products[i].id) === parseInt(id)){
			products.splice(i,1);
		}
	}
}
