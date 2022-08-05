const express = require("express");
var cors = require('cors');
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors({ origin: '*' }))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", require("./routes"))
app.use(function (req, res, next) {
    res.setHeader(
        'Content-Security-Policy-Report-Only', "default-src 'self'; script-src 'self'; style-src 'self'; font-src 'self'; img-src 'self'; frame-src 'self'"
    );
    next();
});
// app.use(express.session({
//     secret: process.env.JWT_SECRET,
//     cookie: {
//         httpOnly: true,
//         secure: true
//     }
// })
// )
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});