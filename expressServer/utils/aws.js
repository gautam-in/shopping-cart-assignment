const AWS = require('aws-sdk');

AWS.config.loadFromPath("./utils/aws_config.json");

const s3 = new AWS.S3()

const getPreSignedUrl = ( fileKey ) => {
    return s3.getSignedUrl("getObject", {
        Bucket: "sabkabazaar",
        Key: fileKey,
        Expires: 10 * 60,
    });
}

exports.getPreSignedUrl = getPreSignedUrl;