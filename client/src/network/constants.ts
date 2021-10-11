export const serverErrors = {
  NOT_FOUND: "404 - PAGE NOT FOUND",
  SERVER_ERROR: "5XX - INTERNAL SERVER ERROR",
  CLIENT_ERROR: "-------"
};

export const HTTP_STATUS_CODES = {
  ok: 200,
  created: 201,
  noContent: 204,
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  conflict: 409,
  unprocessableEntity: 422,
  internalServerError: 500,
  badGateway: 502,
  serviceUnavailable: 503,
  gatewayTimeout: 504,
  notModified: 304
};
