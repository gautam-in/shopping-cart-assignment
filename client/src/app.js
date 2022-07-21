var cart = document.getElementsByTagName("svg");
var button = document.getElementsByTagName("button");

//Adding items to the cart

let count = 0;
function fun() {
  count + 1;
  console.log("add to cart clicked", count++);
  document.getElementById("cart-item").innerHTML = `${count} item`;
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
