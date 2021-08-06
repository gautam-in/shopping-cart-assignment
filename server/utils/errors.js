
const errorTypes = {
    SERVER_ERROR: {
        message: "Internal Server Error",
        statusCode: 500
    },
    USER_ALREADY_EXISTS: {
        message: 'User with the same email already exists.',
        statusCode: 403
    },
    USER_NOT_FOUND: {
        message: 'User not found',
        statusCode: 404
    },
    WRONG_PASSWORD: {
        message: "Wrong password entered",
        statusCode: 401
    },
    UNAUTHORIZED: {
        message: "Unauthorized",
        statusCode: 401
    },
    JWT_EXPIRED: {
        message: "JWT expired",
        statusCode: 401
    }
}

const errorName = {
    USER_ALREADY_EXISTS: 'USER_ALREADY_EXISTS',
    SERVER_ERROR: 'SERVER_ERROR',
    USER_NOT_FOUND: "USER_NOT_FOUND",
    WRONG_PASSWORD: "WRONG_PASSWORD",
    UNAUTHORIZED: "UNAUTHORIZED",
    JWT_EXPIRED: "JWT_EXPIRED"
}

const getErrorCode = (message) => {
    return errorTypes[message] ? errorTypes[message] : {message, statusCode: 500}
}

module.exports = {
    getErrorCode,
    errorTypes,
    errorName
}