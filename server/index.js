const express = require('express')
const fs = require('fs');
const path = require('path');
const app = express()
const port = 3001

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/products',(req,res)=>{
    let jsonData = fs.readFileSync(path.resolve(__dirname,'products/index.get.json'));
    let parseData = JSON.parse(jsonData);
    res.send(parseData)
})


app.get('/categories',(req,res)=>{
  let jsonData = fs.readFileSync(path.resolve(__dirname,'categories/index.get.json'));
  let parseData = JSON.parse(jsonData);
  res.send(parseData)
})


app.get('/banners',(req,res)=>{
  let jsonData = fs.readFileSync(path.resolve(__dirname,'banners/index.get.json'));
  let parseData = JSON.parse(jsonData);
  res.send(parseData)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})