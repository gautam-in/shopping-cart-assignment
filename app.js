const express = require("express");
const dotenv = require("dotenv");
const router = express.Router();
const morgan = require("morgan");
const auth = require("./routes/auth");
const banners = require("./routes/banner");
const categories = require("./routes/category");
const products = require("./routes/products");
const cart = require("./routes/cart");
const path = require("path");
const connectDB = require('./config/db')
const errorHandler = require("./middleware/errorHandler");
dotenv.config({path: './config/config.env'});
connectDB();

const app = express();
app.use(express.json());
if (process.env.NODE_ENV === 'development') {
    console.log("environment is dev")
    app.use(morgan('dev'));
}
app.use(express.static(path.join(__dirname, 'static')));

app.use('/api/v1/auth',auth);
app.use('/api/v1/banners',banners);
app.use('/api/v1/categories',categories);
app.use('/api/v1/products', products);
app.use('/api/v1/cart', cart);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;
app.listen(PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`)
);