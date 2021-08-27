
const PATHS = {
    'BANNERS':'./server/banners/index.get.json',
    'ADD_TO_CART': './server/addToCart/index.post.json',
    'CATEGORIES': './server/categories/index.get.json',
    'PRODUCTS': './server/products/index.get.json'
};

const apiRoutes = (app, fs) => {
    const getData = (url, callback, encoding = 'utf8') => {
        fs.readFile(url, encoding, (err, data) => {
            if (err) {
              throw err;
            }
            callback(data);
          });
    }
    // READ
    app.get('/banners', (req, res) => {
        getData(PATHS.BANNERS, data => {
            res.send(JSON.parse(data));
        })
    });
    app.get('/categories', (req, res) => {
        getData(PATHS.CATEGORIES, data => {
            res.send(JSON.parse(data));
        })
    });
    app.get('/products', (req, res) => {
        getData(PATHS.PRODUCTS, data => {
            res.send(JSON.parse(data));
        })
    });
    app.post('/addToCart', (req, res) => {
        getData(PATHS.ADD_TO_CART, data => {
            res.send(JSON.parse(data));
        })
    });
  };
  
  module.exports = apiRoutes;