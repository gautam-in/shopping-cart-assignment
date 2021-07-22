const jwt = require("jsonwebtoken");

const authenticated = (next) => (root, args, context, info) => {
    if (!context.authenticated) {
        throw new Error(`Unauthenticated!`);
    }
    return next(root, args, context, info);
};

const jwtSign = (userData) => {
    return jwt.sign(userData, process.env.JWT_ENCRYPT_KEY, {
        expiresIn: "1d"
    })
}

const jwtVerify = (token, userData) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_ENCRYPT_KEY, (err, decoded) => {
            if(err) {
                reject(err)
            } else {
                resolve(decoded)
            }
        });
    })
}

module.exports  = {
    authenticated,
    jwtSign,
    jwtVerify
}

