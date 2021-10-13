function onLoadCartNumbers() {
  let productCartCounter = localStorage.getItem("cartCounter");
  if (productCartCounter) {
    document.querySelector(".cart-count").textContent = productCartCounter;
  }
}
onLoadCartNumbers();

let prodList = document.getElementById("prod");

function getFromAPI(url, callback) {
  var obj;
  fetch(url)
    .then((res) => res.json())
    .then((data) => (obj = data))
    .then(() => callback(obj));
}

getFromAPI("http://localhost:5000/categories", getData);

function getData(objs) {
  objs.forEach((x, ind) => {
    if (x.order !== -1) {
      let classNames = ind % 2 === 0 ? "right" : "";
      prodList.innerHTML += ` <div class="product-card ${classNames}">
        <div class="product-info">
          <h5>${x.name}</h5>         
          <p>${x.description}</p>       
          <a href="../productsPage/products.html"> <button id="cart-button" >Explore ${x.name}</button></a>
        </div>
        <div class="product-image">
        <img src=${x.imageUrl} alt=${x.name}>
        </div>
      </div>`;
    }
  });
}
