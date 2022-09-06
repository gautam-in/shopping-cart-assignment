const Users = require("../model/user");
const bycrypt = require("bcrypt");
const logger = require('../logger/index');

//create account
const register = async (req, res) => {
  logger.debug(`registerCtrl: register() initiate`);
  try {
    const { first_name, last_name, email, password } = req.body;
    logger.debug(`registerCtrl: request payload: ${req.body}`);
    const isUserExist = await Users.findOne({ email: email });
    if (isUserExist) {
      logger.debug(`registerCtrl: User already exist so operation aborted`);
      return res.status(409).json({ error: "User Already Exist" });
    }

    //store password in encryption format
    const encryptPassword = await bycrypt.hash(password, 10);
    logger.debug(`registerCtrl: trying to store user in users collection`);
    const user = new Users({
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: encryptPassword,
      confirm_password: encryptPassword,
    });
    
    await user.save((err, result) => {
      if (err) console.log(err);
      else console.log(result);
    });
    logger.debug(`registerCtrl: user saved in users collection`);
    res.status(200).json({ message: "User is successfully created" });
  } catch (error) {
    logger.debug(`registerCtrl: Internal server error: ${error.message}`);
    res.status(500).json({ error: "INTERNAL SERVER ERROR" });
  }
};
module.exports = { register };