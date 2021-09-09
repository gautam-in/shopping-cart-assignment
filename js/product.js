
// api category url
const product_api_url = "http://localhost:5000/products";

// Defining async function
async function getapi(product_url) {

  // Storing response
  const response = await fetch(product_url);
  // Storing product_data in form of JSON
  var product_data = await response.json();
  show(product_data);
}

// Calling that async function
getapi(product_api_url);

// Function to define innerHTML for HTML table
function show(product_data) {
  let tab;
  // Loop to access all rows
  for (let r of product_data) {
    let divData = document.createElement('div');
    divData.classList.add("containerData")
    tab = `
    <div class="head-container">
      <h3>${r.name}</h3>
      </div>
      <div class="img-container">
      <img src=${r.imageURL} alt="baby-dove" style="width:100%;height:15em">
      </div>
      <span class="desc-container">${r.description}</span>
      <div class="price">
      <span class="margin-price">MRP Rs.${r.price}</span>
      <button id="btn-add-cart-${r.id}">Add to Cart</button>
      </div>`;
   // Setting innerHTML as tab variable
    divData.innerHTML = tab;
    document.getElementById("productdata").appendChild(divData);
    document.getElementById(`btn-add-cart-${r.id}`).onclick = function (id) { openModal(r,r.name, r.imageURL, r.price) };

  }

  function openModal(product, name, image, price) {
    let productData = [localStorage.getItem("product")];
      var cartData = productData || [];
      cartData.push(localStorage.setItem("product", product))
    // Get the modal
    let cartDatal = tab = `
    <img src=${image} alt="baby-dove" style="width:20%">
    <span>${name}</span>
    <div id="container">
    <button id="increment" style="width:1px">+</button>
    <span id="counting"></span>
    <button id="decrement" style="width:1px">-</button> X  Rs.${price}
    </div>
    <div> <img src="../static/images/lowest-price.png"></div>
    <button id="btn-add-cart">Proceed to Pay</button></p>`;

    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    document.getElementById('image').innerHTML = cartDatal
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    //initialising a variable name data
    var data = 1;

    //printing default value of data that is 0 in h2 tag
    document.getElementById("counting").innerText = data;

    //creation of increment function
    document.getElementById("increment").onclick = function () {
      data = data + 1;
      document.getElementById("counting").innerText = data;
    }
    //creation of decrement function
    document.getElementById("decrement").onclick = function () {
      data = data - 1;
      document.getElementById("counting").innerText = data;
    }
  }
}



