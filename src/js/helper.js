const config = require("./config");

const helper = {
  timeout: async function (s) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(
          new Error("Request took too long to respond after ${s} seconds")
        );
      }, s * 1000);
    });
  },
  getJSON: async function (url) {
    try {
      const fetchPro = fetch(url);
      const res = await Promise.race([
        fetchPro,
        helper.timeout(config.TIMEOUT_SEC),
      ]);

      const data = await res.json();
      if (!res.ok) {
        throw new Error(`${res.status}-${data.message}`);
      }
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getHash: function (win, type) {
    const hashVal = win.location.hash.slice(1).split("?");
    if (type == "path") {
      return hashVal[0];
    }
    if (type == "query" && hashVal[1]) {
      queryArray = hashVal[1].split(";");
      queryObjArray = queryArray.map((curr) => ({
        [curr.split("=")[0]]: curr.split("=")[1],
      }));
      return Object.assign({}, ...queryObjArray);
    }
  },

  delay: function () {
    return;
    for (i = 0; i < 1000000000; i++) {}
  },
};
module.exports = helper;
