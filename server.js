const express = require("express");
const path = require("path");
var compression = require("compression");

const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, "/")));

app.get("/*", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.listen(4200, () => console.log("Server running on port 4200 !"));
