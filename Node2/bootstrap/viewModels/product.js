var Product = require('./../models/product.js');
var generate = require('./generate-code.js');
// console.log('kepanggil ga');

// var num= 1;
// console.log(num);
// var alphabet= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// var charIndex1= 0;
// var charIndex2= 0;

ProductViewModel = {
	list : function(listData){
		var result = listData.map(function(data){
			return {
				id : data.id,
				code : data.code,
				name : data.name,
				color : data.color,
				stock : data.stock,
				price : data.price,
				brand : data.brand
			}
		})
		return result;
	},
	single : function(singleData){
		console.log(singleData);
		var result = {};
		result.id = singleData.id;
		result.code = singleData.code;
		result.name = singleData.name;
		result.color = singleData.color;
		result.stock = singleData.stock;
		result.price = singleData.price;
		return result;
	},
	save : function(product){
		// console.log(product);
		// var Code = function(){
		// 	console.log('generate code');
		// 	console.log(num);
		// 	var result = 'P-' + alphabet[charIndex1] + alphabet[charIndex2] + num;
		// 	if(num < 9){
		// 		console.log('lewat sini ga?');
		// 		num++;
		// 		console.log(num);
		// 	}
		// 	else {
		// 		num=1;
		// 		if(charIndex2 < 25){
		// 			charIndex2++;
		// 		}
		// 		else {
		// 			charIndex2 = 0
		// 			charIndex1++
		// 		}
		// 	}
		// 	console.log(result);
		// 	return result;
		// };
		product.code = generate.code();
		console.log(product);
		return product
	},
	delete : function(productId){
			console.log(productId);
			productId.is_active = 0;
			return productId;
	}
};

module.exports = ProductViewModel;