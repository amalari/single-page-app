	
var express = require('express'); //load express
var app = express(); //method express disimpen di var app
var bodyParser = require('body-parser');
var cors = require('cors');
var userEngine = require('./user/user');
var productEngine = require('./product/product');
var historyEngine = require('./product-history/product-history');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var session = require('express-session');
var bcrypt   = require('bcrypt-nodejs');
var hbs = require('hbs');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var localStrategy = require('./viewModels/local-strategy.js');
var UserDB = require('./models/user.js');
// var UserViewModel = require('./viewModels/user.js');
var User = require('./controllers/user.js');
var Product = require('./controllers/product.js');
var ProductHistory = require('./controllers/product-history.js');


app.use(cors());
var handlebars = require('express-handlebars').create({ 
	extname : '.html',
	defaultLayout:'main',
	helpers: {
		section: function(name, options){
			// console.log(!this._sections);
			// console.log(name);
			// console.log(option);
			// console.log(this);
			if(!this._sections) this._sections = {};
			this._sections[name] = options.fn(this);
			return null;
		}
	}
});
app.engine('.html',handlebars.engine);
app.set('view engine', '.html');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
	extended: true,
	limit: '50mb'
}));

app.use(session({secret: 'mySecretKey'}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next){
        // if there's a flash message, transfer
        // it to the context, then clear it
        res.locals.generalMessage = req.flash('message')[0];
        // delete req.flash;
        next();
    });

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(id, done) {
	new UserDB.get(id).then(function(user) {
		done(null, user);
	})
	.catch(function(err){
		done(null, err);
	});
});

// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash());

// var knex = require('knex')({
// 	client: 'mysql',
// 	connection: {
// 		host     : '127.0.0.1',
// 		user     : 'root',
// 		password : '',
// 		database : 'bootstrapd6',
// 		charset  : 'utf8',
// 		debug: ['ComQueryPacket']
// 	}
// });

// var bookshelf = require('bookshelf')(knex);

// var User = bookshelf.Model.extend({
// 	tableName: 'users'
// });
// var ProductBrand = bookshelf.Model.extend({
// 	tableName: 'brands',
// 	products: function(){
// 		return this.hasMany(Product);
// 	}
// });
// var Product = bookshelf.Model.extend({
// 	tableName: 'products',
// 	histories: function() {
// 		return this.hasMany(ProductHistory);
// 	},
// 	brand: function(){
// 		return this.belongsTo(ProductBrand,'brand_id');
// 	}
// });
// var ProductHistory = bookshelf.Model.extend({
// 	tableName: 'product_history',
// 	product : function(){
// 		return this.belongsTo(Product);
// 	}
// });



// var Code = function(){
// 	var num= 1;
// 	var alphabet= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// 	var charIndex1= 0;
// 	var charIndex2= 0;
// 	var result = 'P-' + alphabet[charIndex1] + alphabet[charIndex2] + num;
// 	if(num < 9){
// 		num++;
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
// 	return result;
// };

// var createHash = function(password){
//  return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
// };

// passport.use('signup', new LocalStrategy({
//     passReqToCallback : true
//   },
//   function(req, username, password, done) {
//     findOrCreateUser = function(){
//       // find a user in Mongo with provided username
//       new User({'username':username}).fetch().then(function(user) {
//         // already exists
//         if (user) {
//           console.log('User already exists');
//           return done(null, false, 
//              req.flash('message','User Already Exists'));
//         } else {
//           // if there is no user with that email
//           // create the user
//           var newUser = req.body;
//           newUser.password = createHash(password);
//           new User(newUser).save().then(function(){
//           	return done(null, newUser)
//           })
//         }
//       });
//     };

//     // Delay the execution of findOrCreateUser and execute 
//     // the method in the next tick of the event loop
//     process.nextTick(findOrCreateUser);
//   });
// );
	// localStrategy(app);
	User.registerRoutes(app);
	Product.registerRoutes(app);
	ProductHistory.registerRoutes(app);
// app.get('/user', function(req, res) {

// 	// console.log(req.query.page);
// 	var start = (req.query.page-1)*req.query.limit;
// 	// var result = {};
// 	User.query(req.query.limit, start)
// 	// .collection().query(function(qb){
// 	// 	qb.limit(req.query.limit).offset(start)})
// 	// .fetch().then(function(data){
// 	// 	result.data = data.toJSON();
// 	// 	return bookshelf.knex('users').count('id as CNT');
// 	// })
// 	.then(function(result){
// 		console.log(result);

// 		res.send(new UserViewModel(result));
// 	});
// 	// var limit = req.query.limit;
// 	// var page = req.query.page;
// 	// var users = userEngine.Entries();
// 	// res.send(userEngine.query(users, limit, page));
// 	// User.collection().fetch().then(function(coll){
// 	// 	res.send(coll.toJSON());
// 	// })

// 	// console.log(limit);
// 	// console.log(page);
// 	// console.log(users);
// 	// console.log(userEngine.query(users, limit, page));
// });

// app.post('/user', function(req, res){
// 	// console.log(req.body);
// 	// userEngine.create(req.body);
// 	// res.send({success:true});
// 	new User(req.body).save().then(function(){
// 		res.send({success:true});
// 	})
// 	.catch(function(er){
// 		res.send({success:false, message:er.message});
// 	})
// });

// // app.post('/signup', function(req, res){
// // 	new User(req.body).save().then(function(){
// // 		res.send({success:true});
// // 	})
// // 	.catch(function(er){
// // 		res.send({success:false, message:er.message});
// // 	})
// // });

// // app.get()

// app.get('/user/:id', function(req, res){
// 	console.log(req.params.id);
// 	// res.send(userEngine.get(req.params.id))
// 	new User({'id' : req.params.id}).fetch().then(function(coll){
// 		res.send(coll.toJSON());
// 	});
// });

// app.put('/user/:id', function(req, res){
// 	// userEngine.update(req.body);
// 	new User({'id': req.body.id}).save(req.body).then(function(coll){
// 		res.send({success:true});
// 	})
// 	.catch(function(er){
// 		res.send({success:false, message:er.message});
// 	})
// });

// app.delete('/user/:id', function(req, res){
// 	// userEngine.remove(req.params.id);
// 	new User({'id' : req.params.id}).destroy().then(function(coll){
// 		res.send({success:true});
// 	})
	
// });

// app.get('/product', function(req, res){
// 	Product.collection().query(function(qp){
// 		qp.where({'is_active':true})
// 	}).fetch({withRelated: ['histories','brand']}).then(function(collection){
// 		res.send(collection.toJSON());
// 	})
// 	// res.send(productEngine.Entries());
// });

// app.post('/product', function(req, res){
// 	req.body.code = Code();
// 	console.log(req.body);
// 	new Product(req.body).save().then(function(){
// 		res.send({success:true});
// 	})
// 	.catch(function(er){
// 		console.log(er);
// 		res.send({success:false, message:er.message});
// 	})
// })

// app.get('/product/:id', function(req, res){
// 	// res.send(productEngine.get(req.params.id))
// 	new Product({'id' : req.params.id}).fetch().then(function(coll){
// 		res.send(coll.toJSON());
// 	});
// });

// app.put('/product/:id', function(req, res){
// 	// productEngine.update(req.body);
// 	// res.send({success:true});
// 	new Product({'id': req.body.id}).save(req.body).then(function(coll){
// 		res.send({success:true});
// 	})
// 	.catch(function(er){
// 		res.send({success:false, message:er.message});
// 	})
// });

// app.delete('/product/:id', function(req, res){
// 	// productEngine.remove(req.params.id);
// 	// res.send({success:true});
// 	req.body.is_active = 0;
// 	new Product({'id': req.params.id}).save(req.body).then(function(coll){
// 		res.send({success:true});
// 	})
// 	.catch(function(er){
// 		res.send({success:false, message:er.message});
// 	})
// });

// app.get('/history', function(req, res){
// 	ProductHistory.collection().query(function(qb){
// 		qb.select('product_history.*', 'products.name as product_name');
// 		qb.leftJoin('products','product_history.product_id', 'products.id');
// 	}).fetch().then(function(coll){
// 		res.send(coll.toJSON());
// 	})
// 	// res.send(historyEngine.Entries());
// });

// app.post('/history', function(req, res){
// 	// historyEngine.create(productEngine.get(req.body.productId), req.body.stockOut, req.body.productId);
// 	// res.send({success:true});
// 	console.log(req.body);
// 	new Product({'id' : req.body.productId}).fetch().then(function(model){
// 		var product = model.toJSON();
// 		product.stock = product.stock- req.body.stockOut;
// 		return new Product(product).save();
// 	})
// 	.then(function(productModel){
// 		var product = productModel.toJSON();
// 		var productHistory = {};
// 		productHistory.product_id = product.id;
// 		productHistory.price	 = product.price;
// 		productHistory.stock_out = parseInt(req.body.stockOut);
// 		productHistory.total = product.price * parseInt(req.body.stockOut);
// 		productHistory.date = new Date();
// 		return new ProductHistory(productHistory).save();
// 	})
// 	.then(function(){
// 		res.send({success:true});
// 	})
// 	.catch(function(err){
// 		res.send({success:false, message:err.message});
// 	});
// });
	app.listen(3001);