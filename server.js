const express = require('express');
const path = require('path');
const hbs = require('hbs');
const http = require('http');
const { response } = require('express');

const app = express();

app.use('/static',express.static(path.join(__dirname,'static/')));

// set view engine 
app.set('view engine','hbs')
app.set('views', path.join(__dirname,'views/'))

app.get('/', (req, response) => {
    //res.send("hello worl")
    let data;
    var categories;
    var products;
    http.get('http://localhost:5000/banners',(resp)=>{
        resp.on('data',(res)=>{
           data = JSON.parse(res.toString())
           data.sort
           //res.render('banners',{data : data})
          // response.render('banners',{data:data})
        })
    })
    http.get('http://localhost:5000/categories',resp =>{
        resp.on('data',res =>{
            this.categories = JSON.parse(res.toString())
            response.render('banners',{data: data, categories:this.categories})
        })
    })
})
app.get('/productsPage',(req,response)=>{
    let data;
    http.get('http://localhost:5000/products',resp=>{
        resp.on('data',res=>{
            this.products = JSON.parse(res.toString())
           // response.send("products")
            response.render('products',{products: this.products,categories:this.categories})
        })
    })
    
})
app.get('/cart',(req,res)=>{
    res.render('cart',{products:this.products})
})


app.listen(process.env.PORT || 4000, ()=> console.log('Server Started on port 4000'))