const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Basic index route');
});

app.get('/banners', (req, res) => {
  fs.readFile('./server/banners/index.get.json', (err, json) => {
    if (err) return err;
    let obj = JSON.parse(json);
    res.json(obj);
  });
});

app.get('/categories', (req, res) => {
  fs.readFile('./server/categories/index.get.json', (err, json) => {
    if (err) return err;
    let obj = JSON.parse(json);
    res.json(obj);
  });
});

app.get('/products', (req, res) => {
  fs.readFile('./server/products/index.get.json', (err, json) => {
    if (err) return err;
    let obj = JSON.parse(json);
    res.json(obj);
  });
});

app.post('/addToCart', (req, res) => {
  fs.readFile('./server/addToCart/index.post.json', (err, json) => {
    if (err) return err;
    let obj = JSON.parse(json);
    res.json(obj);
  });
});

app.listen(port, () => console.log(`API server up and running on port ${port}!`));