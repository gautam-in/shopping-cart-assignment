const { getHash, getJSON } = require("../src/js/helper");
const config = require("../src/js/config");
describe("helper.js", function () {
  describe("getHash", function () {
    it("returns query string object from the url", function () {
      let win = {
        location: {
          hash: "#product?cat=1234567;prod=pr321",
        },
      };
      //  spyOnProperty(window, "hash", get).and.returnValue("#product/1234567");
      let hashvalue = getHash(win, "query");
      expect(hashvalue.cat).toBe("1234567");
      expect(hashvalue.prod).toBe("pr321");
    });

    it("returns undefined value when there is only page in the hash", function () {
      let win = {
        location: {
          hash: "#product",
        },
      };
      //  spyOnProperty(window, "hash", get).and.returnValue("#product/1234567");
      let hashvalue = getHash(win, "query");
      expect(hashvalue?.cat).toBeUndefined();
    });
    it("returns undefined value when there are two pages", function () {
      let win = {
        location: {
          hash: "#category/product",
        },
      };
      //  spyOnProperty(window, "hash", get).and.returnValue("#product/1234567");
      let hashvalue = getHash(win, "query");
      expect(hashvalue?.cat).toBeUndefined();
    });
    it("returns application path name from the hash ", function () {
      let win = {
        location: {
          hash: "#category/product",
        },
      };
      let hashvalue = getHash(win, "path");
      expect(hashvalue).toBe("category/product");
    });

    it("returns undefined when the url doesnt have a hash", function () {
      let win = {
        location: {
          hash: "",
        },
      };
      let hashvalue = getHash(win, "path");
      expect(hashvalue).toBeFalsy();
    });
  });

  describe("getJSON", function () {
    it("returns the product details when Product service is called", async function () {
      window.fetch = function () {
        return new Promise((resolve, reject) => {
          resolve({
            ok: true,
            json: function () {
              return [
                {
                  name: "Apple - Washington, Regular, 4 pcs",
                },
              ];
            },
          });
        });
      };
      const result = await getJSON(config.BASE_URL + "/products");
      expect(result[0]["name"]).toBe("Apple - Washington, Regular, 4 pcs");
    });

    it("returns the intuitive error  when the fetch fails", function () {
      window.fetch = function () {
        return new Promise((resolve, reject) => {
          resolve({
            ok: false,
            status: 401,
            json: function () {
              return {
                message: "unable to retrieve data",
              };
            },
          });
        });
      };
      expect(function () {
        //TODO refactor toThrow Method
        getJSON(config.BASE_URL + "/products")
          .catch(function (error) {
            console.log("error occurred: " + error.message);
            throw new Error("asdfa");
          })
          .toThrow();
      });
    });
  });
});
