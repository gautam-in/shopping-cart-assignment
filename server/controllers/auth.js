const Users = require("../model/user.js");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../configuration/configuration");
const logger = require("../logger/index.js");

//handle user authentication
const login = async (req, res) => {
  try {
    logger.debug("login-controller: login() initiate");
    const { email, password } = req.body;
    logger.debug(`login-controller: email :${email}`);
    logger.debug(`login-controller: password :${password}`);
    const user = await Users.findOne({ email });
    if (user && (await bycrypt.compare(password, user.password))) {
      logger.debug(`login-controller: User Authenticated`);
      const token = await jwt.sign({
          user_id: user._id,
          email: email
        },
        config.secretKey,
        { expiresIn: "1h" }
      );

      logger.debug(`login-controller: saving jwt token in user model`);
      user.save();
      logger.debug(`login-controller: jwt token saved in user model ${JSON.stringify(user)}`);
      res
      .status(200)
      .cookie('token',token,{sameSite:'strict',path:'/',maxAge: 1000 * 60 * 30,httpOnly: true})
      .send({ message: "User Authorized",userId:user._id});
    } else {
      logger.error(`login-controller: User is not authorized to access the system`);
      res.status(401).json({ error: "Unauthorized" });
    }
  } catch (error) {
    logger.error(`login-controller: Internal server error: ${error.message}`)
    res.status(500).json({ error: error.message });
  }
};

//clear token from cookie
const logout = (req,res)=>{
  res.clearCookie("token");
  res.status(200).json({message:'Logout successfully'});
}

module.exports = { login,logout };
