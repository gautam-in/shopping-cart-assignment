const express = require('express')
var path =require('path')
var exphbs = require('express-handlebars'); 
const app = express()
const port = 3000

app.set('views', path.join(__dirname,'views'));
app.use( express.static( 'src'));
app.use(express.static('server'));
app.use(express.static('./'));
app.engine('hbs',exphbs({extname:'hbs',defaultLayout:'main',
	helpers:{
		ifEven:function(value , options){
			if(value%2=== 0 ){
				 return options.fn(this);
	       } else {
	            return options.inverse(this);
	         }
		}
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
console.log(categories);

app.get('/', (req, res) =>{
	res.render('home',{categories:categories})
});
app.get('/login', (req, res) =>{
	res.render('login')
});
app.get('/register', (req, res) => res.render('register'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))