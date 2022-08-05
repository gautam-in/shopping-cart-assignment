const express = require("express");
var cors = require('cors');
const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require('cookie-parser')
var { expressjwt: jwt } = require("express-jwt");
dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors({ origin: '*' }))
app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use("/api", require("./routes"))

// app.use(
//     jwt({
//       secret: process.env.JWT_SECRET,
//       getToken: req => req.cookies.token,
//       algorithms: ['sha1', 'RS256', 'HS256'],
//     })
//   );
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