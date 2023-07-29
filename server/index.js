import http from "http";
import fs from "fs";

// Import data
import products from "./data/products.json" assert { type: "json" };
import categories from "./data/categories.json" assert { type: "json" };
import banners from "./data/banners.json" assert { type: "json" };

const imageContentTypes = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
};

const stringify = (input) => JSON.stringify(input);

// Handle 404 not found routes.
function sendErrorResponse(response) {
  response.writeHead(404, { "Content-Type": "application/json" });
  return response.end(stringify({
    status: false,
    statusCode: 404,
    message: "Requested resource not found."
  }));
}

// Read the data and image files for serving
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


http.createServer(async (request, response) => {
  // Set CORS headers
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const url = request.url;
  const method = request.method;

  // Handle API requests.
  let responseData = null;
  let statusCode = null;

  if (url === "/api/products" && method === "GET") {
    responseData = { status: true, statusCode: 200, data: products };
    statusCode = 200;
  } else if (url === "/api/banners" && method === "GET") {
    responseData = { status: true, statusCode: 200, data: banners };
    statusCode = 200;
  } else if (url === "/api/categories" && method === "GET") {
    responseData = { status: true, statusCode: 200, data: categories };
    statusCode = 200;
  } else if (url === "/api/add-to-cart" && method === "POST") {
    responseData = {
      status: true,
      statusCode: 200,
      data: "Product added to the cart successfully",
    };
    statusCode = 200;
  }

  if (responseData) {
    response.writeHead(statusCode, {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600" // Cache for 1 hour
    });
    return response.end(stringify(responseData));
  }

  // Serve image assets
  const fileExtension = url.match(/\.[0-9a-z]+$/i)?.[0];
  const contentType = imageContentTypes[fileExtension];
  if (contentType) {
    response.writeHead(200, { "Content-Type": contentType });
    return readFile(`./${url}`, response);
  } else {
    // 404 handler
    return sendErrorResponse(response);
  }

}).listen(8000, () => {
  console.log("Server started on port 8000");
})