const express = require("express");
const router = express.Router();
const {register, loginUser} = require("../controllers/auth")
router.post('/register', register);
router.post('/login', loginUser);

module.exports = router;