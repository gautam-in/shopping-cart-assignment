"use strict";

import config from "../../../config";

const defaults = {
  mode: "cors",
  cache: "default",
  method: "GET",
  credentials: "same-origin",
};

// * Export a standard `fetch` method containing necessary global options
// *
// * @module FetchData
// * @param {String} url Path to supply to `fetch` method
// * @param {String} [opts] Optional parameters to supply or override default options. Default value is {}
export default function (url, opts = {}) {
  const options = { ...defaults, ...opts };

  options.headers = {
    ...options.headers,
    ...opts.headers,
  };

  let apiUrl = url;
  if (apiUrl.indexOf("http") == -1 || apiUrl.indexOf("https") == -1) {
    apiUrl = `${config.apiUrlPrefix}${url}`;
  }

  return fetch(url, options)
    .then((response) => {
      const responseHeader = getAjaxResponseHeader(response);
      const responseStatus = response.status;
      return response
        .json()
        .then((json) => {
          for (var i = 0; i < responseHeader.length; i++) {
            if (responseHeader[i].key === "Authorization") {
              json.loginToken = responseHeader[i];
            }
            if (responseHeader[i].key === "Date") {
              json.responseDate = responseHeader[i];
            }
            if (responseHeader[i].key === "sysdate") {
              json.responseSysDate = responseHeader[i];
            }
          }
          // json.status = responseStatus;
          return json;
        })
        .catch((e) => {
          const err = {
            status: responseStatus,
            error: e,
          };
          return err;
        });
    })
    .then((responseData) => responseData)
    .catch((error) => {} /* console.error(error)*/);
}

/**
 * getAjaxResponseHeader - Returns header from response if present
 *
 * @param { object } responseObject - unparsed response object
 *
 * @returns { Array } array of response header
 */
const getAjaxResponseHeader = (responseObject) => {
  // headerKeys is an array of all the response header attribute which are needed
  const headerKeys = ["Authorization", "Date", "sysdate"];
  const headerResponse = [];

  for (var i = 0; i < headerKeys.length; i++) {
    let headerToken =
        responseObject.headers && responseObject.headers.get(headerKeys[i]),
      headerRes = {};

    if (headerToken && headerToken.length) {
      headerRes = {
        type: "header",
        name:
          headerKeys[i] === "Authorization" ? headerKeys[i] : "sessionToken",
        value: headerToken,
        key: headerKeys[i],
      };
    } else {
      headerRes = {};
    }
    headerResponse.push(headerRes);
  }

  return headerResponse;
};
