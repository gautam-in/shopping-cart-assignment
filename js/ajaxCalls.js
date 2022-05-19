//this is called.
function GetCarousels() {
    return new Promise((resolve, reject) => {
      // async opn -> resolved / rejected
      var xmlHttpReq = new XMLHttpRequest();
      xmlHttpReq.open("GET", "http://localhost:4000/banners");
      xmlHttpReq.onreadystatechange = function () {
        if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200) {
          resolve(xmlHttpReq.responseText);
        } else if (xmlHttpReq.readyState == 4 && xmlHttpReq.status !== 200) {
          reject("Something went wrong ! ");
        }
      };
      xmlHttpReq.send();
    });
}

function GetProducts() {
    return new Promise((resolve, reject) => {
      // async opn -> resolved / rejected
      var xmlHttpReq = new XMLHttpRequest();
      xmlHttpReq.open("GET", "http://localhost:4000/products");
      xmlHttpReq.onreadystatechange = function () {
        if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200) {
          resolve(xmlHttpReq.responseText);
        } else if (xmlHttpReq.readyState == 4 && xmlHttpReq.status !== 200) {
          reject("Something went wrong ! ");
        }
      };
      xmlHttpReq.send();
    });
}

function GetCategories() {
    return new Promise((resolve, reject) => {
      // async opn -> resolved / rejected
      var xmlHttpReq = new XMLHttpRequest();
      xmlHttpReq.open("GET", "http://localhost:4000/categories");
      xmlHttpReq.onreadystatechange = function () {
        if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200) {
          resolve(xmlHttpReq.responseText);
        } else if (xmlHttpReq.readyState == 4 && xmlHttpReq.status !== 200) {
          reject("Something went wrong ! ");
        }
      };
      xmlHttpReq.send();
    });
}

//cors handled here, if fetch used, we might need to set headers
function addToCartPost(post1) {
  return new Promise((resolve, reject) => {
    // async opn -> resolved / rejected
    var xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("POST", "http://localhost:4000/addToCart");
    xmlHttpReq.onreadystatechange = function () {
      if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200) {
        resolve(xmlHttpReq.responseText);
      } else if (xmlHttpReq.readyState == 4 && xmlHttpReq.status !== 200) {
        reject("Something went wrong ! ");
      }
    };
    console.log(xmlHttpReq)
    xmlHttpReq.send();
  });
}