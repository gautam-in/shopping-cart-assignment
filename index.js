const express = require('express')
let cartObj =require('./js/cartconstant');
let cart =require('./js/cart');
var path =require('path')
var exphbs = require('express-handlebars'); 
var bodyParser = require('body-parser');
const app = express()
const port = 3000
let categoryId,prevId;
let cartCount = 0; 
app.set('views', path.join(__dirname,'views'));
app.use( express.static( 'src'));
app.use(express.static('server'));
app.use(express.static('views'));
app.use(express.static('./'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('hbs',exphbs({extname:'hbs',defaultLayout:'main',
	partialsDir: __dirname+'/views/components/',
    layoutDir: __dirname+'/views/layouts/',
	helpers:{
		ifEven:function(value , options){
			if(value%2=== 0 ){
				 return options.fn(this);
	       } else {
	            return options.inverse(this);
	        }
		},
		ifNewRow:function(value,options) {
			return value.map(function(item,index){
				 item.$first = (index+1)%4 === 0;
			});

		},
		foreach:function(arr, options) {
		    return arr.map(function(item,index) {
		        item.$first = (index+1)%4 === 0;
		        item.$last  = index === arr.length-1;
		        return options.fn(item);
		    }).join('');
		},
	      concat:function(){
	      	 var outStr = '';
            for(var arg in arguments){
                if(typeof arguments[arg]!='object'){
                    outStr += arguments[arg];
                }
            }
            return outStr;
	      }
	     // concat:(...strs) =>  strs.filter( arg => typeof arg !== 'object' ).join('')
	}

}));

app.set('view engine', 'hbs');

var fs = require("fs"),
    json;

function readJsonFileSync(filepath, encoding){

    if (typeof (encoding) == 'undefined'){
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}

function getConfig(file){

    var filepath = __dirname + '/' + file;
    return readJsonFileSync(filepath);
}

//assume that config.json is in application root

categories = getConfig('server/categories/index.get.json');
banners = getConfig('server/banners/index.get.json');
products = getConfig('server/products/index.get.json');


app.get('/', (req, res) =>{
	res.render('features/home/home',{categories:categories, banners:banners,cartItems:cartCount})
});
app.get('/login', (req, res) =>{
	res.render('features/login/login',{cartItems:cartCount})
});
app.get('/register', (req, res) => res.render('features/register/register',{cartItems:cartCount}));

app.get('/products', (req, res) =>{
	console.log(cartObj.cartItems);
	res.render('features/products/products',{categories:categories, products:products,cartItems:cartCount});
});
app.get('/products/:id', function (req, res) {
    let categoryId = req.params.id;
	let product_cat = products.filter((product) => product.category === categoryId);
	res.render('features/products/products', { products: product_cat, categories:categories,cartItems:cartCount});
});
app.post('/addtoCart', function (req, res) {
    cartCount = req.body.cartCount;
	res.end(JSON.stringify({ 'responseMessage': cartCount}));
});

app.post('/updateCart', function (req, res) {
    cartCount = req.body.cartCount;
	res.end(JSON.stringify({ 'responseMessage': cartCount}));
});

app.use('/cart', cart)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))