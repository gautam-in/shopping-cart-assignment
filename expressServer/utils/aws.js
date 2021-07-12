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

exports.getPreSignedUrl = getPreSignedUrl;