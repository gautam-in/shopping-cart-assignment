const sha3 = require("crypto-js/sha3")

const encrypt = (data) => {
    return sha3(data).toString()
}

const decrypt = (data) => {
    return sha3(data).toString()
}

module.exports = {
    encrypt,
    decrypt
}