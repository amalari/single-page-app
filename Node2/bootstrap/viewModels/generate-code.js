var Product = require('./../models/product.js');

var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var charIndex1, charIndex2, num;
Product.code().then(function(singleData){
	var x = singleData.toJSON()[0].code;
	console.log(x);
	num = parseInt(x.charAt(4))+1;
	charIndex1 = alphabet.indexOf(x.charAt(2));
	charIndex2 = alphabet.indexOf(x.charAt(3));
	console.log(num);
	console.log(charIndex1);
	console.log(charIndex2);
	if(x[0].code == 'undifined'){
		num = 1;
		charIndex1 = 0;
		charIndex2 = 0;
	};
});

// num = 1;
// console.log(num);
// charIndex1 = 0;
// charIndex2 = 0;


// var num = 1;
// // console.log(num);
// var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// var charIndex1 = 0;
// var charIndex2 = 0;

generate = {
	code : function(){
		console.log('generate code');

		var result = 'P-' + alphabet[charIndex1] + alphabet[charIndex2] + num;
		if(num < 9){
			console.log('lewat sini ga?');
			num++;
			console.log(num);
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
		console.log(result);
		return result;
	}
}

module.exports = generate;