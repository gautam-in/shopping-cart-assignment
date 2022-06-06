const bcrypt = require("bcryptjs");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

function authController() {
  return {
    register: async (req, res) => {
      try {
        const newpass = await bcrypt.hash(req.body.password, 10);
        const user = await User.create({
          name: req.body.name,
          username: req.body.username,
          password: newpass,
        });
        if (user._id) {
          const token = jwt.sign(
            {
              name: user.name,
              username: user.username,
            },
            `${process.env.BCRYPT_SECRET_KEY}`
          );
          res.json({ status: "ok", user: token });
        }
      } catch (err) {
        res.json({
          error: "Error",
          message: "Something went wrong. Please try again",
        });
      }
    },

    login: async (req, res) => {
      const user = await User.findOne({
        username: req.body.username,
      });
      if (!user) {
        return res.json({ status: "error", user: "Invalid User" });
      }
      const isPassValid = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (isPassValid) {
        const token = jwt.sign(
          {
            name: user.name,
            username: user.username,
          },
          `${process.env.BCRYPT_SECRET_KEY}`
        );
        return res.json({ status: "ok", user: token });
      } else {
        return res.json({ status: "error", user: "Wrong Password" });
      }
    },
  };
}

module.exports = {
  login: authController().login,
  register: authController().register,
};
