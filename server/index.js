const http = require("http");
const fs = require("fs");

// Import data
const products = require("./data/products.json");
const categories = require("./data/categories.json");
const banners = require("./data/banners.json");

function sendErrorResponse(response) {
  response.writeHead(404, {
    "Content-Type": "text/html",
  });
  response.write("<h1>File Not Found!</h1>");
  response.end();
}

function readFile(filePath, response) {
  if (fs.existsSync(filePath)) {
    fs.readFile(filePath, (error, data) => {
      if (error) {
        console.log("Error Reading File", error);
        return sendErrorResponse(response);
      }
      response.write(data);
      return response.end();
    });
  } else {
    return sendErrorResponse(response);
  }
}

function stringify(input) {
  return JSON.stringify(input);
}

http
  .createServer((request, response) => {
    const url = request.url;
    const method = request.method;

    // handle apis
    if (url === "/api/products" && method === "GET") {
      response.writeHead(200, { "Content-Type": "application/json" });

      return response.end(
        stringify({
          status: true,
          statusCode: 200,
          data: products,
        })
      );
    }

    if (url === "/api/banners" && method === "GET") {
      response.writeHead(200, { "Content-Type": "application/json" });

      return response.end(
        stringify({
          status: true,
          statusCode: 200,
          data: banners,
        })
      );
    }

    if (url === "/api/categories" && method === "GET") {
      response.writeHead(200, { "Content-Type": "application/json" });

      return response.end(
        stringify({
          status: true,
          statusCode: 200,
          data: categories,
        })
      );
    }

    if (url === "/api/add-to-cart" && method === "POST") {
      response.writeHead(200, { "Content-Type": "application/json" });

      response.end(
        stringify({
          status: true,
          statusCode: 200,
          data: "Product added to the cart successfully",
        })
      );
    }

    // handle image assests
    if (url.indexOf(".png") !== -1) {
      response.writeHead(200, {
        "Content-Type": "image/png",
      });
      return readFile(`./${url}`, response);
    } else if (url.indexOf(".jpg") !== -1) {
      response.writeHead(200, {
        "Content-Type": "image/jpg",
      });
      return readFile(`./${url}`, response);
    } else if (url.indexOf(".svg") !== -1) {
      response.writeHead(200, {
        "Content-Type": "image/svg",
      });
      return readFile(`./${url}`, response);
    } else {
      return sendErrorResponse(response);
    }
  })
  .listen(8000, () => {
    console.log("Server running on port 8000");
  });
