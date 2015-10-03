var User = require('./../models/user.js');

// function UserViewModel(result){
// 	// var data = [];
// 	var newResult = result.data.map(function(data){
// 		return {
// 			id : data.id,
// 			username : data.username,
// 			fullname : data.fullname,
// 			email : data.email,
// 			phone_number : data.phone_number}
// 		});

// 	// var id = 1;
// 	// var data = [];
// 	// var x = {};
// 	// for(var i in result.data){
// 	// 	if(parseInt(result.data[i].id) === parseInt(id)){
// 	// 		console.log('a');
// 	// 		// x.username = result.data[i].username
// 	// 		// data.push(x);
// 	// 		x.username = result.data[i].username;
// 	// 		x.phone_number = result.data[i].phone_number;
// 	// 		x.email = result.data[i].phone_number;
// 	// 		data.push(x);
// 	// 		id++;
// 	// 		console.log(id);
// 	// 	}


// 	// 	console.log(data);
// 	// 	// data.username = result.data[i].username;
// 	// 	// data.phone_number = result.data[i].phone_number;
// 	// 	// data.fullname = result.data[i].fullname;
// 	// }
// 	result.data = newResult;
// 	console.log(newResult);
// 	return result;

// }

UserViewModel = {
	list : function(listData){
		console.log('processing data');
		var result = listData.data.map(function(data){
			return {
				id : data.id,
				username : data.username,
				fullname : data.fullname,
				email : data.email,
				phone_number : data.phone_number}
			});
		listData.data = result
		return listData;
	},
	single : function(singleData){
		console.log('process to get by Id');
		console.log(singleData);
		var result = {};
		result.id = singleData.id;
		result.username = singleData.username;
		result.fullname = singleData.fullname;
		result.email = singleData.email;
		result.phone_number = singleData.phone_number;
		console.log(result);
		return result;
		// return {
		// 	id : singleData.attributesid,
		// 	username : singleData.attributes.username,
		// 	fullname : singleData.attributes.fullname,
		// 	email : singleData.attributes.email,
		// 	phone_number : singleData.attributes.phone_number
		// }
	}
}

module.exports = UserViewModel;