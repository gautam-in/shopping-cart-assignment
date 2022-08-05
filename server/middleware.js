const { verify } = require("jsonwebtoken");


exports.isValidToken = async (req, res, next) => {
    try {
        const token = req.get("auth_token");

        if (!token) {
            return res.status(401).send("token missing..");
        } else {
            let decoded = verify(token, process.env.JWT_SECRET);

            if (!decoded) {
                return res.status(403).send("Session Expired......");
            } else {
                // req.user = decoded;
                next();
            }
        }

    } catch (err) {
        return "";
    }
}