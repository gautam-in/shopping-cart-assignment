import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

let app = express();
let PORT = process.env.PORT || 5000;

//__dirname is not supported. hence below two lines are used
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let data_path = path.resolve(__dirname, "./server");
const readDataFile = (method, name) => {
  const data = fs.readFileSync(`${data_path}/${name}/index.${method}.json`, "utf-8");
  return JSON.parse(data);
};
const banners = readDataFile("get", "banners");
const products = readDataFile("get", "products");
const categories = readDataFile("get", "categories");
const addToCart = readDataFile("post", "addToCart");

const logger = (req, res, next) => {
  console.info(`request: ${req.method} ${req.url}`);
  next();
};
app.use(logger);
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/banners", (req, res) => {
  res.send(banners);
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.post("/addToCart", (req, res) => {
  res.send(addToCart);
});

app.post("/signin", (req, res) => {
  res.send({ response: "Success", responseMessage: "Login successful" });
});

app.post("/signup", (req, res) => {
  res.send({ response: "Success", responseMessage: "Signup successful" });
});

app.listen(PORT, () => {
  console.log(`API server has started listening on port ${PORT}`);
});
