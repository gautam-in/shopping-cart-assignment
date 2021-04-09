const express = require('express');
const path = require('path');
//const hbs = require('hbs');
const http = require('http');
const { response } = require('express');
const exphbs = require('express-handlebars');
const app = express();
const config = require('./environment.json')

app.use('/static',express.static(path.join(__dirname,'static/')));

// set view engine 
app.engine('hbs',exphbs({
    defaultLayout:'index',
    partialsDir: __dirname + '/views/partials/',
    extname:'.hbs',
    helpers:{
        ifOrder : function(value,options){
            if(value >= 1)
            return options.fn(this)

            else return options.inverse(this)
        },
        json : function(context){
            return JSON.stringify(context);
        },
        filter : function(data,options){

        }
    }
}))
app.set('view engine','hbs')
app.set('views', path.join(__dirname,'views/'))

var data;
var categories;
app.get('/', (req, response) => {
    http.get(config.url+'/banners',(resp)=>{
        resp.on('data',(res)=>{
           this.data = JSON.parse(res.toString())
        })
    })
    http.get(config.url+'/categories',resp =>{
        resp.on('data',res =>{
            this.categories = JSON.parse(res.toString())
            response.render('banners',{data: this.data, categories:this.categories})
        })
    })
})
app.post('/home',(req,response)=>{
    response.redirect('/')
})
app.get('/login',(req,response)=>{
    response.render('login')
})
app.get('/register',(req,response)=>{
    response.render('register')
})
app.get('/productsPage',(req,response)=>{
    let data;
    let queryParam    
    http.get(config.url+'/products',resp=>{
        let productsArray = new Array()
        resp.on('data',res=>{
            this.products = JSON.parse(res.toString())
            this.products.map((val, index,arr)=>{
                if(val.category === req.query.category){
                    productsArray.push(val)
                }
            })
           if(req.query.category === undefined){
            response.render('products',{products: this.products,categories:this.categories})
           }else{
            response.render('products',{products: productsArray,categories:this.categories})
           }
            
        })
    })
    
})

// app.get('/cart',(req,res)=>{
//     res.render('cart',{products:this.products})
// })



app.listen(process.env.PORT || 4000, ()=> console.log('Server Started on port 4000'))