// express
const express = require("express");
const app = express();
const cors = require("cors");

//routes
const bannersRouter = require("./routes/banners");
const categoriesRouter = require("./routes/categories");
const productsRouter = require("./routes/products");
const addProductToCartRouter = require("./routes/addProductToCart");

// ports
const port = 8000;

app.use(cors());
app.use("/api", bannersRouter);
app.use("/api", categoriesRouter);
app.use("/api", productsRouter);
app.use("/api", addProductToCartRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
