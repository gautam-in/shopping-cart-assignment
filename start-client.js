// express.js
const express = require("express"); // import
const app = express();
const cors = require("cors");
const path = require("path");

app.use(express.static(path.join(__dirname, "")));

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => res.sendFile("index.html", { root: __dirname }));
app.listen(5050, () => console.log("Server running at port 5050 !"));