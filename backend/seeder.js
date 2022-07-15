import dotenv from "dotenv";
import users from "./data/users.js";
import category from "./data/categories/index.get.json"  assert {type: "json"};
import products from "./data/products/index.get.json"  assert {type: "json"};
import banners from "./data/banners/index.get.json"  assert {type: "json"};
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Category from "./models/categoryModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";
import Banner from "./models/bannerModel.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();
    await Category.deleteMany();
    await Banner.deleteMany();

    await User.insertMany(users);
    await Category.insertMany(category);
    await Product.insertMany(products);
    await Banner.insertMany(banners);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
