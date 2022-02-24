
// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('.shopping-cart');
const closeBtn = document.querySelector('.close');
const DOMSubTotal = document.querySelector(".cart-subtotal");


const minusProductCount = document.querySelector(".fa-minus-circle");
let APIdataArr = JSON.parse(localStorage.getItem("APIDATA"));


// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {

  let cartItems = JSON.parse(localStorage.getItem("cart"));

  modal.style.display = 'flex';
  modal.style.alignItems = 'center';
  var totalCart = 0;
  for (item in cartItems) {
    // iterating over the cart
    APIdataArr.filter((data) => {
      // eslint-disable-next-line no-undef
      if (data.id === cartItems[item]) {
        addCartItem(data);

        totalCart += data.price * data.count;
        totalCart = Number(totalCart.toFixed(2));

        DOMSubTotal.textContent = totalCart;

      }
    });
  }

}
const addProductCount = document.querySelector(".fa-plus-circle");
// if (addProductCount) {
//   addProductCount.addEventListener("click", addToCart);

// }
const addItemtoCart = (price, id) => {
  let count = document.querySelector(".itemCount" + id).textContent;
  count = parseInt(count);
  count++;
  document.querySelector(".itemCount" + id).textContent = count;
  let totalCart = DOMSubTotal.textContent;
  totalCart = parseFloat(totalCart);
  totalCart += price;
  DOMSubTotal.textContent = totalCart;
  let increaseCartNumber = parseInt(DOMCartTotal.textContent);
  increaseCartNumber++;
  DOMCartTotal.textContent = `${increaseCartNumber} items `;
}


const removeItemtoCart = (price, id) => {
  console.log(price);
  console.log(id);
  let count = document.querySelector(".itemCount" + id).textContent;
  count = parseInt(count);
  if (count > 1) {
    count--;

    document.querySelector(".itemCount" + id).textContent = count;
    let totalCart = DOMSubTotal.textContent;
    totalCart = parseFloat(totalCart);
    totalCart -= price;
    DOMSubTotal.textContent = totalCart;
    let increaseCartNumber = parseInt(DOMCartTotal.textContent);
    increaseCartNumber--;
    DOMCartTotal.textContent = `${increaseCartNumber} items `;
  }
  return
}
const addCartItem = (content) => {
  console.log(content, "content");
  // let productCount = 1;
  let DOMCartEachItem = document.createElement("tr");
  DOMCartEachItem.innerHTML = `<tr>
  <td>
    <div class="cart-info">
      <img src="${content.imageURL}" alt="">
      <div>
        <p><strong>${content.name}</strong></p>
        <small>Price per piece: ₹${content.price}</small>
        <p ><i onclick="removeItemtoCart(${content.price},'${content.id}')" class="fas fa-minus-circle"></i><span class="itemCount${content.id}">1</span><i onclick="addItemtoCart(${content.price}, '${content.id}')" class="fas fa-plus-circle"></i> x ₹${content.price}<p>
      </div>
    </div>
  </td>
</tr>`;

  DOMContent.appendChild(DOMCartEachItem);
console.log(DOMCartEachItem);
  return DOMCartEachItem;

}
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}




