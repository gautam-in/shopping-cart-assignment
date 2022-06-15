import "../styles/cart.scss";

// Get the modal
let modal = document.getElementById("cart_modal");

const getCartData=async()=>{
  const url = "http://localhost:3200/cart"
  const jsonData = await fetch(url);
  const resData = await jsonData.json();
  const itemCount = document.getElementById("itemCount")
  itemCount.innerHTML = resData.length + " Item";
  console.log(itemCount)
  return resData;
}

var btn = document.getElementById("openModal");

var span = document.getElementById("close");

btn.onclick = function() {
  modal.style.display = "block";
  const element = document.getElementById("cart_item")
  element.style.display ="block"
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

getCartData()
