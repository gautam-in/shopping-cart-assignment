const express=require('express');
const cors=require('cors');
const products=require('./server/products/index.get.json');
const banners=require('./server/banners/index.get.json');
const categories=require('./server/categories/index.get.json');
const addToCart=require('./server/addToCart/index.post.json')
const app=express();
app.use(cors());
app.get("/products",(req,res)=>{
    res.json(products);
})
app.get("/banners",(req,res)=>{
    res.json(banners);
})
app.get("/categories",(req,res)=>{
    res.json(categories);
})
app.post("/addToCart",(req,res)=>{
    res.status(201).json(addToCart)
})
app.listen(5000,()=>{
    console.log("Server started on port 5000")
})