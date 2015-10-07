'use strict';

angular.module('bootstrapApp.services')
.factory('ProductHistory', ['$window', 'Product', '$resource', 'ENV', function($window, Product, $resource, ENV){
	return $resource(ENV.apiEndpoint + '/api/history/:id', {id:'@id'})
}]);
// 	if(typeof $window.productsHistory == 'undefined'){
// 		$window.productsHistory = [];
// 		$window.id= 1;
// 	};

// 	var date= function(fulldate){
// 		var date1= fulldate.getDate();
// 		if(date < 10){
// 			date1= "0" + date1;
// 		}
// 		return date1;
// 	};

// 	var month= function(fulldate){
// 		var monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"];
// 		var month1= monthArray[fulldate.getMonth()];
// 		return month1;
// 	};

// 	var year= function(fulldate){
// 		var year1= fulldate.getYear();
// 		if(year1<1000){year1 = year1+1900}
// 			return year1;
// 	};

// 	var hm= function(fulldate){
// 		var hour= fulldate.getHours();
// 		var minute= fulldate.getMinutes();
// 		var clock= hour + ":" + minute;
// 		if(hour >= 12){
// 			clock= clock + "pm";
// 		} else {
// 			clock= clock + "am";
// 		}
// 		return clock;

// 	};


// 	var productHistoryService ={};

// 	productHistoryService.query= function(){
// 		return $window.productsHistory;
// 	};

// 	productHistoryService.add= function(out,id){
// 		var fulldate= new Date();
// 		console.log(fulldate);
// 		for(var i in Product.query()){
// 			if(parseInt(Product.query()[i].id)=== parseInt(id)){
// 				out.id= $window.id;
// 				out.date= date(fulldate) + ' - ' + month(fulldate) + ' - ' + year(fulldate) + '  ' + hm(fulldate)  ;
// 				out.name= Product.query()[i].name;
// 				out.price= Product.query()[i].price;
// 				out.total= out.stockOut * out.price;
// 				$window.productsHistory.push(out);
// 				$window.id++;
// 			}
// 		}
// 	};
// 	return productHistoryService;
// }]);