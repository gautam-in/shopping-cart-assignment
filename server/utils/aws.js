const AWS = require('aws-sdk');

AWS.config.loadFromPath("./utils/aws_config.json");

const s3 = new AWS.S3({
    signatureVersion: "v4"
})

const getPreSignedUrl = ( fileKey ) => {
    return s3.getSignedUrl("getObject", {
        Bucket: "sabkabazaar0",
        Key: fileKey,
        Expires: 10 * 60,
    });
}

const injectTempUrl = (data, key) => {
    if(Array.isArray(data)) {
        return data.map(value => {
            if(value[key]) {
                const preSignedUrl = getPreSignedUrl(value[key]);
                return {...value._doc, temp_url: preSignedUrl}
            } else return value._doc
        })
    } else {
        if(data[key]) {
            const preSignedUrl = getPreSignedUrl(data[key]);
            return {...data, temp_url: preSignedUrl}
        } else return data
    }
}

module.exports = {
    getPreSignedUrl,
    injectTempUrl
}