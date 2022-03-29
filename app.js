// express
const express = require("express");
const app = express();

// cors
const cors = require("cors");

// ports
const port = 8000;
app.use(cors());

//routes
const bannersRouter = require("./routes/banners");
const categoriesRouter = require("./routes/categories");
const productsRouter = require("./routes/products");
const addProductToCartRouter = require("./routes/addProductToCart");

app.use("/api", bannersRouter);
app.use("/api", categoriesRouter);
app.use("/api", productsRouter);
app.use("/api", addProductToCartRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
