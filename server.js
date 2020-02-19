const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
// const path = require('path')

app.use(cors())

app.post('/add-to-cart', (req, res) => {
  const addtocart = require('./server/addToCart/index.post.json')
  res.header('Content-Type','application/json')
  res.status(200)
  res.send(JSON.stringify(addtocart))
})
app.get('/banner-images', (req, res) => {
  const banner = require('./server/categories/index.get.json')
  res.header('Content-Type','application/json')
  res.status(200)
  res.send(JSON.stringify(banner))
})
app.get('/categories', (req, res) => {
  const categories = require('./server/categories/index.get.json')
  res.header('Content-Type','application/json')
  res.status(200)
  res.send(JSON.stringify(categories))
})
app.get('/products',(req, res) => {
  const products = require('./server/products/index.get.json')
  res.header('Content-Type','application/json')
  res.status(200)
  res.send(JSON.stringify(products))
})
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`))
// create a GET route
app.get('/api', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })
})
