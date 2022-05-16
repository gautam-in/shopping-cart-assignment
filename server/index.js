const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const app = express();

const banners = require("./banners/index.get.json");
const categories = require("./categories/index.get.json");
const addToCart = require("./addToCart/index.post.json");
const products = require("./products/index.get.json");

/************* Static files **************/
app.use(express.static("static"));

/************* Corse setup **************/
app.use(cors());

/***********************************************************************/
/***************************** API Routes ******************************/
/***********************************************************************/

/************* Home Route **************/
app.get("/", (req, res) => {
  try {
    // res.send("Server is running");
    res.sendFile('index.html', {root: __dirname});
  } catch (err) {
    console.log(err);
  }
});

/************* Banners Route **************/
app.get("/banners", (req, res) => {
  try {
    res
      .status(200)
      .json({ msg: "Banners Loaded successfully", success: true, banners });
  } catch (err) {
    res
      .status(500)
      .json({ msg: "Error while Loading Banners", success: false });
    console.log(err);
  }
});

/************* Categories Route **************/
app.get("/categories", (req, res) => {
  try {
    res
      .status(200)
      .json({
        msg: "Categories Loaded successfully",
        success: true,
        categories,
      });
  } catch (err) {
    res
      .status(500)
      .json({ msg: "Error while Loading categories", success: false });
    console.log(err);
  }
});

/************* Products Route **************/
app.get("/products", (req, res) => {
  try {
    res
      .status(200)
      .json({ msg: "Products Loaded successfully", success: true, products });
  } catch (err) {
    res
      .status(500)
      .json({ msg: "Error while Loading products", success: false });
    console.log(err);
  }
});

/************* AddToCart Route **************/
app.get("/add-to-cart", (req, res) => {
  try {
    res.status(200).json({ ...addToCart, success: true });
  } catch (err) {
    res
      .status(500)
      .json({ msg: "Error while Loading add To Cart", success: false });
    console.log(err);
  }
});

/************* Server setup **************/
app.listen(PORT, () => console.log("server is running at port ", PORT));
