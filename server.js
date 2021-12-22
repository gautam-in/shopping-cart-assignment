const express = require("express");
const path = require("path");
const compression = require("compression");
const bannersData = require("./server/banners/index.get.json");
const categoriesData = require("./server/categories/index.get.json");
const productsData = require("./server/products/index.get.json");
const addToCartAPIResponseData = require("./server/addToCart/index.post.json");
let users = require("./models/users.model");

const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, "/")));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.get("/login", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.get("/register", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.get("/productsList", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.get("/banners", (req, res) => {
  res.json(bannersData);
});

app.get("/categories", (req, res) => {
  res.json(categoriesData);
});

app.get("/products", (req, res) => {
  res.json(productsData);
});

app.post("/addToCart", (req, res) => {
  console.log("addToCart API request body: ", req.body);
  res.json(addToCartAPIResponseData);
});

app.post("/newUserRegistration", (req, res) => {
  console.log("newUserRegistration API request body: ", req.body);
  const isUserExist = users.find((user) => user.email === req.body.email);
  if (isUserExist) {
    res.json({
      status: "failure",
      message: "User already exist with same email",
    });
  } else {
    users = [...users, { ...req.body, id: new Date().getTime() }];
    console.log("Users: ", users);
    res.json({ status: "success", message: "User registered successfully" });
  }
});

app.post("/userLogin", (req, res) => {
  console.log("userLogin API request body: ", req.body);
  const personObj = users.find(
    (user) =>
      user.email === req.body.email && user.password === req.body.password
  );
  if (personObj) {
    const { firstName, lastName, email } = personObj;
    res.json({
      status: "success",
      message: "User login success",
      firstName,
      lastName,
      email,
    });
  } else {
    res.json({ status: "failure", message: "Login failed!" });
  }
});

app.get("/logout", (req, res) => {
  console.log("logout API user email: ", req.query.email);
  res.json({ status: "success", message: "Logout success!" });
});

// Handling non matching request from the client
app.get("*", (req, res) => {
  res.status(404).send("<h1>Page not found!</h1>");
});

// app.get("/*", (req, res) => {
//   res.sendFile("index.html", { root: __dirname });
// });

app.listen(4200, () => console.log("Server running on port 4200 !"));
