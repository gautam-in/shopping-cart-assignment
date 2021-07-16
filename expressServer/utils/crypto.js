const AES = require("crypto-js/aes")

const encrypt = (data) => {
    return AES.encrypt(data, process.env.PASS_ENCRYPT_KEY)
}

const decrypt = (data) => {
    return AES.decrypt(data, process.env.PASS_ENCRYPT_KEY)
}