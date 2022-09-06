//sanitize inputs

const jwt = require("jsonwebtoken");
const config = require("../configuration/configuration");
const logger = require('../logger/index');

//validate token from request header
const verifyToken = (req, res, next) => {
  logger.debug(`Validators: verifyToken() initiated`);
  const cookie = req.headers?.cookie;
  if(!cookie){
    return res.status(401).json({ error: "Unauthorized" }); 
  }
  let [ tokenName, ...rest] = cookie.split(`=`);
  tokenName = tokenName?.trim();
  if(!tokenName){
    return res.status(401).json({ error: "Unauthorized" });
  }
  const token = rest.join(`=`).trim();
  if (!token) {
    logger.debug(`Validators: user is unauthorize`);
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    const decode = jwt.verify(token, config.secretKey);
    req.user = decode;
  } catch (error) {
    logger.debug(`Validators: user is unauthorize`);
    return res.status(401).json({ error: "Unauthorized" });
  }
  return next();
};

//validate login payload
const validateLoginPayload = (req, res, next) => {
  logger.debug(`Validators: validateLoginPayload() initiate`);
  const { email, password } = req.body;
  logger.debug(`Validators: request payload ${JSON.stringify(req.body)}`);
  if (!email || !password) {
    logger.error(`Validators: inputs are not valid`);
    return res.status(400).json({ error: "BAD REQUEST" });
  }
  return next();
};

//validate register payload
const validateRegisterPayload = (req, res, next) => {
  logger.debug(`Validators: validateRegisterPayload() initiate`);
  const { first_name, last_name, email, password, confirm_password } = req.body;
  logger.debug(`Validators: request payload ${req.body}`);
  if (!(first_name && last_name && email && password && confirm_password)) {
    logger.error(`Validators: inputs are not valid`);
    return res.status(400).json({ error: "BAD REQUEST" });
  }

  if (password !== confirm_password) {
    logger.error(`Validators: inputs are not valid`);
    return res.status(400).json({ error: "BAD REQUEST" });
  }

  const emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (!email.match(emailFormat)) {
    logger.error(`Validators: inputs are not valid`);
    return res.status(400).json({ error: "BAD REQUEST" });
  }
  return next();
};

const validateCartPayload = (req, res, next) => {
  logger.debug(`Validators: validateCartPayload() initiate`);
  const { userId, product } = req.body;
  logger.debug(`Validators: request payload ${JSON.stringify(req.body)}`);
  if (!userId || !product) {
    logger.error(`Validators: inputs are not valid`);
    return res.status(400).json({ error: "BAD REQUEST" });
  }

  if (
    !product.hasOwnProperty("productId") ||
    !product.hasOwnProperty("quantity") ||
    !product.hasOwnProperty("name") ||
    !product.hasOwnProperty("price") ||
    !product.hasOwnProperty("stock") ||
    !product.hasOwnProperty("productImg")
  ) {
    logger.error(`Validators: inputs are not valid`);
    return res.status(400).json({ error: "BAD REQUEST" });
  }
  return next();
};

module.exports = { verifyToken, validateLoginPayload, validateRegisterPayload,validateCartPayload };
